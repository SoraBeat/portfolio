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
        to={"/SobreMI"}
        className={`${
          location.pathname === "/SobreMI" ? "text-gold" : "hover:text-gray"
        }`}
      >
        Sobre Mi
      </Link>
      <Link
        to={"/Proyectos"}
        className={`${
          location.pathname === "/Proyectos" ? "text-gold" : "hover:text-gray"
        }`}
      >
        Proyectos
      </Link>
      <Link
        to={"/Contactame"}
        className={`${
          location.pathname === "/Contactame" ? "text-gold" : "hover:text-gray"
        }`}
      >
        Contactame
      </Link>
    </>
  );
};

export default LinkButtons;
