import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Outlet } from "react-router-dom";
import NavSideBar from "../layouts/NavSideBar";

const Home = () => {
  return (
    <div className="flex flex-row mx-auto">
      <NavSideBar />
      <Outlet />
    </div>
  );
};

export default Home;
