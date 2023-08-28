'use client'

import FetchData from "@/lib/FetchData";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { urlForImage } from "../../../sanity/lib/image";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link";

const Client = async() => {

  const breakpoints = {
    300: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  };

  
const data: any = await FetchData()
  return (
    <div className="">
      <h3 className="text-center text-blue-600 font-bold text-md mt-32">
        PROMOTIONS
      </h3>
      <h2 className="md:text-4xl text-3xl mb-8 mt-4 text-center font-bold">
        Check What We Have
      </h2>
      
    <section className="mx-5">
        <Swiper
         spaceBetween={20}
         slidesPerView={3}
         breakpoints={breakpoints}
       >
    
      {data.map((product:any) => (
         <SwiperSlide key={product.slug} className="hover:scale-105 transition duration-700 ease-in-out">
          <Link href={`/product/${product.slug.current}`}>
        <Image src={urlForImage(product.image[0]).url()} alt="" width={500} height={500} className="max-h-[300px] object-cover object-top"/>
        <h6 className="text-gray-800 mt-4 text-xl font-semibold">{product.productName}</h6>
        <span className="block font-semibold text-xl text-gray-800">$ {product.price}</span>
        </Link>
        </SwiperSlide>
      ))}
      </Swiper>
      </section>
      </div>
  );
};

export default Client