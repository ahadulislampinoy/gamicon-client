import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import React, { Fragment, useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ isOpen, closeModal, productData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const { productName, _id, resellPrice, salesStatus, productImage } =
    productData;

  const onSubmit = (data) => {
    const bookingDetails = {
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      productId: _id,
      productName,
      resellPrice,
      location: data.location,
      salesStatus,
      productImage,
      phoneNumber: data.phoneNumber,
    };
    axios
      .post(`http://localhost:5000/bookings`, bookingDetails, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("gamicon-token")}`,
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Item booked successful");
          closeModal();
          reset();
        }
      });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
                >
                  <span>Booking info</span>
                  <XMarkIcon
                    className="h-6 w-6 text-gray-900 cursor-pointer"
                    onClick={closeModal}
                  />
                </Dialog.Title>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label
                      htmlFor="name"
                      className="inline-block text-gray-800 text-sm sm:text-base  mt-3 mb-1"
                    >
                      Name
                    </label>
                    <input
                      name="sellerName"
                      type="text"
                      defaultValue={user?.displayName}
                      readOnly
                      {...register("sellerName")}
                      placeholder="Enter name"
                      className="w-full bg-gray-50 text-gray-800 border focus:ring ring-gray-100 rounded outline-none transition duration-100 px-3 py-2"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="inline-block text-gray-800 text-sm sm:text-base  mt-3 mb-1"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      defaultValue={user?.email}
                      readOnly
                      {...register("buyerEmail")}
                      placeholder="Enter email"
                      className="w-full bg-gray-50 text-gray-800 border focus:ring ring-gray-100 rounded outline-none transition duration-100 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="inline-block text-gray-800 text-sm sm:text-base  mt-3 mb-1">
                      Product name
                    </label>
                    <input
                      name="item-name"
                      type="text"
                      defaultValue={productName}
                      readOnly
                      {...register("productName")}
                      placeholder="Enter name"
                      className="w-full bg-gray-50 text-gray-800 border focus:ring ring-gray-100 rounded outline-none transition duration-100 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="inline-block text-gray-800 text-sm sm:text-base  mt-3 mb-1">
                      Product price
                    </label>
                    <input
                      name="item-price"
                      type="text"
                      defaultValue={resellPrice}
                      readOnly
                      {...register("price")}
                      placeholder="Enter price"
                      className="w-full bg-gray-50 text-gray-800 border focus:ring ring-gray-100 rounded outline-none transition duration-100 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="inline-block text-gray-800 text-sm sm:text-base  mt-3 mb-1">
                      Phone number
                    </label>
                    <input
                      name="number"
                      type="text"
                      {...register("phoneNumber", { required: true })}
                      placeholder="Enter your phone number"
                      className="w-full bg-gray-50 text-gray-800 border focus:ring ring-gray-100 rounded outline-none transition duration-100 px-3 py-2"
                    />
                    {errors?.phoneNumber && (
                      <p className="text-red-500 mt-1">
                        Phone number is required
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="inline-block text-gray-800 text-sm sm:text-base  mt-3 mb-1">
                      Meeting location
                    </label>
                    <input
                      name="location"
                      type="text"
                      {...register("location", { required: true })}
                      placeholder="Enter your location"
                      className="w-full bg-gray-50 text-gray-800 border focus:ring ring-gray-100 rounded outline-none transition duration-100 px-3 py-2"
                    />
                    {errors?.location && (
                      <p className="text-red-500 mt-1">Location is required</p>
                    )}
                  </div>

                  <div>
                    <button className="w-full block bg-gradient-to-r from-emerald-700 to-green-600  text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 mt-3 px-8 py-2">
                      Book
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BookingModal;
