import ShopByProduct from "@/components/shared/collections/ShopByProduct";
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

const SHOP_BY_PRODUCT_COLLECTIONS = [
  {
    handle: "mens-short-sleeve-shirts",
    title: "Short Sleeve Shirts",
    image:
      "https://www.rsvlts.com/cdn/shop/files/rsvlts-short-sleeve-shirt-palms-bursting-in-air-kunuflex-short-sleeve-shirt-palms-bursting-in-air-kunuflex-short-sleeve-shirt-1166688421_large.jpg?v=1748542005",
  },
  {
    handle: "crewneck-t-shirts",
    title: "Shirts",
    image:
      "https://www.rsvlts.com/cdn/shop/files/rsvlts-crewneck-t-shirt-lnd-crewneck-tee-lnd-crewneck-tee-1166581100_large.jpg?v=1747160485",
  },
  {
    handle: "the-all-day-polo",
    title: "Polos",
    image:
      "https://www.rsvlts.com/cdn/shop/files/Breakfast_Balls_-_USA_Floral_-_Polo_001_1_large.jpg?v=1747229812",
  },
  {
    handle: "mens-shorts",
    title: "Shorts",
    image:
      "https://www.rsvlts.com/cdn/shop/files/RSVLTS_-_Americana_Aloha_-_Hybrid_Shorts_003_1_large.jpg?v=1747229815",
  },
  {
    handle: "hoodies",
    title: "Hoodies",
    image:
      "https://www.rsvlts.com/cdn/shop/files/rsvlts-performance-hoodie-america-pops-freedom-performance-hoodie-america-pops-freedom-performance-hoodie-1166581104_large.jpg?v=1747320390",
  },
  {
    handle: "accessories",
    title: "Accessories",
    image:
      "https://www.rsvlts.com/cdn/shop/files/rsvlts-hat-lnd-tlb-hat-lnd-tlb-hat-1166492834_large.jpg?v=1747145799",
  },
  {
    handle: "sweatshirts",
    title: "Sweatshirts",
    image:
      "https://www.rsvlts.com/cdn/shop/files/rsvlts-crew-sweatshirt-roosevelts-stealth-crewneck-sweatshirt-roosevelts-stealth-crewneck-sweatshirt-39189298446494_large.jpg?v=1738107085",
  },
  {
    handle: "flannel",
    title: "Flannels",
    image:
      "https://www.rsvlts.com/cdn/shop/files/rsvlts-flannel-long-sleeve-ned-flanders-borlandflex-long-sleeve-flannel-ned-flanders-borlandflex-long-sleeve-flannel-38606221705374_large.jpg?v=1729735118",
  },
];

export default function Home({ collections, shopCollections }) {
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
      <ShopByProduct
        title="Shop by product"
        collections={SHOP_BY_PRODUCT_COLLECTIONS}
      />
      <CollectionTabs
        title={"Shop"}
        collections={shopCollections}
        banners={SHOP_COLLECTIONS_BANNERS}
      />
    </div>
  );
}
