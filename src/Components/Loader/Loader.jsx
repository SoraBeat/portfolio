import React from "react";
import AnimatedDiv from "../AnimatedDiv/AnimatedDiv";
import "./Loader.css";

const Loader = () => {
  return (
    <AnimatedDiv>
      <div className="w-screen flex-col h-screen flex justify-center items-center gap-5">
        <h1 className="text-white text-4xl font-bold">Cargando</h1>
        <span className="loader"></span>
      </div>
    </AnimatedDiv>
  );
};

export default Loader;
