import FetchData from "./FetchQuery";
import React, { FC } from "react";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import Image from "next/image";

const FetchQuery = async () => {
  const data = await FetchData();

  return (
    <div className="grid grid-cols-1 bs:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 place-items-center px-10">
      {data.map((product: any) => (
        <div key={product.slug}>
        <Link href={`/product/${product.slug.current}`} className="">
          <Image src={urlForImage(product.image[0]).url()} alt="" width={500} height={500} className="max-h-[300px] object-cover object-center"/>
          <div className="text-xl font-bold mt-3">{product.productName}</div>
          <div className="text-blue-700 font-semibold">{product.productTypes}</div>
          <div className="text-xl font-semibold">$ {product.price}</div>
        </Link>
        </div>
      ))}
    </div>
  );
};

export default FetchQuery;

