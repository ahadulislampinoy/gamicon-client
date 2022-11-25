import axios from "axios";
import React, { useEffect } from "react";

const MyProducts = () => {
  return (
    <div className="w-full">
      <h2 class="text-gray-700 text-2xl lg:text-3xl font-semibold text-start mb-4">
        My products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div class="w-full relative block overflow-hidden rounded-xl bg-[url(https://i0.wp.com/news.xbox.com/en-us/wp-content/uploads/sites/2/2022/09/Xbox-Wireless-Controller-Customize-Color_JPG-fdf100976d9576fd4af2.jpg?resize=1200%2C675&ssl=1)] bg-cover bg-center bg-no-repeat">
          <span class="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-gray-300 px-3 py-1 text-xs font-semibold text-black">
            Status
          </span>

          <div class="relative bg-black bg-opacity-40 p-6 pt-40 text-white">
            <h3 class="text-2xl font-bold">Name</h3>

            <p class="text-base my-2">Price</p>
            <button class="inline-block bg-gradient-to-r from-red-700 to-rose-600  text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-3 py-2">
              {/* {loading ? <SmallSpinner /> : "Add"} */}
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
