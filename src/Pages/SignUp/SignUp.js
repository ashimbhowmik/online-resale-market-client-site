import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const handelGoogleSignUp = (signInWithGoogle, location, navigate) => {
  const role = "buyer";
  signInWithGoogle(role, location, navigate);
};

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { registerUser, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignUp = (data) => {
    const role =
      document.getElementById("buyer-acc").checked === true
        ? "buyer"
        : "seller";
    registerUser(data?.email, data?.password, data?.name, role, navigate);
  };

  return (
    <div className="hero w-full my-20">
      <div className="">
        <div className="card w-[800px] max-w-sm shadow-2xl bg-base-100 py-10">
          <h1 className="text-center text-5xl font-bold">Sign Up now!</h1>
          <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: true,
                })}
                placeholder="full name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                })}
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <div className="form-control">
              <label className="label mb-1">
                <span>Account Type</span>
              </label>
              <div className="">
                <label className="cursor-pointer flex items-center gap-2 mb-4">
                  <input
                    type="radio"
                    name="acc-selection"
                    id="buyer-acc"
                    className="radio"
                    checked="checked"
                  />
                  <span className="label-text">Buyer</span>
                </label>
                <label className="cursor-pointer flex items-center gap-2">
                  <input
                    type="radio"
                    name="acc-selection"
                    id="seller-acc"
                    className="radio"
                  />
                  <span className="label-text">Seller</span>
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign up"
              />
            </div>
          </form>
          <p className="text-center">
            Already have an account?
            <Link className="text-orange-600 font-bold" to="/login">
              Login
            </Link>
          </p>
          <div className="flex mx-auto mt-4 mb-2 ">
            <button
              aria-label="Log in with Google"
              className="p-3 rounded-sm"
              onClick={() =>
                handelGoogleSignUp(signInWithGoogle, location, navigate)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
