import React, { useState } from "react";
import AnimatedDiv from "../AnimatedDiv/AnimatedDiv";
import Carousel from "../Carousel/Carousel";
import backgroundWave from "../../Assets/Images/wave.png"

const AboutMe = () => {
  const [cardIsActive, setCardIsActive] = useState(false);
  return (
    <AnimatedDiv className="overflow-hidden">
      <div className="flex flex-col max-w-[1200px] lg:flex-row items-center w-11/12 md:w-8/12 lg:w-9/12 mx-auto mt-24 sm:mt-24 lg:-mt-10 xl:gap-20 overflow-hidden">
        <div className="text-white lg:w-1/2 animate-in slide-in-from-left-full duration-300">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold  lg:mt-28">Sobre Mi</h1>
          <p className="text-xl xs:text-2xl font-light text-justify mt-3 mb-3">
            Lorem ipsum dolor it amet consectetur, adipisicing elit. Ducimus
            rerum quos delectus incidunt pariatur maiores tempora. Illum fugiat
            nemo, numquam nulla necessitatibus quasi ex. Facere deserunt saepe a
            voluptatum id. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div
          className="relative w-full lg:w-3/5 transition-all overflow-visible h-[300px] xl:h-[500px] animate-in slide-in-from-right-full duration-300"
          onMouseEnter={() => setCardIsActive(true)}
          onMouseLeave={() => setCardIsActive(false)}
        >
          <div
            className={`bg-backgroundLight w-28 h-40 xs:w-32 xs:h-52 xl:w-48 xl:h-72 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 lg:-translate-y-1/3 rotate-3 z-50 transition-all ${
              cardIsActive && "rotate-[14deg] translate-x-[40px]"
            }`}
          />
          <div
            className={`bg-gold w-28 h-40 xs:w-32 xs:h-52 xl:w-48 xl:h-72 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 transition-all ${
              cardIsActive ? " translate-y-[-60%]" : "lg:-translate-y-1/3"
            }`}
          />
          <div
            className={`bg-backgroundDarkest w-28 h-40 xs:w-32 xs:h-52 xl:w-48 xl:h-72 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2 lg:-translate-y-1/3 z-30 -rotate-3 transition-all ${
              cardIsActive && "-rotate-[14deg] translate-x-[-100%]"
            }`}
          />
        </div>
      </div>
      <div className="animate-in slide-in-from-bottom-full duration-300">
        <h1 className=" text-white text-center text-4xl font-bold lg:text-5xl lg:mt-16 ">
          Mis Skills
        </h1>
        <Carousel />
      </div>
      <img
        className="fixed w-full h-full object-cover bottom-0 left-0 -z-10 bg-right"
        src={backgroundWave}
        alt="foto olas"
      />
    </AnimatedDiv>
  );
};

export default AboutMe;
