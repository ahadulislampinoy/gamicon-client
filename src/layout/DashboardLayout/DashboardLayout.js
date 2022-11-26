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
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 w-screen h-screen">
            <div className="m-4 flex flex-col justify-between rounded-xl bg-white p-4 sm:p-8">
              <ul className="space-y-3">
                <li className="flex justify-center font-medium text-2xl text-gray-700 p-3 rounded-lg">
                  __<span className="capitalize">{role}</span>__
                </li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  <li className="w-full font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100 inline-block">
                    Home
                  </li>
                </NavLink>
                <NavLink
                  to="/dashboard/myorders"
                  className="inline-block w-full"
                >
                  <li className="flex font-medium text-gray-700 hover:text-green-700 p-3 rounded-lg bg-gray-100 hover:bg-green-100">
                    My orders
                  </li>
                </NavLink>
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
      )}
    </div>
  );
};

export default DashboardLayout;
