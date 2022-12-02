import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import img1 from "../../Images/logo.png";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [role, setRole] = useState("buyer");
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetch(
      `https://online-resale-market-server-site.vercel.app/allUsers/${
        user?.email || user?.photoURL
      }`
    )
      .then((res) => res.json())
      .then((data) => setRole(data?.role));
  }, [user?.email || user?.photoURL]);
  return (
    <div className="navbar bg-slate-100">
      <div className="dropdown lg:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <>
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            {user.email || user?.photoURL ? (
              <li>
                <Link
                  to={`/dashboard/${
                    role === "admin"
                      ? "all-buyers"
                      : role === "buyer"
                      ? "my-orders"
                      : "add-product"
                  }`}
                  className=""
                >
                  Dashboard
                </Link>
              </li>
            ) : (
              ""
            )}
            <li>
              <Link to="/categories" className="">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/Blog" className="">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/login" className="">
                Log In
              </Link>
            </li>
            <li>
              <Link to="/signup" className="">
                Sign Up
              </Link>
            </li>
          </>
        </ul>
      </div>
      <Link to="/" className="lg:flex-1">
        <img src={img1} className="mr-3 h-6 sm:h-10" alt="..." />
        <div className="text-2xl font-bold">
          Aironex<span className="text-blue-600"> Computers</span>
        </div>
      </Link>
      <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
        <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 mr-10">
          <>
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            {user.email || user?.photoURL ? (
              <li>
                <Link
                  to={`/dashboard/${
                    role === "admin"
                      ? "all-buyers"
                      : role === "buyer"
                      ? "my-orders"
                      : "add-product"
                  }`}
                  className=""
                >
                  Dashboard
                </Link>
              </li>
            ) : (
              ""
            )}

            <li>
              <Link to="/blog" className="">
                Blog
              </Link>
            </li>
            {user?.email || user?.photoURL ? (
              <li>
                <button onClick={handleLogOut} className="">
                  Sign Out
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login" className="">
                  Log In
                </Link>
              </li>
            )}
          </>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
