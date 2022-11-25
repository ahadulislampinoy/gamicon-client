import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import LargeSpinner from "../../components/Loader/LargeSpinner";
import { AuthContext } from "../../contexts/AuthProvider";
import useRole from "../../Hook/useRole";
import "./DashBoardLayout.css";

const DashboardLayout = () => {
  const { user, loading } = useContext(AuthContext);

  const [role] = useRole(user?.email);
  return (
    <div>
      {loading ? (
        <LargeSpinner height={"h-screen"} />
      ) : (
        <div class="flex items-center justify-center h-screen bg-gray-100">
          <div class="grid grid-cols-1 sm:grid-cols-3 w-screen h-screen">
            <div class="m-4 flex flex-col justify-between rounded-xl bg-white p-4 sm:p-8">
              <ul class="space-y-3">
                <li class="flex justify-center font-medium text-2xl text-gray-700 p-3 rounded-lg">
                  __<span className="capitalize">{role}</span>__
                </li>
                <li class="w-full font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100 inline-block">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                  >
                    Home
                  </NavLink>
                </li>
                {role === "buyer" && (
                  <li class="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100">
                    <NavLink to="/dashboard/myorders"> My orders</NavLink>
                  </li>
                )}
                {role === "seller" && (
                  <>
                    <li class="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100">
                      <NavLink to="/dashboard/myproducts"> My products</NavLink>
                    </li>
                    <li class="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100">
                      <NavLink
                        to="/dashboard/addproduct"
                        className={({ isActive }) =>
                          isActive ? "active" : undefined
                        }
                      >
                        Add a product
                      </NavLink>
                    </li>
                  </>
                )}
                {role === "admin" && (
                  <>
                    <li class="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100">
                      <NavLink to="/dashboard/allbuyers"> All buyers</NavLink>
                    </li>
                    <li class="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100">
                      <NavLink to="/dashboard/allsellers"> All sellers</NavLink>
                    </li>
                    <li class="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100">
                      <NavLink to="/dashboard/reporteditems">
                        {" "}
                        Reported items
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div class="m-4 col-span-1 sm:col-span-2 p-2 sm:p-6 bg-white rounded-xl flex justify-start">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
