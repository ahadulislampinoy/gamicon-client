import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useRole from "../Hook/useRole";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role] = useRole(user?.email);
  return (
    <div>
      <div class="flex items-center justify-center h-screen bg-gray-100">
        <div class="grid grid-cols-1 sm:grid-cols-3 w-screen h-screen">
          <div class="m-4 flex flex-col justify-between rounded-xl bg-white p-8">
            <ul class="space-y-2">
              <li>
                <Link
                  to="/"
                  class="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100"
                >
                  Home
                </Link>
              </li>
              {role === "buyer" && (
                <li>
                  <Link
                    to="/dashboard/myorders"
                    class="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100"
                  >
                    {" "}
                    My orders
                  </Link>
                </li>
              )}
              {role === "seller" && (
                <>
                  <li>
                    <Link
                      to="/dashboard/myproduct"
                      class="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100"
                    >
                      {" "}
                      My product
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/addproduct"
                      class="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100"
                    >
                      {" "}
                      Add a product
                    </Link>
                  </li>
                </>
              )}
              {role === "admin" && (
                <>
                  <li>
                    <Link
                      to="/dashboard/allbuyers"
                      class="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100"
                    >
                      {" "}
                      All buyers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/allsellers"
                      class="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100"
                    >
                      {" "}
                      All sellers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/reporteditems"
                      class="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100"
                    >
                      {" "}
                      Reported items
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div class="m-4 col-span-1 sm:col-span-2 p-8 bg-white rounded-xl flex justify-center items-center">
            <p class="font-medium text-gray-600">out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
