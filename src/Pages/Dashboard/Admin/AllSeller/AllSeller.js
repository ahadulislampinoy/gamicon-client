import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const AllSeller = () => {
  const { data: allSeller = [], refetch } = useQuery({
    queryKey: ["allSeller"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allseller");
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/user/${id}`).then((res) => {
      if (res.data.deletedCount) {
        toast.success("Seller deleted successful");
        refetch();
      }
    });
  };

  return (
    <div className="sm:p-5 w-full">
      <h2 className="text-gray-700 text-2xl lg:text-3xl font-semibold text-start mb-8 ">
        All sellers
      </h2>
      <div class="mx-auto px-4">
        <div class="py-8">
          <div class="-mx-4 sm:-mx-8 p-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="text-center px-5 py-3 bg-white border-b border-gray-200 text-gray-800 font-medium"
                    >
                      Photo
                    </th>
                    <th
                      scope="col"
                      class="text-center px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 font-medium"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="text-center px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 font-medium"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="text-center px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 font-medium"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allSeller.map((seller) => (
                    <tr key={seller._id} className="text-center">
                      <td class="px-5 py-5 border-b border-gray-200 bg-white ">
                        <div class="flex items-center justify-center">
                          <div class="flex-shrink-0">
                            <img
                              alt=""
                              src={seller.image}
                              class="mx-auto object-cover rounded-full h-12 w-12"
                            />
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white ">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {seller.name}
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white ">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {seller.email}
                        </p>
                      </td>

                      <td class="px-5 py-5 border-b border-gray-200 bg-white ">
                        <button
                          onClick={() => handleDelete(seller._id)}
                          className="inline-block bg-gradient-to-r from-rose-700 to-red-600  text-white  md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-3 py-2"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSeller;
