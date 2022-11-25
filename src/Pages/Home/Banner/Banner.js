import React from "react";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="bg-white justify-between px-8 lg:px-14 py-14 mx-auto">
        <div className="">
          <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16 mb-10">
            <div className="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12">
              <p className="text-green-600 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
                Quick. Easy. Convenient.
              </p>

              <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
                The Smart and Trusted Way to Buy Pre-owned Console
              </h1>
            </div>

            <div className="xl:w-5/12 h-48 lg:h-96 bg-gray-100 overflow-hidden shadow-lg rounded-lg">
              <img
                src={banner}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </section>

          <section className="flex flex-col lg:flex-row justify-between items-center border-t gap-10 lg:gap-8 py-8">
            <div className="grid grid-cols-2 md:flex md:divide-x gap-4 -mx-6 md:-mx-8">
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
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Banner;
