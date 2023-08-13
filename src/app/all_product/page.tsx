import FetchData from "./ProductQuery";
import React, { FC } from "react";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import Image from "next/image";

const FetchQuery = async () => {
  const data = await FetchData();

  return (
    <div className="wrapper lg:mx-auto md:mx-10 mx-3 grid md:grid-cols-[repeat(3,auto)] grid-cols-[repeat(2,auto)] justify-center gap-x-5 md:gap-x-28 gap-y-10 mt-10">
      {data.map((product: any) => (
        <div key={product.name}>
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

