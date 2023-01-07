import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const LinkButtons = () => {
  let location = useLocation();
  return (
    <>
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
    </>
  );
};

export default LinkButtons;
