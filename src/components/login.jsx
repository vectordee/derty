import React from "react";
import logo from "../assets/images/dertylogo.png";
import GoogleIcon from "./GooglePlusIcon";
import FacebookIcon from "./FacebookIcon";

function Login() {
  return (
    <div className="h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-yellow-500">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="logo mx-auto h-10 w-auto"
            src={logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black-400">
            Sign in to Derty
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6 outline-none focus:ring-0"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6 outline-none focus:ring-0"
                />
              </div>

              <div className="text-sm flex justify-between mt-2">
                <a
                  href="#"
                  className="font-semibold text-gray-600 flex items-center"
                >
                  <input
                    type="checkbox"
                    className="outline-none focus:ring-0 mr-2"
                  />
                  Remember Me
                </a>
                <a
                  href="#"
                  className="font-semibold text-red-600 hover:text-white"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="flex items-center mt-6">
            <div
              className="bg-black"
              style={{ width: "100%", height: "0.5px" }}
            ></div>
            <p className="mx-3 whitespace-nowrap">Or continue with</p>
            <div
              className="bg-black"
              style={{ width: "100%", height: "0.5px" }}
            ></div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-4">
            <a
              href="#"
              className=" hover:text-underline font-bold bg-black text-white py-2 px-4 rounded w-full flex items-center justify-center gap-4"
            >
              <FacebookIcon />
              Facebook
            </a>

            <a
              href="#"
              className=" hover:text-underline font-bold bg-black text-white py-2 px-4 rounded w-full flex items-center justify-center gap-4"
            >
              <GoogleIcon />
              Google
            </a>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-black hover:text-white"
            >
              Sign up and own a Derty account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
