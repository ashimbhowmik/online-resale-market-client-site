import React from "react";

const ExtraService = () => {
  return (
    <section className="py-6 ">
      <div>
        <h1 className="text-center text-4xl mb-12 mt-10 font-bold">
          View Products Image
        </h1>
      </div>
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src="https://www.gizmochina.com/wp-content/uploads/2020/03/OnePlus-8-1.jpg"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i0.wp.com/www.mobilebd.co/wp-content/uploads/2020/12/OnePlus-Nord-Official-image-550x550.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-plus-colors.png"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://classyprice.com.bd/images/Apple-iPhone-10-Plus.webp"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://m-cdn.phonearena.com/images/review/5308-wide-two_940/Apple-iPhone-13-Pro-Max-vs-OnePlus-10-Pro"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://media.wired.com/photos/5bcf71b1dc9f582b9e25a8d8/1:1/w_1200,h_1200,c_limit/iphone2_featured.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://www.mobiledokan.com/wp-content/uploads/2020/02/Samsung-Galaxy-S20.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://static.gadgetandgear.com/tmp/product/20220117_1642398692_412261.png"
        />
        <img
          src="https://static.gadgetandgear.com/tmp/product/20220216_1645002302_201026.png"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
        />
      </div>
    </section>
  );
};

export default ExtraService;
