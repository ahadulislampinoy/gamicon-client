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
    <div>
      {reportedItems.length === 0 ? (
        <div className="flex h-screen text-3xl font-medium justify-center items-center">
          No reported items avaiable
        </div>
      ) : (
        <div className="sm:p-5 w-full overflow-hidden">
          <h2 className="text-gray-700 text-2xl lg:text-3xl font-semibold text-start mb-8">
            Reported items
          </h2>
          <div className="overflow-x-auto shadow rounded-lg">
            <table class="table p-4 bg-white w-full">
              <thead>
                <tr>
                  <th class="font-medium text-start border-b-2 px-8 py-4 dark:border-dark-5 whitespace-nowrap text-gray-900">
                    Serial
                  </th>
                  <th class="font-medium text-start border-b-2 px-8 py-4 dark:border-dark-5 whitespace-nowrap text-gray-900">
                    Product name
                  </th>
                  <th class="font-medium text-start border-b-2 px-8 py-4 dark:border-dark-5 whitespace-nowrap text-gray-900">
                    Product category
                  </th>
                  <th class="font-medium text-start border-b-2 px-8 py-4 dark:border-dark-5 whitespace-nowrap text-gray-900">
                    Seller email
                  </th>
                  <th class="font-medium text-start border-b-2 px-8 py-4 dark:border-dark-5 whitespace-nowrap text-gray-900">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {reportedItems.map((item, i) => (
                  <tr key={item._id} class="text-gray-700">
                    <td class="border-b-2 px-8 py-4 dark:border-dark-5">
                      {i + 1}
                    </td>
                    <td class="border-b-2 px-8 py-4 dark:border-dark-5">
                      {item.productName}
                    </td>
                    <td class="border-b-2 px-8 py-4 dark:border-dark-5">
                      {" "}
                      {item.category_id === "01"
                        ? "Xbox"
                        : item.category_id === "02"
                        ? "Play station"
                        : "Nintendo"}
                    </td>
                    <td class="border-b-2 px-8 py-4 dark:border-dark-5">
                      {" "}
                      {item.sellerEmail}
                    </td>
                    <td class="border-b-2 px-8 py-4 dark:border-dark-5">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="inline-block bg-gradient-to-r from-rose-700 to-red-600  text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-3 py-2"
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
      )}
    </div>
  );
};

export default ReportedItems;
