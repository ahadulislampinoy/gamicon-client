import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import React from "react";
import { Link } from "react-router-dom";

export function Slider({ advertisedProducts }) {
  return (
    <Splide
      options={{
        perMove: 1,
        perPage: 1,
        gap: "2rem",
        arrows: true,
        pagination: true,
      }}
    >
      {advertisedProducts.map((product) => (
        <SplideSlide>
          <div class="md:h-80 flex flex-col sm:flex-row bg-gray-100 text-gray-800 rounded-lg overflow-hidden ">
            <div class="w-full sm:w-1/2 lg:w-2/5 flex flex-col p-4 sm:p-6 justify-between">
              <div className="flex justify-between items-center sm:block">
                <h2 class="text-2xl lg:text-4xl font-bold mb-4">
                  {product.productName}
                </h2>
                <h4 class="text-lg md:text-xl lg:text-2xl font-semibold mb-4">
                  ${product.resellPrice}
                </h4>
              </div>
              <p class="max-w-md text-gray-600 mb-4">
                {product.description.slice(0, 150) + "..."}
              </p>

              <div>
                <Link
                  to={`/categories/${product.category_id}`}
                  class="inline-block bg-gradient-to-r from-emerald-500 to-green-600 shadow text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-6 py-2"
                >
                  More
                </Link>
              </div>
            </div>
            <div class="w-full sm:w-1/2 lg:w-3/5 h-48 sm:h-auto order-first sm:order-none bg-gray-700">
              <img
                src={product.productImage}
                alt="product"
                class="w-full h-full object-cover object-center"
              />
            </div>{" "}
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
export default Slider;
