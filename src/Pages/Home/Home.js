import React from "react";
import Categories from "../Categories/Categories";
import ExtraService from "./ExtraService/ExtraService";
import Header from "./Header/Header";

const Home = () => {
  return (
    <section>
      <Header></Header>
      <Categories></Categories>
      <ExtraService></ExtraService>
    </section>
  );
};

export default Home;
