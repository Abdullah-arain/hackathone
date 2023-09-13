"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useAuth } from "@clerk/nextjs";

const Success = () => {
  const { refresh } = useRouter();
  
  const {userId} = useAuth()

  useEffect(() => {
    // self invoking function
  (async function(){
    try {
      if (userId) {
        const response = await fetch(`/api/success?user_id=${userId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          refresh();
        } else {
          console.log("Delete request failed with status:", response.status);
        }
      }
    } catch (error) {
      console.log("An error occurred during the delete request:", error);
    }
  }());
    
  },);

    return (
    <center className="h-screen mt-28 flex flex-col gap-4">
      <p>
        <ShoppingBag size={80} />
      </p>
      <h1 className="text-lg font-bold">Thank you for your order!</h1>
      <Link href="/">
        <button
          className="bg-black px-8 py-1 rounded-lg text-white hover:scale-95 hover:ring-red-500 ring-1 cursor-pointer select-none"
          type="button"
        >
          Continue Shopping
        </button>
      </Link>
    </center>
  );
};

export default Success;