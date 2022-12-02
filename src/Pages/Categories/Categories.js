import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../Images/sam.png";
import img2 from "../../Images/phones.png";
import img3 from "../../Images/oneplus.png";

const Categories = () => {
  return (
    <section>
      <h1 className="text-4xl font-semibold leading-none text-center mt-10">
        Products Categories
      </h1>
      <div className="grid lg:grid-cols-3 m-10 lg:ml-60">
        <div className="card lg:w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img1} className="h-[300px] " alt="" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold">Sumsung</h2>
            <p>
              Samsung helps you discover a wide range of home electronics with
              cutting-edge technology including smartphones, tablets, TVs, home
              appliances and more...
            </p>
            <Link to="/category/road-bikes">
              <button className="btn btn-sm">Show More</button>
            </Link>
          </div>
        </div>
        <div className="card lg:w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img2} className="h-[300px] " alt="" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold">I Phone</h2>
            <p className="mb-3">
              The iPhone is one of the two largest smartphone platforms in the
              world alongside Android, and is a large part of the luxury market.
              The iPhone has generated
            </p>
            <Link to="/category/road-bikes">
              <button className="btn btn-sm">Show More</button>
            </Link>
          </div>
        </div>
        <div className="card lg:w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img3} className="h-[300px] " alt="" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold">One Plus</h2>
            <p className="mb-3">
              OnePlus Technology Co., Ltd., doing business as OnePlus, is a
              Chinese consumer electronics manufacturer headquartered in
              Shenzhen .
            </p>
            <Link to="/category/road-bikes">
              <button className="btn btn-sm">Show More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
