import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: bookingItems = [], refetch } = useQuery({
    queryKey: ["bookingItems"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="w-full">
      <h2 className="text-gray-700 text-2xl lg:text-3xl font-semibold text-start mb-6">
        My orders
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {bookingItems.map((booking) => (
          <div>
            <div class="flex justify-center">
              <strong class="relative h-6  bg-gradient-to-r from-emerald-400 to-green-300  text-white px-4 text-xs uppercase leading-6">
                New
              </strong>
            </div>

            <img
              alt="Trainer"
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              class="-mt-3 h-[350px] w-full object-cover sm:h-[380px]"
            />

            <h3 class="mt-4 text-lg font-medium text-gray-800">
              Limited Edition Sports Trainer
            </h3>

            <div class="mt-2 flex items-center justify-between text-gray-700">
              <p>$189.99</p>

              <p class="text-xs uppercase tracking-wide">
                {" "}
                <button className="inline-block bg-gradient-to-r from-emerald-500 to-green-400 rounded text-white text-sm md:text-base font-semibold text-center outline-none transition duration-100 px-4 py-0.5">
                  Pay
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
