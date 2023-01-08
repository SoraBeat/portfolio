import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedDiv from "../AnimatedDiv/AnimatedDiv";
import Carousel from "../Carousel/Carousel";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
import cv from "../../Assets/Documents/CvRoaLautaro.pdf";

import star from "../../Assets/Images/star.png";
import misLogros from "../../Assets/Images/mislogros.png";
import card1 from "../../Assets/Images/card1.png";
import card2 from "../../Assets/Images/card2.png";
import card3 from "../../Assets/Images/card3.png";

import htmlIcon from "../../Assets/Images/html.png";
import cssIcon from "../../Assets/Images/css.png";
import jsIcon from "../../Assets/Images/js.png";
import reactIcon from "../../Assets/Images/react.png";
import reduxIcon from "../../Assets/Images/redux.png";
import figmaIcon from "../../Assets/Images/figma.png";
import csharpIcon from "../../Assets/Images/csharp.png";
import sqlIcon from "../../Assets/Images/sql.png";
import photoshopIcon from "../../Assets/Images/photoshop.png";
import tailwindIcon from "../../Assets/Images/tailwind.png";
import bootstrapIcon from "../../Assets/Images/bootstrap.png";

const items = [
  {
    bgColor: "#e44d26",
    icon: htmlIcon,
  },
  {
    bgColor: "#379ad6",
    icon: cssIcon,
  },
  {
    bgColor: "#000",
    icon: tailwindIcon,
  },
  {
    bgColor: "#563d7c",
    icon: bootstrapIcon,
  },
  {
    bgColor: "#fccc00",
    icon: jsIcon,
  },
  {
    bgColor: "#fefefe",
    icon: reactIcon,
  },
  {
    bgColor: "#7046b2",
    icon: reduxIcon,
  },
  {
    bgColor: "#181818",
    icon: figmaIcon,
  },
  {
    bgColor: "#964d91",
    icon: csharpIcon,
  },
  {
    bgColor: "#4275cb",
    icon: sqlIcon,
  },
  {
    bgColor: "#001e36",
    icon: photoshopIcon,
  },
];

const AboutMe = ({ cardModal, setCardModal }) => {
  const [cardsIsActive, setCardsIsActive] = useState(false);

  useEffect(() => {
    return setCardModal({ card: 0, isActive: false });
  }, [setCardModal]);

  return (
    <AnimatedDiv className="overflow-hidden">
      <div className="flex flex-col max-w-[1200px] lg:flex-row items-center w-11/12 md:w-8/12 lg:w-9/12 mx-auto xl:gap-20 overflow-hidden mt-5 lg:mt-0">
        <div className="text-white lg:w-1/2 animate-in slide-in-from-left-full duration-300">
          <h1 className="text-4xl md:text-5xl font-bold  lg:mt-20">Sobre Mi</h1>
          <p className="text-xl xs:text-2xl font-light text-justify mt-3 mb-3">
            Lorem ipsum dolor it amet consectetur, adipisicing elit. Ducimus
            rerum quos delectus incidunt pariatur maiores tempora. Illum fugiat
            nemo, numquam nulla necessitatibus quasi ex. Facere deserunt saepe a
            voluptatum id. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Lorem ipsum dolor sit amet consectetur
          </p>
          <div className="w-fit">
            <a href={cv} download="Curriculum Vitae Roa Lautaro">
              <div className="bg-gold w-56 h-12 text-2xl font-bold rounded flex justify-center items-center transition-all hover:bg-darkGold px-3">
                <p>Descargar CV</p>
                <MdOutlineFileDownload size={40} />
              </div>
            </a>
          </div>
        </div>
        <div
          className="relative w-full lg:w-3/5 transition-all overflow-visible h-[300px] xl:h-[500px] animate-in slide-in-from-right-full duration-300 mt-10 lg:-mt-20 xl:mt-0"
          onMouseEnter={() => setCardsIsActive(true)}
          onMouseLeave={() => setCardsIsActive(false)}
        >
          {cardModal.isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setCardModal({ ...cardModal, isActive: false })}
              className="fixed top-0 left-0 bg-backgroundModal w-full h-full z-[60]"
            ></motion.div>
          )}
          {cardModal.isActive && (
            <button
              className="absolute top-0 right-0 xs:right-10 md:right-28 lg:right-10 xl:top-10 text-white z-[80]"
              onClick={() => setCardModal({ card: 0, isActive: false })}
            >
              <AiOutlineClose size={40} />
            </button>
          )}
          <motion.div
            className={`cursor-pointer bg-backgroundLight w-28 h-40 xs:w-32 xs:h-52 xl:w-48 xl:h-72 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 lg:-translate-y-1/3 rotate-3 transition-all ${
              cardsIsActive &&
              !cardModal.isActive &&
              "rotate-[14deg] translate-x-[40px] hover:scale-110"
            } ${
              cardModal.card === 1 && cardModal.isActive
                ? "z-[70] rotate-[0deg] scale-[1.5] translate-x-[-50px]"
                : "z-40"
            }`}
            onClick={(e) => {
              if (!cardModal.isActive) {
                setCardModal({ card: 1, isActive: true });
              }
            }}
          >
            <img src={card2} alt="card 2" className="w-full h-full" />
          </motion.div>
          <motion.div
            className={`cursor-pointer bg-gold w-28 h-40 xs:w-32 xs:h-52 xl:w-48 xl:h-72 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all ${
              cardsIsActive && !cardModal.isActive
                ? " translate-y-[-60%] rotate-2 hover:scale-110"
                : "lg:-translate-y-1/3 "
            } ${
              cardModal.card === 2 && cardModal.isActive
                ? "z-[70] rotate-[0deg] scale-[1.5] translate-x-[-50px]"
                : "z-30"
            }`}
            onClick={(e) => {
              if (!cardModal.isActive) {
                setCardModal({ card: 2, isActive: true });
              }
            }}
          >
            <img src={card3} alt="card 3" className="w-full h-full" />
          </motion.div>
          <motion.div
            className={`cursor-pointer bg-backgroundDarkest w-28 h-40 xs:w-32 xs:h-52 xl:w-48 xl:h-72 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2 lg:-translate-y-1/3 -rotate-3 transition-all  ${
              cardsIsActive &&
              !cardModal.isActive &&
              "-rotate-[15deg] translate-x-[-125%] hover:scale-110"
            } ${
              cardModal.card === 3 && cardModal.isActive
                ? "z-[70] rotate-[0.5deg] scale-[1.5] translate-x-[-47px]"
                : "z-20"
            }`}
            onClick={(e) => {
              if (!cardModal.isActive) {
                setCardModal({ card: 3, isActive: true });
              }
            }}
          >
            <img src={card1} alt="card 1" className="w-full h-full" />
          </motion.div>
          <img
            src={star}
            alt="star"
            className={`w-5 h-5 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2 lg:-translate-y-1/3 z-10 -rotate-3 transition-all ${
              cardsIsActive &&
              "-rotate-[180deg] translate-x-[-100px] xl:translate-x-[-150px] top-7 xl:top-20"
            }`}
          />
          <img
            src={star}
            alt="star"
            className={`w-5 h-5 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2 lg:-translate-y-1/3 z-30 -rotate-3 transition-all ${
              cardsIsActive &&
              "-rotate-[180deg] translate-x-[100px] xl:translate-x-[150px] top-7 xl:top-20"
            }`}
          />
          <img
            src={star}
            alt="star"
            className={`w-5 h-5 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2 lg:-translate-y-[10%] z-20 -rotate-3 transition-all ${
              cardsIsActive &&
              "rotate-[180deg] translate-x-[0px] -top-1 xl:top-12"
            }`}
          />
          <img
            src={misLogros}
            alt="mis logros"
            className={`w-1/3 lg:w-1/2 rounded-lg absolute  transform transition-all ${
              cardsIsActive
                ? "translate-y-[230px] translate-x-[100%] lg:translate-x-[50%] lg:translate-y-[250px] xl:translate-y-[400px] z-40"
                : "translate-y-[100px] translate-x-[100%] lg:translate-x-[50%] lg:translate-y-[200px] z-10"
            }`}
          />
        </div>
      </div>
      <div className="animate-in slide-in-from-bottom-full duration-300">
        <h1 className=" text-white text-center text-4xl font-bold lg:text-5xl lg:mt-10 ">
          Mis Skills
        </h1>
        <Carousel model="card" items={items} />
      </div>
    </AnimatedDiv>
  );
};

export default AboutMe;
