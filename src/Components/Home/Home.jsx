import React from "react";
import { Link } from "react-router-dom";
import fotoPose from "../../Assets/Images/fotoPose1.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import profilePhoto from "../../Assets/Images/profileFoto.jpg";
import AnimatedDiv from "../AnimatedDiv/AnimatedDiv";

const Home = () => {
  return (
    <AnimatedDiv>
      <div className="w-full max-w-[1400px] lg:w-11/12 text-white flex flex-col-reverse lg:flex-row py-5 xl:py-10 px-5 sm:px-28 gap-10 xl:px-32 lg:gap-20 items-center mx-auto lg:mt-12 xl:mt-5">
        <div className="z-10 w-full lg:w-4/6 xl:w-1/2 2xl:w-5/12 mx-auto flex flex-col justify-center items-center lg:items-start animate-in slide-in-from-left-full duration-300 overflow-hidden">
          <h1 className="text-5xl font-bold xl:text-6xl">
            ROA LAUTARO
          </h1>
          <h2 className="text-3xl font-bold">Frontend developer</h2>
          <p className="text-2xl font-light text-justify mt-3 mb-3">
            Sean bienvenid@s a mi portfolio! Me llamo Lautaro y soy Técnico Superior en programación (UTN FRGP). Vivo en Buenos Aires Argentina. En este portfolio encontraran tanto sobre mi así como proyectos que he realizado a lo largo de este tiempo, siéntanse libres de explorarlo. Cualquier duda o comentario puedes contactarme a través de mis redes o en la pestaña de "Contactame".
            Saludos!
          </p>
          <Link to={"/sobremi"} className="w-fit">
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
        <div className="md:w-3/5 lg:flex justify-center items-end overflow-hidden">
          <img
            src={profilePhoto}
            alt="foto lautaro"
            className="w-48 h-48 lg:hidden rounded-full mx-auto animate-in zoom-in-0 duration-300"
          />
          <img
            className="w-96 ml-20 animate-in slide-in-from-bottom-full duration-300 hidden lg:block -z-10"
            src={fotoPose}
            alt="foto pose"
          />
        </div>

      </div>
    </AnimatedDiv>
  );
};

export default Home;
