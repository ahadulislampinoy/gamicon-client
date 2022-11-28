import { TrashIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const ReportedItems = () => {
  const { data: reportedItems = [], refetch } = useQuery({
    queryKey: ["reportedItems"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/reported-items");
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`).then((res) => {
      if (res.data.deletedCount) {
        toast.success("Product deleted successful");
        refetch();
      }
    });
  };

  return (
    <div className="w-full">
      {reportedItems.length === 0 ? (
        <div className="flex h-screen text-2xl sm:text-3xl font-medium justify-center items-center">
          No reported items available
        </div>
      ) : (
        <div className="sm:p-5 w-full overflow-hidden">
          <h2 className="text-gray-700 text-3xl font-semibold text-start mb-5">
            Total reported items - {reportedItems.length}
          </h2>
          <div className="overflow-x-auto shadow rounded-lg">
            <table className="table p-4 bg-white w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="font-medium text-start border-b-2 px-8 py-4 text-gray-800">
                    Serial
                  </th>
                  <th className="font-medium text-start border-b-2 px-8 py-4 text-gray-800">
                    Product name
                  </th>
                  <th className="font-medium text-start border-b-2 px-8 py-4 text-gray-800">
                    Product category
                  </th>
                  <th className="font-medium text-start border-b-2 px-8 py-4 text-gray-800">
                    Seller email
                  </th>
                  <th className="font-medium text-start border-b-2 px-8 py-4 text-gray-800">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {reportedItems.map((item, i) => (
                  <tr key={item._id} className="text-gray-700">
                    <td className="border-b-2 px-8 py-4 dark:border-dark-5">
                      {i + 1}
                    </td>
                    <td className="border-b-2 px-8 py-4 dark:border-dark-5">
                      {item.productName}
                    </td>
                    <td className="border-b-2 px-8 py-4 dark:border-dark-5">
                      {" "}
                      {item.category_id === "01"
                        ? "Xbox"
                        : item.category_id === "02"
                        ? "Play station"
                        : "Nintendo"}
                    </td>
                    <td className="border-b-2 px-8 py-4 dark:border-dark-5">
                      {" "}
                      {item.sellerEmail}
                    </td>
                    <td className="border-b-2 px-8 py-4 dark:border-dark-5">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="inline-block bg-gray-100 text-white hover:bg-gray-200 shadow md:text-sm font-semibold text-center rounded-lg outline-none transition duration-100 p-3"
                      >
                        <TrashIcon className="h-5 w-5 text-gray-800 inline-block" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportedItems;
