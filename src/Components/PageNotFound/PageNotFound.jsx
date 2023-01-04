import React from "react";
import image404 from "../../Assets/Images/404.png";
import AnimatedDiv from "../AnimatedDiv/AnimatedDiv";

const PageNotFound = () => {
  return (
    <AnimatedDiv>
      <div className="w-11/12 h-screen mx-auto flex flex-col justify-center items-center -mt-24">
        <img src={image404} alt="404 error" className="w-full sm:w-96" />
        <h1 className="text-white text-3xl md:text-4xl font-bold">
          404 Page not found
        </h1>
      </div>
    </AnimatedDiv>
  );
};

export default PageNotFound;
