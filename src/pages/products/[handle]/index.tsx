// pages/product/[handle].jsx
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useState } from "react";
import { GET_PRODUCT_BY_HANDLE } from "@/lib/queries/product.queries";
import ImageGallery from "@/components/shared/ImageGallery";
import Image from "next/image";
import { PlusIcon } from "lucide-react";

export default function ProductPage() {
  const router = useRouter();
  const { handle } = router.query;
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_HANDLE, {
    variables: { handle },
    skip: !handle,
  });

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [readMore, setReadMore] = useState(false);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error || !data?.productByHandle)
    return <p className="p-4 text-red-500">Product not found.</p>;

  const product = data.productByHandle;
  const variants = product.variants.edges.map((edge) => edge.node);
  const images = product.images.edges.map((edge) => edge.node);
  console.log("🚀 ~ ProductPage ~ images:", images);
  const defaultVariant = selectedVariant || variants[0];

  return (
    <>
      <Head>
        <title>{product.title} | My Shopify Store</title>
        <meta name="description" content={product.description.slice(0, 150)} />
      </Head>

      <div className="max-w-[1500px] pt-[16px] px-[30px] mx-auto flex justify-center gap-[32px]">
        <div className="w-[823px] mr-[15px]">
          <ImageGallery images={images} />
        </div>

        <div className="w-[100%] max-w-[581px]">
          <h1 className="text-[24px] font-[700] text-[#161515] leading-[34px]">
            {product.title}
          </h1>
          <p className="text-[14px]] text-[#161515] leading-[30px]">
            {product.vendor}
          </p>

          <p className="text-[18px] font-[700] text-[#161515] leading-[30px]">
            ${defaultVariant.price.amount}
          </p>

          {/* Variant Selector */}
          <div className="w-[100%] py-[16px]">
            <p className="text-[20px] font-[600] text-[#1c2e36] uppercase">
              Size
            </p>
            <div className="flex flex-wrap gap-[8px] pt-[28px]">
              {variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  disabled={!variant.availableForSale}
                  className={`w-[66px] h-[47px] flex items-center justify-center border border-[#373434] text-[14px] hover:bg-[#373434] hover:text-white transition-all duration-300 ease-in-out cursor-pointer ${
                    selectedVariant?.id === variant.id
                      ? "bg-[#373434] text-white"
                      : "bg-white text-[#373434]"
                  }`}
                >
                  {variant.title}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => alert("Added to cart")}
            className="w-full h-[49px] flex items-center justify-center mt-[28px] mb-[18px] bg-[#161515] text-white text-[14px] border border-[#161515] cursor-pointer uppercase hover:bg-[white] hover:text-[#161515] transition-all duration-300 ease-in-out"
          >
            <span className="pt-[4px]">Add to Cart</span>
          </button>

          {/* Shop Pay (Mock) */}
          <a
            href={`https://your-shop.myshopify.com/cart/${defaultVariant.id
              .split("/")
              .pop()}:1`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-[49px] flex items-center justify-center gap-[4px] text-center bg-[#5433eb] text-white text-[14px] cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out"
          >
            <span className="pt-[4px]">Buy with </span>
            <Image 
              src="/icons/shop-pay.svg"
              alt="Shop Pay"
              width={50}
              height={50}
              className="w-[85px] h-[20px]"
            />
          </a>

          <div className="text-[14px] text-[#161515] my-[16px]">
            <p className="pt-[16px]">
              {readMore
                ? product.description
                : `${product.description.slice(0, 250)}...`}
            </p>
            <button
              onClick={() => setReadMore(!readMore)}
              className="flex items-center justify-center gap-[6px] text-[#161515] text-[14px] font-semibold mt-[16px]  cursor-pointer hover:opacity-80"
            >
              <PlusIcon size={20}  />{readMore ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Accordions */}
          <div className="mt-6 space-y-4">
            <details className="border p-4 rounded">
              <summary className="cursor-pointer font-semibold">
                Shipping and Returns
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Ships in 3–5 business days. 30-day returns available.
              </p>
            </details>
            <details className="border p-4 rounded">
              <summary className="cursor-pointer font-semibold">
                Specs and Care
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Made with premium bamboo fabric. Machine washable.
              </p>
            </details>
            <details className="border p-4 rounded">
              <summary className="cursor-pointer font-semibold">
                Why Us?
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                Thoughtfully designed, sustainably crafted.
              </p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}
