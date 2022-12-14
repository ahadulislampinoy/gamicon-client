import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import LargeSpinner from "../../components/Loader/LargeSpinner";
import { AuthContext } from "../../contexts/AuthProvider";
import useRole from "../../Hook/useRole";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import "./DashBoardLayout.css";

const DashboardLayout = () => {
  const { loading, user } = useContext(AuthContext);

  const [role, roleLoading] = useRole();
  console.log(role);

  return (
    <div>
      {loading || roleLoading ? (
        <LargeSpinner />
      ) : (
        <>
          <Navbar />
          <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-3 w-screen h-screen">
              <div className="m-4 flex flex-col justify-between rounded-xl bg-white p-4 sm:p-8">
                <ul className="space-y-3">
                  <li className="flex font-medium text-2xl text-gray-700 pb-2 rounded-lg">
                    <div className="rounded-2xl bg-gray-100 p-3">
                      <div className="flex-row gap-4 flex justify-center items-center">
                        <div className="flex-shrink-0">
                          <img
                            alt="profile"
                            src={user?.photoURL}
                            className="mx-auto object-cover rounded-lg h-16 w-16 "
                          />
                        </div>
                        <div className=" flex flex-col">
                          <span className="text-xl font-medium text-gray-700 capitalize">
                            {user?.displayName}
                          </span>
                          <span className="text-sm text-gray-600 capitalize">
                            {role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  {role === "buyer" && (
                    <NavLink
                      to="/dashboard/myorders"
                      className="inline-block w-full"
                    >
                      <li className="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100">
                        My orders
                      </li>
                    </NavLink>
                  )}
                  {role === "seller" && (
                    <>
                      <NavLink
                        to="/dashboard/myproducts"
                        className="inline-block w-full"
                      >
                        <li className="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100">
                          My products
                        </li>
                      </NavLink>
                      <NavLink
                        to="/dashboard/addproduct"
                        className="inline-block w-full"
                      >
                        <li className="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100">
                          Add a product
                        </li>
                      </NavLink>
                    </>
                  )}
                  {role === "admin" && (
                    <>
                      <NavLink
                        to="/dashboard/allbuyer"
                        className="inline-block w-full"
                      >
                        <li className="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100">
                          All buyer
                        </li>
                      </NavLink>
                      <NavLink
                        to="/dashboard/allseller"
                        className="inline-block w-full"
                      >
                        <li className="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100">
                          All seller
                        </li>
                      </NavLink>
                      <NavLink
                        to="/dashboard/reporteditems"
                        className="inline-block w-full"
                      >
                        <li className="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100">
                          Reported items
                        </li>
                      </NavLink>
                    </>
                  )}
                </ul>
              </div>

              <div className="m-4 col-span-1 sm:col-span-2 p-2 sm:p-6 bg-white rounded-xl flex justify-start">
                <Outlet />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardLayout;
