import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import PaymentModal from "./PaymentModal";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  let [isOpen, setIsOpen] = useState(false);
  const [bookingData, setBookingData] = useState("");
  const { data: bookingItems = [], refetch } = useQuery({
    queryKey: ["bookingItems"],
    queryFn: async () => {
      const res = await fetch(
        `/products-advertise/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("gamicon-token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="w-full">
      {bookingItems.length === 0 ? (
        <div className="flex h-screen text-3xl font-medium justify-center items-center">
          No orders available
        </div>
      ) : (
        <div className="w-full">
          <h2 className="text-gray-700 text-2xl lg:text-3xl font-semibold text-start mb-4 p-3">
            My orders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-5">
            {bookingItems.map((booking) => (
              <div key={booking._id}>
                <div className="group h-72 block bg-gray-100 rounded-t-lg overflow-hidden relative">
                  <img
                    src={booking.productImage}
                    loading="lazy"
                    alt=""
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                  />

                  <span
                    className={`text-black text-sm font-semibold tracking-wider uppercase rounded-r-lg absolute left-0 top-3 px-3 py-1.5 ${
                      booking.salesStatus === "available"
                        ? "bg-green-300"
                        : "bg-red-300"
                    }`}
                  >
                    {booking.salesStatus}
                  </span>
                </div>

                <div className="my-4">
                  <div className="flex justify-between items-center">
                    <h1 className="text-gray-800 lg:text-lg font-bold">
                      {booking.productName}
                    </h1>
                    <span className="text-gray-600">{booking.location}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 lg:text-lg font-bold">
                      ${booking.resellPrice}
                    </span>
                    <span>
                      <button
                        onClick={() => {
                          openModal();
                          setBookingData(booking);
                        }}
                        disabled={
                          booking.salesStatus === "available" ? false : true
                        }
                        className="block bg-gradient-to-r from-emerald-700 to-green-600  text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 mt-3 px-4 py-2"
                      >
                        {booking.salesStatus === "available" ? "Pay" : "Paid"}
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <PaymentModal
            isOpen={isOpen}
            refetch={refetch}
            closeModal={closeModal}
            bookingData={bookingData}
          />
        </div>
      )}
    </div>
  );
};
export default MyOrders;
