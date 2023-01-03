import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="select-none flex flex-col justify-between h-screen lg:block">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
