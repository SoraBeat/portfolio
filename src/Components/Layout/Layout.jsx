import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {
  return (
    <div className="select-none w-screen h-screen overflow-x-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
