import React, { useState } from "react";
import backgroundWave from "../../Assets/Images/wave.png";
import AnimatedDiv from "../AnimatedDiv/AnimatedDiv";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import fotoPose from "../../Assets/Images/fotoPose2.png";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Contactme = () => {
  const [value, setValue] = useState("");
  return (
    <AnimatedDiv>
      <div className="flex flex-col max-w-[1200px] lg:flex-row items-center w-11/12 md:w-8/12 lg:w-9/12 mx-auto xl:gap-20 overflow-hidden gap-20 lg:-mt-20">
        <div className="w-full lg:w-7/12 z-10 animate-in slide-in-from-left-full duration-300 overflow-hidden">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold  lg:mt-28 text-white mb-5">
            Contactame
          </h1>
          <h2 className="text-white text-2xl font-bold mb-2">Nombre</h2>
          <input
            type="text"
            className="h-9 w-full rounded-md mb-3 bg-backgroundDarkest p-2 text-white text-xl"
          />
          <h2 className="text-white text-2xl font-bold mb-2">Email</h2>
          <input
            type="text"
            className="h-9 w-full rounded-md mb-3  bg-backgroundDarkest p-2 text-white text-xl"
          />
          <h2 className="text-white text-2xl font-bold mb-2">Mensaje</h2>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="h-72 w-full rounded-md mb-5  bg-backgroundDarkest p-2 text-white text-xl"
          />
          <button
            type="submit"
            className="bg-gold text-white font-bold text-3xl rounded-lg w-full xs:w-44 h-12 hover:bg-darkGold"
          >
            Enviar
          </button>
        </div>
        <div className="lg:w-1/2 lg:flex-col justify-center items-center relative">
          <img
            src={fotoPose}
            alt="foto lautaro"
            className="lg:mt-72 xl:mt-48 hidden lg:inline -z-50 animate-in slide-in-from-bottom-full duration-300"
          />
          <div className="text-white flex flex-col xl:-mt-10">
            <div className="flex mx-auto lg:mx-0">
              <a
                href="https://www.facebook.com/E.Lautaro.Roa/"
                target="_blank"
                rel="noreferrer"
                className="z-10"
              >
                <AiFillFacebook
                  size={50}
                  className="hover:scale-125 transition-all duration-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/lautaro-elian-roa-mazzola-b30247209/"
                target="_blank"
                rel="noreferrer"
                className="z-10"
              >
                <AiFillLinkedin
                  size={50}
                  className="hover:scale-125 transition-all duration-300"
                />
              </a>
              <a href="mailto:lautaroa.lr@gmail.com" className="z-10">
                <SiGmail
                  size={50}
                  className="hover:scale-125 transition-all duration-300"
                />
              </a>
            </div>
            <p className="z-10 mt-2 text-lg text-center lg:text-left">+54 911-3280-7020</p>
            <p className="z-10 text-lg text-center lg:text-left">LautaRoa.lr@gmail.com</p>
            <img
              className="fixed w-full h-full object-cover bottom-0 left-0 z-0 bg-right"
              src={backgroundWave}
              alt="foto olas"
            />
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default Contactme;
