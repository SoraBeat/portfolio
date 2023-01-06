import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="select-none w-screen h-screen overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
