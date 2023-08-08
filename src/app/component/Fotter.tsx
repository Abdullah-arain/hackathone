import React from "react";

export default function Fotter() {
  return (
    <div className="border-t-2">
      <div className="lg:mx-auto md:mx-10 mx-3 mb-5 flex justify-center wrapper">
        <div className="flex-1 md:block hidden">
          <p className="mt-5 md:text-lg text-md">
            Copyright © 2022 Dine market
          </p>
        </div>

        <div className="flex-1 md:block hidden">
          <p className="mt-5 md:text-lg text-md">
            Design by.{" "}
            <b className="md:text-lg text-md font-bold text-gray-700">
              Abdullah <br />
              Design Studio
            </b>
          </p>
        </div>

        <div className="flex-1 md:block hidden">
          <p className="mt-5 md:text-lg text-md">
            Code by.{" "}
            <b className="md:text-lg text-md font-bold text-gray-700">
              Abdullah-arain
              <br />
              on github
            </b>
          </p>
        </div>

      <div className="md:hidden block">
        <p className="mt-5 md:text-lg text-md text-center">
          Code by.{" "}
          <b className="md:text-lg text-md font-semibold">
            Abdullah-arain
            <br />
            on github
          </b>
        </p>
      </div>
        
      </div>
    </div>
  );
}
