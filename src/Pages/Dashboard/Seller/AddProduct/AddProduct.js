import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SmallSpinner from "../../../../components/Loader/SmallSpinner";
import { AuthContext } from "../../../../contexts/AuthProvider";

const AddProduct = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    const imgbbKey = process.env.REACT_APP_imgbb_apiKey;
    const formData = new FormData();
    formData.append("image", data.productImage[0]);
    fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const productDetails = {
            category_id: data.category,
            productName: data.productName,
            productImage: imgData.data.display_url,
            condition: data.condition,
            originialPrice: data.originialPrice,
            resellPrice: data.resellPrice,
            purchaseYear: data.purchaseYear,
            description: data.description,
            location: data.location,
            sellerName: user?.displayName,
            sellerEmail: user?.email,
            salesStatus: "available",
            advertised: false,
            sellerVerification: false,
            report: false,
          };
          axios
            .post(`http://localhost:5000/products`, productDetails)
            .then((res) => {
              console.log(res.data);
              if (res.data.insertedId) {
                toast.success("Product added successful");
                reset();
                setImgUrl("");
                setLoading(false);
                navigate("/dashboard/myproducts");
              }
            });
        }
      });
  };

  return (
    <div>
      <div className="pb-6 sm:pb-8 lg:pb-12 pt-3">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-6">
            <h2 className="text-gray-700 text-2xl lg:text-3xl font-semibold text-start mb-4">
              Add a product
            </h2>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto"
          >
            <div>
              <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                Product category
              </label>
              <select
                className="w-full bg-gray-100 text-gray-800 rounded outline-none transition duration-100 p-3"
                {...register("category")}
              >
                <option value="01" selected>
                  Play station
                </option>
                <option value="02">Xbox</option>
                <option value="03">Nintendo</option>
              </select>
            </div>
            <div>
              <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                Product name
              </label>
              <input
                placeholder="Enter product name"
                type="text"
                {...register("productName", { required: true })}
                className="w-full bg-gray-100 text-gray-800 rounded outline-none transition duration-100 p-3"
              />
              {errors?.productName && (
                <p className="text-red-500 mt-1">Product name is required</p>
              )}
            </div>

            <div>
              <label className="inline-block text-gray-800 text-sm sm:text-base mb-1">
                Profile Photo
              </label>
              <label className="flex items-center bg-gray-100 text-gray-800 rounded p-3 cursor-pointer">
                <h2 className="text-gray-800 overflow-hidden">
                  {imgUrl ? (
                    imgUrl
                  ) : (
                    <>
                      Choose photo
                      <ArrowUpTrayIcon className="h-4 w-4 ml-1 inline-block" />
                    </>
                  )}
                </h2>
                <input
                  type="file"
                  className="hidden"
                  {...register("productImage", { required: true })}
                  onInputCapture={(e) => setImgUrl(e.target.value.slice(12))}
                />{" "}
              </label>
              {errors?.productImage && (
                <p className="text-red-500 mt-1">Image is required</p>
              )}
            </div>
            <div>
              <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                Phone number
              </label>
              <input
                placeholder="Enter phone number"
                type="text"
                {...register("phoneNumber", { required: true })}
                className="w-full bg-gray-100 text-gray-800 rounded outline-none transition duration-100 p-3"
              />{" "}
              {errors?.phoneNumber && (
                <p className="text-red-500 mt-1">Phone number is required</p>
              )}
            </div>

            <div>
              <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                Location
              </label>
              <input
                placeholder="Enter location"
                type="text"
                {...register("location", { required: true })}
                className="w-full bg-gray-100 text-gray-800 rounded outline-none transition duration-100 p-3"
              />
              {errors?.location && (
                <p className="text-red-500 mt-1">Location is required</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Originial price
                </label>
                <input
                  placeholder="Enter originial price"
                  type="number"
                  {...register("originialPrice", { required: true })}
                  className="w-full bg-gray-100 text-gray-800 rounded outline-none transition duration-100 p-3"
                />{" "}
                {errors?.originialPrice && (
                  <p className="text-red-500 mt-1">
                    Originial price is required
                  </p>
                )}
              </div>

              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Resell price
                </label>
                <input
                  placeholder="Enter resell price"
                  type="number"
                  {...register("resellPrice", { required: true })}
                  className="w-full bg-gray-100 text-gray-800 rounded outline-none transition duration-100 p-3"
                />{" "}
                {errors?.resellPrice && (
                  <p className="text-red-500 mt-1">Resell price is required</p>
                )}
              </div>
            </div>
            <div>
              <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                Condition
              </label>
              <select
                className="w-full bg-gray-100 text-gray-800 rounded outline-none transition duration-100 p-3"
                {...register("condition")}
              >
                <option value="Excellent" selected>
                  Excellent
                </option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>{" "}
            </div>

            <div>
              <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                Purchase year
              </label>
              <input
                placeholder="Enter purchase year"
                type="number"
                {...register("purchaseYear", { required: true })}
                className="w-full bg-gray-100 text-gray-800 rounded outline-none transition duration-100 p-3"
              />{" "}
              {errors?.purchaseYear && (
                <p className="text-red-500 mt-1">Purchase year is required</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                Description
              </label>
              <textarea
                {...register("description", { required: true })}
                placeholder="Enter product description"
                className="w-full h-40 bg-gray-100 text-gray-800 rounded outline-none transition duration-100 p-3"
              ></textarea>{" "}
              {errors?.description && (
                <p className="text-red-500 mt-1">Description is required</p>
              )}
            </div>

            <div className="sm:col-span-2 flex justify-between items-center">
              <button className="inline-block bg-gradient-to-r from-emerald-700 to-green-600  text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                {loading ? <SmallSpinner /> : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
