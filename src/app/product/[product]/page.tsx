'use client'

import FetchData from "@/lib/FetchData";
import Product from "../../../../sanity/Product";
import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";
import { FC, useState } from "react";
import { Minus, Plus } from "lucide-react";
import Button from "./Button";

export default async function page({ params }: { params: any }) {

  const data = await FetchData();
  const findData = data.find(
    (item: any) => item.slug.current == params.product
    );
    
    const handleAddToCart = async () => {
    const productId = findData.id;
    const productName = findData.productName;
    const price = findData.price;
    const image = findData.image[0].url;
    const quantity = 1;
    
    const data = {
    product_id: productId,
    product_name: productName,
    price: price,
    image: image,
    quantity: quantity,
    };
    console.log(productId)
    const res = await fetch("/api/cart", {
    method: "POST",
    body: JSON.stringify(data),
    });
    
    const result = await res.json();
    console.log(result);
    };
    
    const findDataArray = [findData];
    
    return (
    
    <div className="wrapper mx-auto md:flex gap-5 mt-12">
      {findDataArray.map((find : any)=>(
        <div className="wrapper mx-auto md:flex gap-12 mt-12" key={find.product_id}>
      <section className="wrapper md:flex-1 ml-20">
      <Image src={urlForImage(findData.image[0]).url()} alt="" height={300} width={600}/>
      </section>
      <section className="wrapper md:flex-1 mt-12">
        <div className="text-4xl font-semibold mr-20">{findData.productName}</div>
        <div className="text-gray-500 text-xl font-semibold mt-1">{findData.productTypes}</div>
        <div className="text-xl font-semibold mt-8">SELECT SIZES</div>
        <ul className="flex gap-10 mt-5">
            <li className="circle">XS</li>
            <li className="circle">S</li>
            <li className="circle">M</li>
            <li className="circle">L</li>
            <li className="circle">XL</li>
        </ul>
        
        <Button/>

        <section className="flex mt-12 gap-4">
        <button onClick={()=>handleAddToCart()} className="bg-blue-700 text-white rounded-sm px-5 py-2">Add to Cart</button>
        <div className="text-2xl font-bold">$ {findData.price}</div>
        </section>
      </section>
    </div>
        
          ))
        }
        </div>
    )}