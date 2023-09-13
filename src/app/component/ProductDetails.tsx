"use client";
import React, { useState } from "react";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "@clerk/nextjs";

export default function ProductDetails({
  filteredData,
}: {
  filteredData: any;
}) {
  const [quantity, setQuantity] = useState(1);
  const {userId} = useAuth()
  console.log(userId)

  // console.log("filteredData", filteredData);

  function handleIncrement() {
    setQuantity(quantity + 1);
  }
  function handleDecrement() {
    setQuantity(quantity - 1);
  }

  async function handleAddToCart() {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({
          user_id: userId,
          product_id: filteredData._id,
          product_name: filteredData.productName,
          price: filteredData.price * quantity,
          image: urlForImage(filteredData.image[0]).url(),
          quantity: quantity,
        }),
      });
    } catch (error) {
      console.log("error", error);
    }
  }

  const handleToast = () => {
    toast.success("Successfully Added!");
  };

  return (
    
  <div className="wrapper mx-auto md:flex gap-5 mt-12">
      <div className="wrapper mx-auto md:flex gap-12 mt-12">
    <section className="wrapper md:flex-1 mx-5">
    <Image src={urlForImage(filteredData.image[0]).url()} alt="" height={300} width={600} className="max-h-[600px]"/>
    </section>
    <section className="wrapper md:flex-1 mt-12 mx-5">
      <div className="text-4xl font-semibold mr-20">{filteredData.productName}</div>
      <div className="text-gray-500 text-xl font-semibold mt-1">{filteredData.productTypes}</div>
      <div className="text-xl font-semibold mt-8">SELECT SIZES</div>
      <ul className="flex gap-10 mt-5">
        {["XS","S","M","L","XL"].map((size: string, i: number)=>(
          <li className="circle" key={i}>{size}</li>
          ))}
          </ul>
          <main className="flex items-center mt-10 gap-6">
        <div className="text-xl font-bold">Quantity: </div>
        <section className="flex items-center gap-2">
        <button onClick={()=>handleDecrement()} disabled={quantity === 1} className="py-2 px-2 rounded-full bg-gray-200"><Minus /></button>
        <div className="text-xl font-bold">{quantity}</div>
        <button onClick={()=>handleIncrement()} className="py-2 px-2 rounded-full bg-gray-200"><Plus /></button>
        </section>
        </main>

      <section className="flex mt-12 gap-4">
      <button onClick={()=>{handleAddToCart(),handleToast()}} className="bg-blue-700 text-white rounded-sm px-5 py-2 active:bg-blue-600">Add to Cart</button>
      <div className="text-2xl font-bold">$ {filteredData.price}</div>
      </section>
    </section>
  </div>
  <Toaster/>
      </div>
  )}
