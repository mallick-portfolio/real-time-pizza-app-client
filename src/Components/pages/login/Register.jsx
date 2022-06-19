import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init.js";
import Loading from "../Shared/Loading.jsx";
const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updatingerror] = useUpdateProfile(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (loading || updating) {
    return <Loading />;
  }
  if (error || updatingerror) {
    console.log(error || updatingerror);
  }
  if (user) {
    navigate("/");
  }
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div className="relative flex flex-col justify-center overflow-hidden">
      <div className="w-full p-6 m-auto bg-white border-t border-primary rounded shadow-lg shadow-primary/80 lg:max-w-md">
        <h1 className="text-3xl font-semibold text-center text-primary">
          <img className="mx-auto" src={logo} alt="" />
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-800">
              Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-4">
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
                
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Password must be greater than 8 character",
                  },
                  maxLength: {
                    value: 15,
                    message: "Password must be less than 15 character",
                  },
                })}
                type="password"
                className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <p className="text-red-500">
                {errors.password && errors.password.message}
              </p>
            </div>

            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-primary focus:outline-none focus:bg-primary">
                Login
              </button>
            </div>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-primary hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
