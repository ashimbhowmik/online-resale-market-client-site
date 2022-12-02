import React from "react";

const Header = () => {
  return (
    <div>
      <section className="">
        <div className="dark:bg-sky-400">
          <div className="container flex flex-col items-center px-4 py-16 pb-16 mx-auto text-center lg:pb-32 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
              Choice your best product and buy
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
              Selling products online is more popular than ever. Here's how you
              can get on the e-commerce bandwagon.
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
              >
                Home
              </button>
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900"
              >
                Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
