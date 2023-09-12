import React from "react";
import Navbers from "./Navbers";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
    <Navbers/>

    <h1>Home</h1>
    <Outlet/>
    </>
  );
};

export default Home;
