"use client"
import { FC, useState } from "react";
import { Minus, Plus } from "lucide-react";
import React from 'react'


  export default function Button()  {
    const [value, setValue] = useState(1);
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(10);
  
    const handleChange = (event: any) => {
      // const newValue = Number(event.target.value);
      if (value < min) {
        
      } else {
        setValue(value);
      }
    };
  
    const handleIncrement = () => {
      setValue(value + 1);
    };
  
    const handleDecrement = () => {
      setValue(value - 1);
    };
  
  return (
    <>
    <main className="flex items-center mt-10 gap-6">
        <div className="text-xl font-bold">Quantity: </div>
        <section className="flex items-center gap-2">
        <button onClick={handleDecrement} className="py-2 px-2 rounded-full bg-gray-200"><Minus /></button>
        <div className="text-xl font-bold">{value}</div>
        <button onClick={handleIncrement} className="py-2 px-2 rounded-full bg-gray-200"><Plus /></button>
        </section>
        </main>
   </>
  )
}


