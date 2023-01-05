import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="select-none flex flex-col justify-between h-screen lg:block lg:overflow-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
