import Image from "next/image";

export default function Promotion() {
  return (
    <div className="lg:mx-auto md:mx-10 mx-3 mb-20">
      <h3 className="text-center text-blue-600 font-bold text-md mt-32">
        PROMOTIONS
      </h3>
      <h2 className="md:text-4xl text-3xl my-4 text-center font-bold">
        Our Promotions Events
      </h2>

      <main className="flex lg:flex-row flex-col gap-5 mt-16">
        <section className="flex-1">
          <span className="flex  bg-gray-300 items-center">
            <div className="flex-1 my-3">
              <h2 className="md:text-5xl lg:text-3xl text-2xl font-bold md:px-7 ml-5">
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

          <span className="bg-slate-900 mt-5 pb-10 flex flex-col items-center">
            <h1 className="text-white text-center text-4xl font-bold mt-8">
              GET 30% Off
            </h1>
            <h4 className="text-md text-white text-center mt-5">
              USE PROMO CODE
            </h4>
            <button className="bg-slate-300 text-white bg-opacity-25 text-lg font-bold mt-1 py-2 px-4 rounded-[6px]">
              GLAMOURWEEKENDSALE
            </button>
          </span>
        </section>

        <section className="flex-1 flex flex-row 2xl:flex-col gap-5">
          <div className="bg-amber-100 flex-1 justify-between flex flex-col">
            <nav>
            <h2 className="text-2xl font-semibold ml-4 pt-2">Flex Jacket</h2>
            <div className="flex ml-4 gap-x-3">
              <del className="text-lg">$100.00</del>
              <h4 className="text-lg font-semibold">$75.00</h4>
            </div>
            </nav>
            <Image
              src={"/event2.webp"}
              alt="image"
              width={280}
              height={280}
              className="mx-auto"
            />
          </div>

          <div className="bg-slate-300 flex-1 flex flex-col justify-between">
            <nav>
            <h2 className="text-2xl font-semibold ml-4 pt-2">Flex Shirt</h2>
            <div className="flex ml-4 gap-x-3">
              <del className="text-lg">$100.00</del>
              <h4 className="text-lg font-semibold">$90.00</h4>
            </div>
            </nav>
            <Image
              src={"/event3.webp"}
              alt="image"
              width={280}
              height={280}
              className="mx-auto"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
