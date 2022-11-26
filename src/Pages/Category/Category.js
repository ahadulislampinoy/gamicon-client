import { CheckCircleIcon, FlagIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";

const Category = () => {
  const products = useLoaderData();
  let [isOpen, setIsOpen] = useState(false);
  const [productData, setProductData] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
            <div>
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
                <div className="grid grid-cols-3 sm:grid-cols-4 justify-center">
                  <div class="mb-2 md:mb-3">
                    <span class="inline-block text-xl text-gray-800 mb-0.5 font-semibold capitalize">
                      {product.sellerName}
                      {product.sellerVerification && (
                        <CheckCircleIcon className="inline-block w-5 h-5 ml-1 text-blue-500" />
                      )}
                    </span>
                    <h2 class="text-gray-800 text-2xl font-bold capitalize">
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
                      Years of use
                    </span>
                    <div className="text-xl font-bold capitalize">
                      {product.yearsOfUse}
                    </div>
                  </div>
                  <div class="mb-4 md:mb-6">
                    <span class="inline-block text-gray-500 text-sm md:text-base font-semibold mb-2">
                      Originial price
                    </span>
                    <div className="text-xl font-bold capitalize">
                      ${product.originialPrice}
                    </div>
                  </div>
                  <div class="mb-4 md:mb-6">
                    <span class="inline-block text-gray-500 text-sm md:text-base font-semibold mb-2">
                      Resell price
                    </span>
                    <div className="text-xl font-bold capitalize">
                      ${product.resellPrice}
                    </div>
                  </div>
                  <div class="mb-4 md:mb-6">
                    <span class="inline-block text-gray-500 text-sm md:text-base font-semibold mb-2">
                      Phone number
                    </span>
                    <div className="text-xl font-bold capitalize">
                      {product.phoneNumber}
                    </div>
                  </div>
                  <div class="mb-4 md:mb-6">
                    <span class="inline-block text-gray-500 text-sm md:text-base font-semibold mb-2">
                      Product views
                    </span>
                    <div className="text-xl font-bold capitalize">
                      {parseInt(product.originialPrice / 5)}
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
                    <button
                      onClick={() => {
                        openModal();
                        setProductData(product);
                      }}
                      class="bg-gradient-to-r from-emerald-700 to-green-600 text-white text-sm md:text-base font-semibold text-center rounded-lg px-6 py-3"
                    >
                      Buy now
                    </button>
                    <button
                      onClick={() => handleReport(product._id)}
                      class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3"
                    >
                      Report
                      <FlagIcon className="inline-block w-5 h-5 ml-1 text-red-500" />
                    </button>
                  </div>
                  <h1> </h1>
                  <h1 className="text-end text-gray-600 text-sm font-medium">
                    Posted on: {product.postedTime}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <BookingModal
        isOpen={isOpen}
        closeModal={closeModal}
        productData={productData}
      />
    </div>
  );
};

export default Category;
