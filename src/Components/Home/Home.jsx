import React from "react";
import { Link } from "react-router-dom";
import fotoPose from "../../Assets/Images/fotoPose1.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Home = () => {
  return (
    <>
      <div className="w-11/12 text-white flex py-16 xl:py-10 px-14 xl:px-32 gap-20 items-center mx-auto">
        <div className="z-10 w-4/6 xl:w-1/2 2xl:w-5/12 mx-auto flex flex-col justify-center animate-in slide-in-from-left-full duration-300 overflow-hidden">
          <h1 className="text-5xl font-bold xl:text-7xl mt-28">ROA LAUTARO</h1>
          <h2 className="text-3xl font-bold">Frontend developer</h2>
          <p className="text-2xl font-light text-justify mt-3 mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            rerum quos delectus incidunt pariatur maiores tempora. Illum fugiat
            nemo, numquam nulla necessitatibus quasi ex. Facere deserunt saepe a
            voluptatum id. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Lorem ipsum dolor sit amet consectetur
          </p>
          <Link to={"/SobreMI"} className="w-fit">
            <div className="flex justify-start gap-2 items-center text-gold hover:text-darkGold cursor-pointer">
              <h2 className="text-3xl font-bold">Ver más</h2>
              <BsFillArrowRightCircleFill size={30} />
            </div>
          </Link>
          <div className="flex justify-start items-center mt-2 gap-1">
            <a
              href="https://www.facebook.com/E.Lautaro.Roa/"
              target="_blank"
              rel="noreferrer"
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
            >
              <AiFillLinkedin
                size={50}
                className="hover:scale-125 transition-all duration-300"
              />
            </a>
            <a href="mailto:lautaroa.lr@gmail.com">
              <SiGmail
                size={50}
                className="hover:scale-125 transition-all duration-300"
              />
            </a>
          </div>
        </div>
        <div className="w-1/2 lg:flex justify-center items-end hidden overflow-hidden">
          <img
            className="-z-20 w-full xl:w-96 mt-20 ml-20 animate-in slide-in-from-bottom-full duration-300"
            src={fotoPose}
            alt="foto pose"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
