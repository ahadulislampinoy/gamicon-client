import React from "react";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div class="bg-white justify-between px-8 lg:px-14 py-14 mx-auto">
        <div class="">
          <section class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16 mb-10">
            <div class="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12">
              <p class="text-green-600 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
                Quick. Easy. Convenient.
              </p>

              <h1 class="text-black text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
                The Smart and Trusted Way to Buy Pre-owned Console
              </h1>
            </div>

            <div class="xl:w-5/12 h-48 lg:h-96 bg-gray-100 overflow-hidden shadow-lg rounded-lg">
              <img
                src={banner}
                alt=""
                class="w-full h-full object-cover object-center"
              />
            </div>
          </section>

          <section class="flex flex-col lg:flex-row justify-between items-center border-t gap-10 lg:gap-8 py-8">
            <div class="grid grid-cols-2 md:flex md:divide-x gap-4 -mx-6 md:-mx-8">
              <div class="px-6 md:px-8">
                <span class="block text-green-600 text-lg md:text-xl font-bold text-center md:text-left">
                  200
                </span>
                <span class="block text-gray-800 text-sm md:text-base font-semibold text-center md:text-left">
                  People
                </span>
              </div>

              <div class="px-6 md:px-8">
                <span class="block text-green-600 text-lg md:text-xl font-bold text-center md:text-left">
                  500+
                </span>
                <span class="block text-gray-800 text-sm md:text-base font-semibold text-center md:text-left">
                  Projects
                </span>
              </div>

              <div class="px-6 md:px-8">
                <span class="block text-green-600 text-lg md:text-xl font-bold text-center md:text-left">
                  250+
                </span>
                <span class="block text-gray-800 text-sm md:text-base font-semibold text-center md:text-left">
                  Customers
                </span>
              </div>

              <div class="px-6 md:px-8">
                <span class="block text-green-600 text-lg md:text-xl font-bold text-center md:text-left">
                  A couple
                </span>
                <span class="block text-gray-800 text-sm md:text-base font-semibold text-center md:text-left">
                  Coffee breaks
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
