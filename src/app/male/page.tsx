import FetchData from "./FetchQuery";
import React, { FC } from "react";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import Image from "next/image";

const FetchQuery = async () => {
  const data = await FetchData();

  return (
    <div className="wrapper lg:mx-auto md:mx-10 mx-3 grid md:grid-cols-[repeat(3,auto)] grid-cols-[repeat(2,auto)] justify-center gap-x-5 md:gap-x-28 gap-y-10 mt-10">
      {data.map((product: any) => (
        <div key={product.slug}>
        <Link href={`/product/${product.slug.current}`} className="" key={product.slug}>
          <Image src={urlForImage(product.image[0]).url()} alt="" width={300} height={300} className=""/>
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
