import React from "react";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="bg-white justify-between px-8 lg:px-14 pt-14 mx-auto">
        <div className="">
          <section className="flex flex-col lg:flex-row justify-between gap-6 mb-10">
            <div className="xl:w-2/4 flex flex-col justify-center sm:text-center lg:text-left lg:py-12">
              <p className="text-start text-green-600 text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                Quick. Easy. Convenient.
              </p>

              <h1 className="text-start text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                The Smart and Trusted Way to Buy Pre-owned Console
              </h1>
            </div>

            <div className="xl:w-2/4 h-48 lg:h-96 bg-gray-100 overflow-hidden shadow-lg rounded-lg">
              <img
                src={banner}
                alt=""
                className="w-full h-full object-cover object-center hover:scale-105 transition duration-300"
              />
            </div>
          </section>

          <section className="flex flex-col sm:flex-row lg:flex-row justify-between sm:justify-start items-center border-t gap-10 lg:gap-8 py-8">
            <div className="px-6 md:px-8">
              <span className="block text-green-600 text-lg md:text-xl font-bold text-center md:text-left">
                1M+
              </span>
              <span className="block text-gray-800 text-sm md:text-base font-semibold text-center md:text-left">
                Products Sold
              </span>
            </div>

            <div className="px-6 md:px-8">
              <span className="block text-green-600 text-lg md:text-xl font-bold text-center md:text-left">
                100k+
              </span>

              <span className="block text-gray-800 text-sm md:text-base font-semibold text-center md:text-left">
                Customers
              </span>
            </div>

            <div className="px-6 md:px-8">
              <span className="block text-green-600 text-lg md:text-xl font-bold text-center md:text-left">
                1k+
              </span>
              <span className="block text-gray-800 text-sm md:text-base font-semibold text-center md:text-left">
                Sales Per Day
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Banner;
