import Image from "next/image";

export default function Promotion() {
  return (
    <div className="wrapper lg:mx-auto md:mx-10 mx-3 mb-20">
      <h3 className="text-center text-blue-600 font-bold text-md mt-32">
        PROMOTIONS
      </h3>
      <h2 className="md:text-4xl text-3xl my-4 text-center font-bold">
        Our Promotions Events
      </h2>

      <main className="flex md:flex-row flex-col gap-5 mt-16">
        <section className="flex-1">
          <span className="flex  bg-gray-300 items-center">
            <div className="flex-1 my-3">
              <h2 className="md:text-3xl text-2xl font-bold md:px-7 ml-5">
                GET UP TO 60%
              </h2>
              <p className="md:text-xl text-lg md:px-7 ml-5 mt-2">
                For the summer season
              </p>
            </div>
            <Image
              src={"/event1.webp"}
              alt="image"
              width={200}
              height={200}
              className="md:pt-2 px-5 flex-1"
            />
          </span>

          <span className="bg-black mt-5 pb-5 flex flex-col items-center">
            <h1 className="text-white text-center text-4xl font-bold mt-8">
              GET 30% Off
            </h1>
            <h4 className="text-md text-white text-center mt-3">
              USE PROMO CODE
            </h4>
            <button className="bg-white text-white bg-opacity-50 text-lg font-bold mt-1 py-2 px-4 rounded-md">
              GLAMOURWEEKENDSALE
            </button>
          </span>
        </section>

        <section className="flex-1 flex md:flex-row flex-col gap-5">
          <div className="bg-amber-100 flex-1">
            <h2 className="text-2xl font-semibold ml-4 pt-2">Flex Jacket</h2>
            <div className="flex ml-4 gap-x-3">
              <del className="text-lg">$100.00</del>
              <h4 className="text-lg font-semibold">$75.00</h4>
            </div>
            <Image
              src={"/event2.webp"}
              alt="image"
              width={280}
              height={280}
              className=""
            />
          </div>

          <div className="bg-slate-300 flex-1">
            <h2 className="text-2xl font-semibold ml-4 pt-2">Flex Shirt</h2>
            <div className="flex ml-4 gap-x-3">
              <del className="text-lg">$100.00</del>
              <h4 className="text-lg font-semibold">$90.00</h4>
            </div>
            <Image
              src={"/event3.webp"}
              alt="image"
              width={500}
              height={500}
              className="mt-"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
