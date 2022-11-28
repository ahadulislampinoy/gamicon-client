import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import React, { Fragment } from "react";
import CheckoutForm from "./CheckoutForm";

const PaymentModal = ({ isOpen, closeModal, bookingData, refetch }) => {
  const stripePromise = loadStripe(process.env.REACT_APP_stripe_publishableKey);

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
                  className="flex justify-between text-lg font-medium leading-6 text-gray-900 capitalize"
                >
                  <span>
                    Payment ${bookingData.resellPrice} for{" "}
                    {bookingData.productName}
                  </span>
                  <span onClick={closeModal}>
                    <XMarkIcon className="h-5 w-5 text-gray-800 cursor-pointer inline-block" />
                  </span>
                </Dialog.Title>
                <div className="mt-5">
                  <div className="text-sm text-gray-800">
                    <Elements stripe={stripePromise}>
                      <CheckoutForm
                        bookingData={bookingData}
                        refetch={refetch}
                      />
                    </Elements>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PaymentModal;
