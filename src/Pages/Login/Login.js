import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signInWithGoogle, loginUser, isLoading, authError } = useAuth();
  const [loginError, setLoginError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const role = "buyer";
  const handleLogin = (data) => {
    loginUser(data.email, data.password, location, navigate);
  };

  const handelGoogleSignUp = (
    signInWithGoogle,
    location,

    navigate
  ) => {
    signInWithGoogle(role, location, navigate);
  };

  return (
    <div>
      <section>
        <div className="hero w-full my-20">
          <div>
            <div className="card w-[800px] max-w-sm shadow-2xl bg-base-100 py-10">
              <h1 className="text-center text-5xl font-bold">Login now!</h1>
              <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                    placeholder="E-mail"
                    className="input input-bordered"
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
                    placeholder="Password"
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <p className="text-red-600">{errors.password?.message}</p>
                  )}
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
                <div>
                  {loginError && <p className="text-red-600">{loginError}</p>}
                </div>
              </form>
              <div className="flex items-center space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                <p className=" text-sm dark:text-gray-400">
                  Login with social accounts
                </p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              </div>
              <div className="flex justify-center space-x-4 mt-5">
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
              <p className="text-center mt-2">
                New to Bicycle Surfers?
                <Link className="text-orange-600 font-bold ml-2" to="/signup">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
