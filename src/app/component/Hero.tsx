import React from 'react'
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
import header from '/public/header.webp'
import feature1 from '/public/Featured1.webp'
import feature2 from '/public/Featured2.webp'
import feature3 from '/public/Featured3.webp'
import feature4 from '/public/Featured4.webp'
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react";

export default function Hero() {
  return (
    <div className='wrapper flex lg:mx-auto md:mx-10 mx-3'>
        {/* left section */}
      <section className='flex-1 mt-20'>
      <Badge className='bg-blue-100 rounded-[5px] text-blue-700 py-1 px-4 text-lg'>Sale 70%</Badge>
      <h1 className='text-6xl mt-7 mr-3 font-bold'>An Industrial Take on Streetwear</h1>
      <p className='text-lg mt-8 text-gray-500 font-medium lg:mr-48 flex-shrink-0'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
      <Button className='bg-black text-white gap-x-2 lg:gap-x-4 lg:py-8 py-3 px-6 text-lg mt-5'><ShoppingCart/>Start <br className='hidden lg:block'/> Shopping</Button>
      
      <div className="flex gap-4 mt-7">
        <div className="w-14 md:w-28">
            <Image width={100} height={100} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=128&q=75"} alt="bazaar" />
        </div>
        <div className="w-14 md:w-28">
            <Image width={100} height={100} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured2.247cd605.png&w=128&q=75"} alt="baztel" />
        </div>
        <div className="w-14 md:w-28">
            <Image width={100} height={100} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured3.6076521d.png&w=128&q=75"} alt="versase" />
        </div>
        <div className="w-14 md:w-28">
            <Image width={100} height={100} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured4.0489f1fc.png&w=128&q=75"} alt="in style" />
        </div>
      </div>
      </section>

      {/* right section */}
      <section className='flex-1 mt-5 hidden lg:block'>
        <div className='bg-red-100 rounded-full'>
        <Image src={header} alt='hero image' width={700} height={900}/>
        </div>
      </section>
    </div>
  )
}
