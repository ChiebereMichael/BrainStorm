import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";

const Layout = ({ children }) => {
  return (
    <div className="">
      <div className="flex">
        <Sidebar/>
      </div>
      <div className="w-full ml-16 md-ml-56">
        <Navbar/>
        <Dashboard/>
      </div>
    </div>
  );
};

export default Layout;
