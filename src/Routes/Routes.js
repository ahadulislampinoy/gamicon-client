import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Category from "../Pages/Category/Category";
import AllBuyer from "../Pages/Dashboard/Admin/AllBuyer/AllBuyer";
import AllSeller from "../Pages/Dashboard/Admin/AllSeller/AllSeller";
import ReportedItems from "../Pages/Dashboard/Admin/ReportedItems/ReportedItems";
import MyOrders from "../Pages/Dashboard/Buyer/MyOrders/MyOrders";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct/AddProduct";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts/MyProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Welcome from "../Pages/Welcome/Welcome";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      {
        path: "/categories/:id",
        element: (
          <PrivateRoute>
            <Category />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_api_url}/categories/${params.id}`),
      },
      { path: "blog", element: <Blog /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Welcome />,
      },
      {
        path: "/dashboard/myorders",
        element: (
          <BuyerRoute>
            <MyOrders />
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <SellerRoute>
            <AddProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/reportedItems",
        element: (
          <AdminRoute>
            <ReportedItems />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allseller",
        element: (
          <AdminRoute>
            <AllSeller />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allbuyer",
        element: (
          <AdminRoute>
            <AllBuyer />
          </AdminRoute>
        ),
      },
    ],
  },
]);
