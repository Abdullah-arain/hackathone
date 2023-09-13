import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/Logo.webp";
import { AlignRight } from "lucide-react";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Clerk from "./Clerk";

const Nav = async() => {

  return (
    <div className="lg:mx-auto md:mx-10 mx-3 flex gap-16 py-[40px] justify-between">
      <a href="/"><Image src={logo} alt="Logo" className="h-auto" /></a>

      <div className="lg:block hidden">
        <ul className="flex gap-10 font-medium">
        <li><Link href={"/female"}>Female</Link></li>
        <li><Link href={"/male"}>Male</Link></li>
        <li><Link href={"/kids"}>Kids</Link></li>
        <li><Link href={"/all_product"}>All Products</Link></li>
        </ul>
      </div>

      <div className="border-[1px] py-1 gap-2 rounded items-center lg:flex hidden">
        <Search className="w-4 h-4 font-sm ml-2" />
        <input
          type="text"
          placeholder="What are you looking for"
          className="text-xs pr-10"
        />
      </div>

<Clerk/> 
      <Link href={"/cart"} className="-mt-3 lg:block hidden">
        <div className=" bg-slate-100 absolute h-10 w-10 rounded-full justify-center">
          <div className="bg-red-500 h-5 w-5 relative -right-6 -top-1 rounded-full text-white flex justify-center items-center">
            2
          </div>
          <ShoppingCart className="relative m-auto -mt-2" />
        </div>
      </Link>

     {/* Mobile responsive */}
                <div className='lg:hidden justify-self-end'>
                    <Sheet>
                        <SheetTrigger>
                            <AlignRight className='w-8 h-8' />
                        </SheetTrigger>
                        <SheetContent >
                          

                            <a href={"/cart"} className=" bg-slate-100 absolute h-10 w-10 rounded-full justify-center mt-10">
                              <div className="bg-red-500 h-5 w-5 relative -right-6 -top-1 rounded-full text-white flex justify-center items-center">
                                5
                              </div>
                              <ShoppingCart className="relative m-auto -mt-2" />
                            </a>
                            <ul className='flex flex-col gap-y-3 text-xl mt-10 bg-white'>
                                <li className='text-center'><Link href={"/female"}>Female</Link></li>
                                <li className='text-center'><Link href={"/male"}>Male</Link></li>
                                <li className='text-center'><Link href={"/kids"}>Kids</Link></li>
                                <li className='text-center'><Link href={"/all_product"}>All Products</Link></li>
                            </ul>
                            <Clerk/>

                        </SheetContent>
                    </Sheet>

                </div>
    </div>
  );
};

export default Nav;