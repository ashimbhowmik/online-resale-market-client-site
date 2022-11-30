import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Pages/Shared/Navber/Navber";

const main = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
};

export default main;
