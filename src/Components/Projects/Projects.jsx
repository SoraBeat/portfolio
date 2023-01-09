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

import portfolionuevodesign from "../../Assets/Images/portfolionuevodesign.png";
import portfolioviejodesign from "../../Assets/Images/portfolioviejodesign.png";
import noticiasdesign from "../../Assets/Images/noticiasdesign.png";
import superapidesign from "../../Assets/Images/superapidesign.png";
import ghostbrothersdesign from "../../Assets/Images/ghostbrothersdesign.png";

import dimensionkawalopus from "../../Assets/Images/dimensionkawalopus.png";
import bensacrifice from "../../Assets/Images/bensacrifice.png";
import dontbreakit from "../../Assets/Images/dontbreakit.png";
import foodrun from "../../Assets/Images/foodrun.png";
import closeyoureyes from "../../Assets/Images/closeyoureyes.png";

const itemsProgramming = [
  {
    title: "ONG Somos Más",
    description: "Proyecto Grupal",
    background: ongSomosMas,
    webpage: "https://react-sxxi-t4-fork-b380x9tpd-yonabordon.vercel.app/",
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

const itemsDesign = [
  {
    title: "Portfolio Nuevo",
    description: "Proyecto Individual",
    background: portfolionuevodesign,
    webpage:
      "https://www.figma.com/file/JBXjCFSf6MbsYJUH9c6Kxx/Untitled?node-id=12%3A2&t=jGfieZSkxKlTUgWK-1",
  },
  {
    title: "Portfolio Viejo",
    description: "Proyecto Individual",
    background: portfolioviejodesign,
    webpage:
      "https://www.figma.com/file/MrrnhyZLZrm445ylmZKHLS/Portafolio-Web?node-id=0%3A1&t=bEIx63Iy84BcWVkH-1",
  },
  {
    title: "Pagina noticias",
    description: "Proyecto Individual",
    background: noticiasdesign,
    webpage:
      "https://www.figma.com/file/Tc3ZSYwuxjNcbR3ZyjPwWZ/Maquetado-Blog?node-id=0%3A1&t=i7L6hcPIsgmJGPXr-1",
  },
  {
    title: "SuperApi",
    description: "Proyecto Individual",
    background: superapidesign,
    webpage:
      "https://www.figma.com/file/nsKbSEyUK5j0a8oWE3hTFK/Untitled?node-id=0%3A1&t=iLfwUnZziBgLSkJE-1",
  },
  {
    title: "Ghost Brothers",
    description: "Proyecto Individual",
    background: ghostbrothersdesign,
    webpage:
      "https://www.figma.com/file/eCbVHY4CExQQnNVbp5Bdhb/Ghost-Brothers?node-id=0%3A1&t=eYRjK5uWLOzxmj4w-1",
  },
];

const JuegosVarios = [
  {
    title: "Dimension Kawalopus",
    description: "Proyecto Grupal",
    background: dimensionkawalopus,
    webpage: "https://big-maki.itch.io/dimension-kawalopus",
  },
  {
    title: "Ben´s Sacrifice",
    description: "Proyecto Individual",
    background: bensacrifice,
    webpage: "https://cutehatgames.itch.io/bens-sacrifice",
  },
  {
    title: "Dont BREAK it",
    description: "Proyecto Individual",
    background: dontbreakit,
    webpage: "https://cutehatgames.itch.io/dont-break-it",
  },
  {
    title: "Food RUN",
    description: "Proyecto Individual",
    background: foodrun,
    webpage: "https://cutehatgames.itch.io/food-run",
  },
  {
    title: "Close Your Eyes",
    description: "Proyecto Grupal",
    background: closeyoureyes,
    webpage: "https://cutehatgames.itch.io/close-your-eyes",
  },
];

const Projects = () => {
  return (
    <AnimatedDiv>
      <div className="text-white text-center lg:text-left transition-all flex flex-col gap-5 max-w-[1200px] mx-auto w-full lg:w-10/12 mt-5 lg:mt-10">
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
            <Carousel items={itemsDesign} />
          </h2>
        </div>
        <div>
          <h2 className="text-2xl font-bold lg:text-3xl">
            Juegos <span className="text-gold">VARIOS</span>
          </h2>
          <Carousel items={JuegosVarios} />
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default Projects;
