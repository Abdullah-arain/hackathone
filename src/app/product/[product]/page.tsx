import React from "react";
import FetchData from "@/lib/FetchData";
import ProductDetails from "../../component/ProductDetails";

export async function generateStaticParams() {
  const data = await FetchData();
  return data.map((item: any) => ({
    product: item.slug.current,
  }));
}

export default async function page({ params }: { params: any }) {
  const data = await FetchData();
  const filteredData = data.find(
    (item: any) => item.slug.current == params.product
  );

  return <ProductDetails filteredData={filteredData} />;
}