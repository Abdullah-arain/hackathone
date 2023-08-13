// import { cart } from "@/lib/drizzle";

// const addToCart = () => {

//   const fetchData = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/api/cart", {
//         method: "GET",
//         cache: "no-store",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       if (!res.ok) {
//         throw new Error("Failed to fetch the data");
//       }
//       const result = await res.json();
//       setData(result);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   fetchData();
// };
// return (
//   <main>
//     <div>
//       {data?.res.map((item) => (
//         <div
//           className="bg-gray-100 py-4 px-4 flex items-center gap-x-3 shadow rounded-lg my-5"
//           key={item.product_id}
//         >
//           <div className="text-4xl font-semibold">{item.quantity}</div>
//           <p className="text-lg font-medium">{item.user_id}</p>
//         </div>
//       ))}
//     </div>
//   </main>
// );

// export default addToCart;

