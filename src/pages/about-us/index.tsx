import Banner from "@/components/pages/about-us/Banner";
import WhyUs from "@/components/pages/about-us/WhyUs";
import ProductsSlider from "@/components/shared/sliders/ProductsSlider";
import { GET_COLLECTION_BY_HANDLE } from "@/lib/queries/collection.queries";
import { useQuery } from "@apollo/client";
import React from "react";

function AboutUs() {
  const greatestHits = useQuery(GET_COLLECTION_BY_HANDLE, {
    variables: {
      handle: "greatest-hits",
      productsCount: 10,
    },
  });
  return (
    <div>
      <Banner />
      <WhyUs />
      <ProductsSlider
        title="Greatest Hits"
        description="Some of our best"
        collection={greatestHits.data?.collectionByHandle}
        data={
          greatestHits.data?.collectionByHandle?.products.edges || []
        }
      />
    </div>
  );
}

export default AboutUs;
