import AboutUsBanner from "@/components/shared/AboutUsBanner";
import AppDownload from "@/components/shared/AppDownload";
import CollectionCarousel from "@/components/shared/collections/CollectionCarousel";
import FandomCollections from "@/components/shared/collections/FandomCollections";
import ShopByProduct from "@/components/shared/collections/ShopByProduct";
import CollectionTabs from "@/components/shared/collectionTabs/CollectionTabs";
import HeroCarousel from "@/components/shared/HeroCarousel";
import {
  FANDOM_COLLECTIONS,
  NEWEST_COLLECTIONS_BANNERS,
  SHOP_BY_PRODUCT_COLLECTIONS,
  SHOP_COLLECTIONS_BANNERS,
} from "@/constants/home.constant";
import { GET_COLLECTION_BY_HANDLE } from "@/lib/queries/collection.queries";
import { GET_PRODUCTS_BY_HANDLES } from "@/lib/queries/product.queries";
import { shopifyClient } from "@/lib/shopify";
import { getRecentlyViewedProducts } from "@/utils/products";
import { useQuery } from "@apollo/client";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type CollectionByHandleResponse = {
  collectionByHandle: {
    id: string;
    title: string;
    handle: string;
    products: {
      edges: {
        node: {
          id: string;
          title: string;
          handle: string;
        };
      }[];
    };
  };
};

export async function getStaticProps() {
  const handles = ["breakfast-balls-originals", "disneys-hercules", "hasbro"];
  const shopSectionsHandles = ["breakfast-balls", "mens", "women", "kids"];

  const collectionPromises = handles.map((handle) =>
    shopifyClient.request<CollectionByHandleResponse>(
      GET_COLLECTION_BY_HANDLE,
      { handle }
    )
  );

  const results = await Promise.all(collectionPromises);

  // Now TypeScript knows each result has .collectionByHandle
  const collections = results.map((res) => res.collectionByHandle);

  const shopCollectionPromises = shopSectionsHandles.map((handle) =>
    shopifyClient.request<CollectionByHandleResponse>(
      GET_COLLECTION_BY_HANDLE,
      { handle }
    )
  );

  const shopResults = await Promise.all(shopCollectionPromises);

  // Now TypeScript knows each result has .collectionByHandle
  const shopCollections = shopResults.map((res) => res.collectionByHandle);

  return {
    props: {
      collections,
      shopCollections,
    },
    revalidate: 60,
  };
}

export default function Home({ collections, shopCollections }) {
  const [handles, setHandles] = useState<string[]>([]);

  useEffect(() => {
    const stored = getRecentlyViewedProducts();
    setHandles(stored);
  }, []);

  const queryString = handles.map((h) => `handle:${h}`).join(" OR ");

  const { data, loading } = useQuery(GET_PRODUCTS_BY_HANDLES, {
    variables: { query: queryString },
    skip: handles.length === 0,
  });

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)]`}
    >
      <HeroCarousel />
      <CollectionTabs
        title={"Newest"}
        collections={collections}
        banners={NEWEST_COLLECTIONS_BANNERS}
      />
      <FandomCollections
        title={"TOP FANDOMS"}
        collections={FANDOM_COLLECTIONS}
      />
      <ShopByProduct
        title="Shop by product"
        collections={SHOP_BY_PRODUCT_COLLECTIONS}
      />
      <AboutUsBanner />
      <CollectionTabs
        title={"Shop"}
        collections={shopCollections}
        banners={SHOP_COLLECTIONS_BANNERS}
      />
      <CollectionCarousel
        title="Recently Viewed"
        products={data?.products?.edges || []}
        isLoading={loading}
      />
      <AppDownload />
    </div>
  );
}
