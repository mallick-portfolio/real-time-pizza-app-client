import React from "react";
import logo from "../../../assets/img/logo.png";
const Login = () => {
  return (
    <div class="relative flex flex-col justify-center min-h-[calc(100%_-_100rem)]  overflow-hidden">
      <div class="w-full p-6 m-auto bg-white border-t border-primary rounded shadow-lg shadow-primary/50 lg:max-w-md">
        <h1 class="text-3xl font-semibold text-center text-primary">
          <img src={logo} alt="" />
        </h1>

        <form class="mt-6">
          <div>
            <label for="email" class="block text-sm text-gray-800">
              Email
            </label>
            <input
              type="email"
              class="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div class="mt-4">
            <div>
              <label for="password" class="block text-sm text-gray-800">
                Password
              </label>
              <input
                type="password"
                class="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <a href="/" class="text-xs text-gray-600 hover:underline">
              Forget Password?
            </a>
            <div class="mt-6">
              <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-primary focus:outline-none focus:bg-primary">
                Login
              </button>
            </div>
          </div>
        </form>
        <p class="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="/" class="font-medium text-primary hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
