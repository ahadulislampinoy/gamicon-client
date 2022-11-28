import { Transition } from "@headlessui/react";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then((result) => {
        toast.success("Logout successful");
        localStorage.removeItem("gamicon-token");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const navbarLinks = (
    <>
      <li className="text-gray-700 hover:text-green-600 text-xl">
        <Link to="/home">Home</Link>
      </li>

      <li className="text-gray-700 hover:text-green-600 text-xl">
        <Link to="/blog">Blog</Link>
      </li>
      {user?.email ? (
        <>
          <li className="text-gray-700 hover:text-green-600 text-xl">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="text-gray-700 hover:text-green-600 text-xl">
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </>
      ) : (
        <li className="text-gray-700 hover:text-green-600 text-xl">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div>
      <nav className="w-full shadow">
        <div className="justify-between px-8 lg:px-14 py-2 mx-auto md:items-center lg:grid grid-cols-2 shadow-lg shadow-black">
          <div className="flex items-center justify-between py-2">
            <Link to="/" className="flex items-center ">
              <img src={logo} alt="" className="w-[13%] sm:w-[10%]" />
              <h2 className="text-2xl md:text-3xl pl-2 font-semibold text-gray-700">
                Gamicon
              </h2>
            </Link>
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div>
            <div className="hidden lg:block">
              <div className="flex md:flex-row justify-end items-end md:items-center pb-3 mt-8 md:pb-0 md:mt-0">
                <ul className="text-lg font-medium items-center justify-center space-y-8 md:flex md:space-x-11 md:space-y-0">
                  {navbarLinks}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Transition
          show={navbar}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="block lg:hidden">
              <div className="flex justify-between items-end px-6 pb-6 mt-10">
                <ul className="flex flex-col text-lg font-medium justify-center space-y-8">
                  {navbarLinks}
                </ul>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;
