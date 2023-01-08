import React from "react";
import AnimatedDiv from "../AnimatedDiv/AnimatedDiv";
import Carousel from "../Carousel/Carousel";
import ongSomosMas from "../../Assets/Images/somosmas.png";
import superapi from "../../Assets/Images/superapi.png";
import todolist from "../../Assets/Images/todolist.png";
import galagcine from "../../Assets/Images/galagcine.png";
import thinknchoose from "../../Assets/Images/thinknchoose.png";
import simon from "../../Assets/Images/simon.png";
import portfolioviejo from "../../Assets/Images/portfolioviejo.png";

const itemsProgramming = [
  {
    title: "ONG Somos Más",
    description: "Proyecto Grupal",
    background: ongSomosMas,
    webpage: "https://github.com/SoraBeat/React-SXXI-T4-FORK",
  },
  {
    title: "SuperApi",
    description: "Proyecto Individual",
    background: superapi,
    webpage: "https://super-api-one.vercel.app/home",
  },
  {
    title: "TodoList",
    description: "Proyecto Individual",
    background: todolist,
    webpage: "https://todo-list-softtek.vercel.app/",
  },
  {
    title: "Cine GALAG",
    description: "Proyecto Grupal",
    background: galagcine,
    webpage: "https://github.com/SoraBeat/TP-INTEGRADOR",
  },
  {
    title: "Think N' Choose",
    description: "Proyecto Individual",
    background: thinknchoose,
    webpage: "https://thinknchoose.netlify.app/",
  },
  {
    title: "Simon",
    description: "Proyecto Individual",
    background: simon,
    webpage: "https://roa-lautaro-simon.netlify.app/",
  },
  {
    title: "Portfolio Viejo",
    description: "Proyecto Individual",
    background: portfolioviejo,
    webpage: "https://porfolio-roa-lautaro.netlify.app/#z1",
  },
];

const Projects = () => {
  return (
    <AnimatedDiv>
      <div className="text-white text-center lg:text-left transition-all flex flex-col gap-5 max-w-[1200px] mx-auto w-full lg:w-10/12 lg:mt-10">
        <h1 className="text-4xl md:text-5xl font-bold">Proyectos</h1>
        <div>
          <h2 className="text-2xl font-bold lg:text-3xl">
            Programacion <span className="text-gold">WEB</span>
            <Carousel items={itemsProgramming} />
          </h2>
        </div>
        <div>
          <h2 className="text-2xl font-bold lg:text-3xl">
            Diseño <span className="text-gold">WEB</span>
          </h2>
        </div>
        <div>
          <h2 className="text-2xl font-bold lg:text-3xl">
            Proyectos <span className="text-gold">VARIOS</span>
          </h2>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default Projects;
