import { CheckCircleIcon, FlagIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const products = useLoaderData();

  const handleReport = (id) => {
    axios.patch(`http://localhost:5000/report/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        toast.success("Product reported successful");
      }
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-10 justify-between p-5 sm:p-10 mx-auto">
      {products.map((product) => (
        <div key={product._id}>
          <div class="max-w-screen-lg mx-auto">
            <div class="">
              <div class="space-y-4">
                <div class="bg-gray-100 rounded-lg overflow-hidden relative">
                  <img
                    src={product.productImage}
                    alt=""
                    class="w-full h-96 object-cover object-center"
                  />
                </div>
              </div>

              <div class="py-6">
                <div className="grid grid-cols-3 sm:grid-cols-5 justify-center">
                  <div class="mb-2 md:mb-3">
                    <span class="inline-block text-xl text-gray-800 mb-0.5 font-semibold capitalize">
                      {product.sellerName}
                      {product.sellerVerification && (
                        <CheckCircleIcon className="inline-block w-5 h-5 ml-1 text-blue-500" />
                      )}
                    </span>
                    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold capitalize">
                      {product.productName}
                    </h2>
                  </div>

                  <div class="mb-4 md:mb-6">
                    <span class="inline-block text-gray-500 text-sm md:text-base font-semibold mb-2">
                      Condition
                    </span>
                    <div className="text-xl font-bold">{product.condition}</div>
                  </div>
                  <div class="mb-4 md:mb-6">
                    <span class="inline-block text-gray-500 text-sm md:text-base font-semibold mb-2">
                      Location
                    </span>
                    <div className="text-xl font-bold capitalize">
                      {product.location}
                    </div>
                  </div>
                  <div class="mb-4 md:mb-6">
                    <span class="inline-block text-gray-500 text-sm md:text-base font-semibold mb-2">
                      Purchase year
                    </span>
                    <div className="text-xl font-bold capitalize">
                      {product.purchaseYear}
                    </div>
                  </div>
                  <div class="mb-4 md:mb-6">
                    <span class="inline-block text-gray-500 text-sm md:text-base font-semibold mb-2">
                      Then & Now
                    </span>
                    <div>
                      <span class="text-gray-800 text-xl md:text-2xl font-bold">
                        ${product.resellPrice}
                      </span>
                      <span class="text-red-500 line-through mb-0.5">
                        ${product.originialPrice}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center">
                  <div className="mb-4">
                    <div class="text-gray-800 text-lg font-semibold mb-1">
                      Description
                    </div>
                    <p class="text-gray-500">{product.description}</p>
                  </div>
                  <div class="flex gap-2.5 md:justify-end">
                    <button class="bg-gradient-to-r from-emerald-700 to-green-600 text-white text-sm md:text-base font-semibold text-center rounded-lg px-6 py-3">
                      Buy now
                    </button>

                    {product.report ? (
                      <button
                        disabled
                        class="inline-block bg-gray-200 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3"
                      >
                        Reported
                        <FlagIcon className="inline-block w-5 h-5 ml-1 text-green-500" />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleReport(product._id)}
                        class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3"
                      >
                        Report
                        <FlagIcon className="inline-block w-5 h-5 ml-1 text-red-500" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
