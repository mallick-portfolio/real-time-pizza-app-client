import React from "react";
import logo from "../../../assets/img/logo.png";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init.js";
import Loading from "../Shared/Loading.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }
  if (user) {
    navigate("/");
  }
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="relative flex flex-col justify-center overflow-hidden">
      <div className="w-full p-6 m-auto bg-white border-t border-primary rounded shadow-lg shadow-primary/50 lg:max-w-md">
        <h1 className="text-3xl font-semibold text-center text-primary">
          <img className="mx-auto" src={logo} alt="" />
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-800">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-4">
            <div>
              <label htmlFor="password" className="block text-sm text-gray-800">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <a href="/" className="text-xs text-gray-600 hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-primary focus:outline-none focus:bg-primary">
                Login
              </button>
            </div>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-primary hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
