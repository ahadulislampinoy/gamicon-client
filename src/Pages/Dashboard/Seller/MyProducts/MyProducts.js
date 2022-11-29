import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider";
import "./MyProduct.css";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_api_url}/products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_api_url}/products/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          toast.success("Product deleted successful");
          refetch();
        }
      });
  };

  const handleAdvertise = (id) => {
    axios
      .patch(`${process.env.REACT_APP_api_url}/products-advertise/${id}`)
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Product advertised successful");
          refetch();
        }
      });
  };

  return (
    <div className="w-full">
      {products.length === 0 ? (
        <div className="flex h-screen text-3xl font-medium justify-center items-center">
          No products available
        </div>
      ) : (
        <>
          <h2 className="text-gray-700 text-2xl lg:text-3xl font-semibold text-start mb-6">
            Total my products - {products.length}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="w-full relative block overflow-hidden rounded-xl productImg_custom bg-no-repeat"
                style={{ background: `url(${product.productImage})` }}
              >
                <span
                  className={`absolute right-4 top-4 z-10 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-black ${
                    product.salesStatus === "available"
                      ? "bg-gray-300"
                      : "bg-red-300"
                  }`}
                >
                  {product.salesStatus}
                </span>
                {product.advertised && (
                  <span className="absolute right-24 top-4 z-10 inline-flex items-center rounded-full bg-green-300 px-3 py-1 text-xs font-semibold text-black">
                    advertised
                  </span>
                )}

                <div className="relative bg-black bg-opacity-40 p-5 pt-40 text-white">
                  <h3 className="text-2xl font-bold"> {product.productName}</h3>

                  <p className="text-lg my-2">${product.resellPrice}</p>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="inline-block bg-gradient-to-r from-red-700 to-rose-600  text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-3 py-2"
                  >
                    Delete
                  </button>
                  {product.salesStatus !== "sold" && !product.advertised && (
                    <button
                      onClick={() => handleAdvertise(product._id)}
                      className="inline-block bg-gradient-to-r from-emerald-700 to-green-600  text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-3 py-2 ml-2"
                    >
                      Advertise{" "}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyProducts;
