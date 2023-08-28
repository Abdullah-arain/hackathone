'use client'
import { Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import { toast } from "react-hot-toast";


export default function Cartitem() {

    const [products, setProducts] = useState<any>(null)
    const [state, setState] = useState(false)
    const { isSignedIn,userId } = useAuth();

    useEffect(() => {
        fetch(
            `https://hackathone-abdullaharain1309-gmailcom.vercel.app/api/cart?user_id=${userId}`
            ).then((res)=>res.json()).then((data)=>setProducts(data));      
    }, [isSignedIn, state, userId])
  
const prices = products?.map((item:any) => item.price);
const totalPrice = prices?.reduce((accumulator: any, price: any) => accumulator + price, 0);
  
const quantity = products?.map((item:any) => item.quantity);
const totalQuantity = quantity?.reduce((accumulator: any, quantity: any) => accumulator + quantity, 0);

async function deleteProduct(product_name: any){
  const res = await fetch('/api/cart',{
    method: 'DELETE',
    body: JSON.stringify({user_id: userId, product_name: product_name})
  })
  toast.success("Cart deleted successfully")
  setState(!state)
}
  
  return (
    <div className="mt-20">
      <h1 className="text-2xl font-bold mx-2">Shopping Cart</h1>
      {isSignedIn ? (
         <section className="flex md:flex-row flex-col gap-5 mx-2">
         <main className="flex-grow">
           {products?.map((item: any) => (
             <div key={item.product_name} className="flex md:flex-row flex-col mt-16 gap-10 max-w-[900px]"> 
               <Image src={item.image} alt="" className="w-40 h-40 object-cover object-top rounded-xl mx-auto" width={150} height={100} />
               <section className="flex flex-grow">
               <div className="">
               <h1 className="text-2xl font-normal text-gray-700">{item.product_name}</h1>
               <h2 className="text-lg font-semibold text-gray-900 mt-5">Delivery Estimation</h2>
               <h1 className="text-lg font-semibold text-yellow-500 mt-3">5 Working Days</h1>
               <h1 className="text-xl font-bold text-gray-900 mt-2">$ {item.price}</h1>
               </div>
               <div className="mt-2 flex flex-col justify-between items-end ml-auto">
                 <button onClick={()=>deleteProduct(item.product_name)}><Trash2 /></button>
               <h1 className="text-xl font-medium text-gray-800">Quantity: {item.quantity}</h1>
               </div>
               </section>
             </div>
           ))}
         </main>
         <div className="bg-blue-50 mt-16 px-8">
           <h2 className="text-xl font-bold text-gray-900 mt-5 text-center">Order Summary</h2>
           <div className="text-lg text-gray-900 mt-5 flex justify-between">
           <h1>Total-Quantity: </h1>
             <h1 className="">{totalQuantity}</h1>
           </div>
           <div className="text-lg text-gray-800 font-medium mt-3 flex justify-between">
             <h1>SubTotal: </h1>
             <h1 className="">$ {totalPrice}</h1>
           </div>
           <button className="py-1 px-3 bg-black text-white rounded-[6px] mt-4 ">Process to Checkout</button>
         </div>
         </section>
      ) : (
        <div className="text-2xl text-center">Please login first</div>
      )
      }     
      
      
    </div>
  );
}