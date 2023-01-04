import React, { useState } from "react";
import AnimatedDiv from "../AnimatedDiv/AnimatedDiv";
import Carousel from "../Carousel/Carousel";

const AboutMe = () => {
  const [cardIsActive, setCardIsActive] = useState(false);
  return (
    <AnimatedDiv>
      <div className="flex flex-col lg:flex-row items-center w-11/12 md:w-8/12 lg:w-9/12 mx-auto mt-24 sm:-mt-11 lg:mt-0 xl:gap-20">
        <div className="text-white lg:w-1/2">
          <h1 className="text-5xl font-bold xl:text-7xl lg:mt-28">Sobre Mi</h1>
          <p className="text-2xl font-light text-justify mt-3 mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            rerum quos delectus incidunt pariatur maiores tempora. Illum fugiat
            nemo, numquam nulla necessitatibus quasi ex. Facere deserunt saepe a
            voluptatum id. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div
          className="relative w-full lg:w-1/2 transition-all overflow-hidden lg:overflow-visible h-[300px] xl:h-[500px]"
          onMouseEnter={() => setCardIsActive(true)}
          onMouseLeave={() => setCardIsActive(false)}
        >
          <div
            className={`bg-backgroundLight w-32 h-52 xl:w-52 xl:h-72 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 lg:-translate-y-1/3 rotate-3 z-50 transition-all ${
              cardIsActive && "rotate-[14deg] translate-x-[40px]"
            }`}
          />
          <div
            className={`bg-gold w-32 h-52 xl:w-52 xl:h-72 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 transition-all ${
              cardIsActive ? " translate-y-[-60%]" : "lg:-translate-y-1/3"
            }`}
          />
          <div
            className={`bg-backgroundDarkest w-32 h-52 xl:w-52 xl:h-72 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2 lg:-translate-y-1/3 z-30 -rotate-3 transition-all ${
              cardIsActive && "-rotate-[14deg] translate-x-[-100%]"
            }`}
          />
        </div>
      </div>
      <div>
        <h1 className=" text-white text-center text-5xl font-bold xl:text-6xl lg:mt-16">
          Mis Skills
        </h1>
        <Carousel />
      </div>
    </AnimatedDiv>
  );
};

export default AboutMe;
