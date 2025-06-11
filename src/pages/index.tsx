import CollectionTabs from "@/components/shared/collectionTabs/CollectionTabs";
import HeroCarousel from "@/components/shared/HeroCarousel";
import { GET_COLLECTION_BY_HANDLE } from "@/lib/queries/collection.queries";
import { shopifyClient } from "@/lib/shopify";
import { Geist, Geist_Mono } from "next/font/google";

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

const NEWEST_COLLECTIONS_BANNERS = [
  "https://www.rsvlts.com/cdn/shop/files/Sub-Banner_228b1d8d-4392-4ddd-890a-080aa9d4521c.webp?v=1749231292",
  "https://www.rsvlts.com/cdn/shop/files/Sub-Banner.webp?v=1749137692",
  "https://www.rsvlts.com/cdn/shop/files/Hasbro_-_Transformers_-_Spring_2025_-_Website_-_Sub-Banner.webp?v=1748961894",
];
const SHOP_COLLECTIONS_BANNERS = [
  "https://www.rsvlts.com/cdn/shop/files/RSVLTS_-_Americana_2024_-_Website_-_Sub-Banner.jpg?v=1738431142",
  "https://www.rsvlts.com/cdn/shop/files/Breakfast_Balls_-_Back_to_the_Future_-_Summer_2024_-_Website_-_Sub-Banner_03.jpg?v=1738428263",
  "https://www.rsvlts.com/cdn/shop/files/one-piece-women-s-short-sleeve-shirt-one-piece-shh-i-am-lucy-women-s-kunuflex-short-sleeve-shirt-37665072054430.jpg?v=1717006775",
  "https://www.rsvlts.com/cdn/shop/files/Bluey_-_Pool_Party_-_Youth_Kunu_010_1.jpg?v=1738431803",
];

export default function Home({ collections, shopCollections }) {
  console.log("🚀 ~ Home ~ shopCollections:", shopCollections);
  console.log("🚀 ~ Home ~ collections:", collections);

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)]`}
    >
      <HeroCarousel />
      {/* <div className="w-[100%] h-[834px] relative">
        <Image
          src="https://www.rsvlts.com/cdn/shop/files/RSVLTS_-_Tahiti_Tiki_2025_-_Website_-_Desktop_copy.webp?v=1749591293"
          alt="banner"
          width={1000}
          height={1000}
          className="w-[100%] max-h-[834px] object-cover"
        />
        <Link
          href={`/collections/Shop Tahitian Tiki`}
          className="absolute bottom-[120px] left-[50%] translate-x-[-50%] uppercase text-[14px] text-[#14b095] py-[12px] px-[48px] bg-black border border-[#14b095] hover:border-black hover:text-black hover:bg-[#14b095] cursor-pointer"
        >
          Shop Tahitian Tiki
        </Link>
      </div> */}
      <CollectionTabs
        title={"Newest"}
        collections={collections}
        banners={NEWEST_COLLECTIONS_BANNERS}
      />
      <CollectionTabs
        title={"Shop"}
        collections={shopCollections}
        banners={SHOP_COLLECTIONS_BANNERS}
      />
    </div>
  );
}
