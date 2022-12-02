import React from "react";
import Categories from "../Categories/Categories";
import Advertisement from "./Advertisement/Advertisement";
import Header from "./Header/Header";
import ExtraService from "./ExtraService/ExtraService";

const Home = () => {
  return (
    <section>
      <Header></Header>
      <Categories></Categories>
      <Advertisement></Advertisement>
      <ExtraService></ExtraService>
    </section>
  );
};

export default Home;
