// pages/product/[handle].jsx
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  GET_PRODUCT_BY_HANDLE,
  GET_PRODUCTS_BY_HANDLES,
} from "@/lib/queries/product.queries";
import ImageGallery from "@/components/shared/ImageGallery";
import Image from "next/image";
import { PlusIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Swiper v9+ uses this
import "swiper/css";
import "swiper/css/pagination";
import AccordionGroup from "@/components/shared/AccoridanGroup";
import { useCartStore } from "@/lib/store";
import PDPDetails from "@/components/pages/pdp/PDPDetails";
import ProductsSlider from "@/components/shared/sliders/ProductsSlider";
import { GET_COLLECTION_BY_HANDLE } from "@/lib/queries/collection.queries";
import ProductReviews from "@/components/pages/pdp/ProductReviews";
import Spinner from "@/components/shared/Spinner";

export default function ProductPage() {
  const router = useRouter();
  const { handle } = router.query;
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_HANDLE, {
    variables: { handle },
    skip: !handle,
  });
  console.log("🚀 ~ ProductPage ~ data:", data);

  const alsoLikeCollection = useQuery(GET_COLLECTION_BY_HANDLE, {
    variables: { handle: "happy-gilmore" },
  });
  const moreFromThisCollection = useQuery(GET_COLLECTION_BY_HANDLE, {
    variables: {
      handle: "breakfast-balls-originals",
      productsCount: 10, // 👈 this overrides the default of 4
    },
  });
  const trendingCollection = useQuery(GET_COLLECTION_BY_HANDLE, {
    variables: {
      handle: "breakfast-balls-accessories",
    },
  });
  console.log("🚀 ~ ProductPage ~ alsoLikeCollection:", alsoLikeCollection);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [readMore, setReadMore] = useState(false);

  const { addToCart, openCart } = useCartStore();

  useEffect(() => {
    if (data) {
      setSelectedVariant(data.productByHandle.variants.edges[0].node);
    }
  }, [data]);

  useEffect(() => {
    if (data?.productByHandle?.handle) {
      const stored = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");

      const updated = stored.filter((h) => h !== data?.productByHandle.handle);

      updated.unshift(data?.productByHandle.handle);
      localStorage.setItem(
        "recentlyViewed",
        JSON.stringify(updated.slice(0, 10))
      );
    }
  }, [data?.productByHandle?.handle]);

  if (loading)
    return (
      <div className="w-[100%] h-[80vh] flex items-center justify-center">
        <Spinner />
      </div>
    );
  if (error || !data?.productByHandle)
    return <p className="p-4 text-red-500">Product not found.</p>;

  const product = data.productByHandle;
  const variants = product.variants.edges.map((edge) => edge.node);
  const images = product.images.edges.map((edge) => edge.node);
  const defaultVariant = selectedVariant || variants[0];

  return (
    <>
      <Head>
        <title>{product.title} | My Shopify Store</title>
        <meta name="description" content={product.description.slice(0, 150)} />
      </Head>

      <div
        className="max-w-[1500px] lg:py-[36px] py-[24px] lg:px-[24px] px-[16px] mx-auto flex justify-center gap-[32px]"
        style={{
          minHeight: "calc(100vh - 521px)",
        }}
      >
        <div className="max-w-[823px] w-[100%] mr-[15px] lg:block hidden">
          <ImageGallery images={images} />
        </div>

        <div className="w-[100%] lg:max-w-[581px]">
          <h1 className="text-[24px] font-[700] text-[#161515] leading-[34px]">
            {product.title}
          </h1>
          <p className="text-[14px]] text-[#161515] leading-[30px]">
            {product.vendor}
          </p>

          <p className="text-[18px] font-[700] text-[#161515] leading-[30px]">
            ${defaultVariant.price.amount}
          </p>
          <div className="lg:hidden block">
            <Swiper
              loop
              autoplay={{ delay: 10000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className="h-full"
            >
              {images &&
                images.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="relative w-full h-full ">
                      <Image
                        src={slide.url}
                        alt={slide.altText}
                        width={1600}
                        height={834}
                        className="w-full h-full block object-cover"
                        priority
                      />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          {variants.length > 1 && (
            <div className="w-full py-[16px]">
              <p className="text-[20px] font-[600] text-[#1c2e36] uppercase">
                Size
              </p>
              <div className="flex flex-wrap gap-[8px] lg:pt-[28px] pt-[8px]">
                {variants.map((size) => {
                  const isDisabled = !size.availableForSale;

                  return (
                    <button
                      key={size.id}
                      onClick={() => setSelectedVariant(size)}
                      className={`relative w-[66px] h-[47px] flex items-center justify-center border border-[#373434] text-[14px] 
            transition-all duration-300 ease-in-out cursor-pointer overflow-hidden
            ${
              selectedVariant?.id === size?.id
                ? "bg-[#373434] text-white"
                : "bg-white text-[#373434] hover:bg-[#373434] hover:text-white"
            }
           
          

            ${isDisabled && "opacity-30"}
          `}
                    >
                      {size.title}
                      {isDisabled && (
                        <span className="absolute w-[130%] h-[1px] bg-gray-400 rotate-[-35deg] left-[-15%] top-[50%] translate-y-[-50%]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Add to Cart */}
          <button
            onClick={async () => {
              if (!selectedVariant) return alert("Please select a size.");
              await addToCart(selectedVariant.id, 1);
              openCart();
            }}
            disabled={selectedVariant?.availableForSale === false}
            className={`w-full h-[49px] flex items-center justify-center mt-[28px] lg:mb-[18px] mb-[12px] bg-[#161515] text-white text-[14px] border border-[#161515]  uppercase  transition-all duration-300 ease-in-out
              ${
                selectedVariant?.availableForSale
                  ? "opacity-100 cursor-pointer hover:bg-[white] hover:text-[#161515]"
                  : "opacity-50 cursor-not-allowed"
              }
              `}
          >
            <span className="pt-[4px]">
              {selectedVariant?.availableForSale ? "Add to Cart" : "Sold Out"}
            </span>
          </button>

          {selectedVariant?.availableForSale ? (
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
          ) : (
            <a
              href={``}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-[49px] flex items-center justify-center gap-[4px] text-center bg-[#dc3748!important] text-white text-[14px] cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out"
            >
              <span className="pt-[4px]">Notify Me When Available </span>
            </a>
          )}

          <div className="text-[14px] text-[#161515] my-[16px]">
            <p className="pt-[16px] lg:block hidden">
              {readMore
                ? product.description
                : `${product.description.slice(0, 250)}...`}
            </p>
            <p className="pt-[16px] lg:hidden block">
              {readMore
                ? product.description
                : `${product.description.slice(0, 100)}...`}
            </p>
            <button
              onClick={() => setReadMore(!readMore)}
              className="flex items-center justify-center gap-[6px] text-[#161515] text-[14px] font-semibold mt-[16px]  cursor-pointer hover:opacity-80"
            >
              <PlusIcon size={20} />
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Accordions */}
          <AccordionGroup />
        </div>
      </div>
      <PDPDetails />
      <ProductsSlider
        title="YOU MAY ALSO LIKE"
        collection={""}
        data={alsoLikeCollection.data?.collectionByHandle?.products.edges || []}
      />
      <ProductsSlider
        title="Trending"
        collection={""}
        data={trendingCollection.data?.collectionByHandle?.products.edges || []}
      />
      <ProductReviews />
      <ProductsSlider
        title="More From This Collection"
        collection={moreFromThisCollection.data?.collectionByHandle}
        data={
          moreFromThisCollection.data?.collectionByHandle?.products.edges || []
        }
      />
    </>
  );
}
