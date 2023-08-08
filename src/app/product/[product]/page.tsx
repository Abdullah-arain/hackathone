import FetchData from "@/lib/FetchData";
import Product from "../../../../sanity/Product";
import { urlForImage } from "../../../../sanity/lib/image";

export default async function page({ params }: { params: any }) {
  const data = await FetchData();
  const findData = data.find(
    (item: any) => item.slug.current == params.product
  );
  return (
    <div className="wrapper mx-auto flex gap-5 mt-12">
        
      <section className="flex-1 ml-20">
      <img src={urlForImage(findData.image[0]).url()} alt="" height={500} width={500}/>
      </section>
      <section className="flex-1 mt-12">
        <div className="text-4xl font-semibold mr-20">{findData.productName}</div>
        <div className="text-gray-500 text-xl font-semibold mt-1">{findData.productTypes}</div>
        <div className="text-xl font-semibold mt-8">SELECT SIZES</div>
        <ul className="flex gap-5">
            <li className="circle">XS</li>
            <li className="circle">S</li>
            <li className="circle">M</li>
            <li className="circle">L</li>
            <li className="circle">XL</li>
        </ul>
        <div className="text-xl font-bold">$ {findData.price}</div>
      </section>
    </div>
  );
}
