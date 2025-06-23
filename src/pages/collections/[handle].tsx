import ProductCard from "@/components/shared/productCards/ProductCard";
import { GET_COLLECTION_BY_HANDLE } from "@/lib/queries/collection.queries";
import { shopifyClient } from "@/lib/shopify";
import { GetStaticPaths, GetStaticProps } from "next";

type Product = {
    id: string;
    title: string;
    handle: string;
    description: string;
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: {
      edges: {
        node: {
          url: string;
          altText: string;
        };
      }[];
    };
    variants: {
      edges: {
        node: {
          price: {
            amount: string;
            currencyCode: string;
          };
        };
      }[];
    };
  };

type CollectionPageProps = {
  collection: {
    id: string;
    title: string;
    description: string;
    products: {
      edges: {
        node: Product;
      }[];
    };
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const handle = params?.handle as string;

  try {
    const { collectionByHandle } = await shopifyClient.request<{
      collectionByHandle: CollectionPageProps["collection"];
    }>(GET_COLLECTION_BY_HANDLE, { handle, productsCount: 50 });

    if (!collectionByHandle) {
      return { notFound: true };
    }

    return {
      props: { collection: collectionByHandle },
      revalidate: 60,
    };
  } catch (error) {
    console.log("🚀 ~ constgetStaticProps:GetStaticProps= ~ error:", error);
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const handles = [
    "breakfast-balls-originals",
    "disneys-hercules",
    "hasbro",
    "breakfast-balls",
    "mens",
    "women",
    "kids",
  ];

  return {
    paths: handles.map((handle) => ({ params: { handle } })),
    fallback: "blocking",
  };
};

export default function CollectionPage({ collection }: CollectionPageProps) {
  return (
    <div>
      <div className="px-[32px] py-[20px]">
        <h1 className="text-[36px] font-[700] text-[#161515] text-center uppercase">
          {collection.title}
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-y-[60px] gap-x-[32px] px-[16px] py-[60px]">
        {collection.products.edges.map(({ node }) => {
          console.log("first", node?.images.edges[0].node.altText);
          return (
            <ProductCard key={node?.id} product={node}/>
          );
        })}
      </div>
    </div>
  );
}
