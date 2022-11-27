import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const AllBuyer = () => {
  const { data: allbuyer = [], refetch } = useQuery({
    queryKey: ["allbuyer"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allbuyer", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("gamicon-token")}`,
        },
      });
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
    <div className="w-full">
      {allbuyer.length === 0 ? (
        <div className="flex h-screen text-3xl font-medium justify-center items-center">
          No buyer registered
        </div>
      ) : (
        <div className="sm:p-5 w-full">
          <h2 className="text-gray-700 text-2xl lg:text-3xl font-semibold text-start mb-8 ">
            All buyers
          </h2>
          <div className="mx-auto px-4">
            <div className="py-8">
              <div className="-mx-4 sm:-mx-8 p-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="text-center px-5 py-3 bg-white border-b border-gray-200 text-gray-800 font-medium"
                        >
                          Photo
                        </th>
                        <th
                          scope="col"
                          className="text-center px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 font-medium"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="text-center px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 font-medium"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="text-center px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 font-medium"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {allbuyer.map((buyer) => (
                        <tr key={buyer._id} className="text-center">
                          <td className="px-5 py-5 border-b border-gray-200 bg-white ">
                            <div className="flex items-center justify-center">
                              <div className="flex-shrink-0">
                                <img
                                  alt=""
                                  src={buyer.image}
                                  className="mx-auto object-cover rounded-full h-12 w-12"
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white ">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {buyer.name}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white ">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {buyer.email}
                            </p>
                          </td>

                          <td className="px-5 py-5 border-b border-gray-200 bg-white ">
                            <button
                              onClick={() => handleDelete(buyer._id)}
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
      )}
    </div>
  );
};

export default AllBuyer;
