// "use client";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "@/store/store";
// import { ShoppingCart } from "lucide-react";
// import Link from "next/link";

// export default function Shopping() {
 
//   const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);

//   return (
//     <main>
//     <Link href={"/cart"} className="-mt-3 lg:block hidden">
//         <div className=" bg-slate-100 absolute h-10 w-10 rounded-full justify-center">
//           <div className="bg-red-500 h-5 w-5 relative -right-6 -top-1 rounded-full text-white flex justify-center items-center">
//             {cartValue}
//           </div>
//           <ShoppingCart className="relative m-auto -mt-2" />
//         </div>
//       </Link>

    
//     </main>
//   );
// }
