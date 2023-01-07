import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children, cardModal }) => {
  return (
    <div className="select-none w-screen h-screen overflow-x-hidden">
      <Header cardModal={cardModal}/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
