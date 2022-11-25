import { default as React, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { SaveUserToDb } from "../../Api/SaveUserToDb";
import SmallSpinner from "../../components/Loader/SmallSpinner";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { loginUser, googleSignIn, loading } = useContext(AuthContext);
  const [authError, setAuthError] = useState("");

  const onSubmit = (data) => {
    setAuthError("");
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("Login successful");
        reset();
      })
      .catch((err) => {
        setAuthError(err);
      });
  };

  // Google signin
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        toast.success("Login successful");
        SaveUserToDb(user, "buyer");
      })
      .catch((err) => {
        setAuthError(err);
      });
  };

  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 class="text-gray-800 text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-8">
            Login
          </h2>

          <div class="max-w-lg border rounded-lg mx-auto">
            <div class="flex flex-col gap-4 p-4 md:p-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    for="email"
                    class="inline-block text-gray-800 text-sm sm:text-base  mt-3 mb-1"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    {...register("email", { required: true })}
                    class="w-full bg-gray-50 text-gray-800 border focus:ring ring-gray-100 rounded outline-none transition duration-100 px-3 py-2"
                  />
                  {errors?.email && (
                    <p className="text-red-500 mt-1">Email is required</p>
                  )}
                </div>
                <div>
                  <label
                    for="password"
                    class="inline-block text-gray-800 text-sm sm:text-base  mt-3 mb-1"
                  >
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Enter password"
                    class="w-full bg-gray-50 text-gray-800 border focus:ring ring-gray-100 rounded outline-none transition duration-100 px-3 py-2"
                  />
                  {errors?.password && (
                    <p className="text-red-500 mt-1">Password is required</p>
                  )}
                </div>
                {authError && (
                  <p className="text-red-500">{authError.message}</p>
                )}
                <button class="w-full block bg-gradient-to-r from-emerald-700 to-green-600  text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 mt-4 px-8 py-3">
                  {/* Register */}
                  {loading ? <SmallSpinner /> : "Login"}
                </button>
              </form>

              <div class="flex justify-center items-center relative">
                <span class="h-px bg-gray-300 absolute inset-x-0"></span>
                <span class="bg-white text-gray-400 text-sm relative px-4">
                  Log in with social
                </span>
              </div>

              <button
                onClick={handleGoogleSignIn}
                class="flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 border border-gray-300 focus-visible:ring ring-gray-100 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3"
              >
                <svg
                  class="w-5 h-5 shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </button>
            </div>

            <div class="flex justify-center items-center bg-gray-100 p-4">
              <p class="text-gray-500 text-sm text-center">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  class="text-gray-500 hover:text-gray-600 active:text-gray-700 transition duration-100"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
