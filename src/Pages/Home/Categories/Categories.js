import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/categories`)
      .then((res) => setCategories(res.data));
  }, []);

  return (
    <div class="bg-white justify-between px-8 lg:px-14 py-14 mx-auto">
      <div class="max-w-screen-2xl">
        <div class="flex flex-col lg:flex-row lg:justify-between items-center mb-4 md:mb-8">
          <h2 class="capitalize text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-2 lg:mb-0">
            pre-owned Categories
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-lg gap-4 lg:gap-6">
          {categories.map((category) => (
            <Link to="/">
              <div
                key={category._id}
                class="h-36 flex justify-center items-center bg-gray-100 text-gray-800 rounded-lg p-2 sm:p-4 text-3xl font-medium"
              >
                <img src={category.image} alt="" className="w-16 p-3" />
                {category.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
