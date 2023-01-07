import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const LinkButtons = () => {
  let location = useLocation();
  return (
    <div className="flex gap-5 mt-4 lg:mt-0 flex-col lg:flex-row text-center">
      <Link
        to={"/"}
        className={`${
          location.pathname === "/" ? "text-gold" : "hover:text-gray"
        }`}
      >
        Inicio
      </Link>
      <Link
        to={"/sobremi"}
        className={`${
          location.pathname === "/sobremi" ? "text-gold" : "hover:text-gray"
        }`}
      >
        Sobre Mi
      </Link>
      <Link
        to={"/proyectos"}
        className={`${
          location.pathname === "/proyectos" ? "text-gold" : "hover:text-gray"
        }`}
      >
        Proyectos
      </Link>
      <Link
        to={"/contactame"}
        className={`${
          location.pathname === "/contactame" ? "text-gold" : "hover:text-gray"
        }`}
      >
        Contactame
      </Link>
    </div>
  );
};

export default LinkButtons;
