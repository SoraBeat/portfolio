import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { IoIosHelpCircle } from "react-icons/io";

const Layout = ({ children, cardModal }) => {
  const [helpIsActive, setHelpIsActive] = useState(false);
  return (
    <div className="select-none w-screen h-screen overflow-x-hidden">
      <Header cardModal={cardModal} />
      {children}
      <Footer />
      <>
        <motion.div
          className="text-white absolute right-5 bottom-2 hover:scale-110"
          onHoverStart={() => setHelpIsActive(true)}
          onHoverEnd={() => setHelpIsActive(false)}
        >
          <IoIosHelpCircle size={40} />
        </motion.div>
        <div
          className={`w-64 h-64 absolute right-5 bottom-16 bg-backgroundDark text-white rounded p-3 shadow-lg opacity-0 transition-all z-40 ${
            helpIsActive ? " opacity-100" : " hidden"
          }`}
        >
          <h2 className="text-center font-bold text-2xl">Sección ¡Ayuda!</h2>
          <p className="text-md">
            Bienvenido a la seccion de ayuda, sientete libre de explorar mi
            portfolio. No olvides que es interactivo, asi que utiliza el tocuh
            de tu pantalla o el mouse para descubrir funcionalidades nuevas.
            Cualquier consulta o inquietud no dudes en contactarme!
          </p>
        </div>
        <div
          className={`w-10 h-10 absolute right-7 bottom-14 bg-backgroundDark rounded rotate-[45deg] shadow-lg opacity-0 transition-all z-40 ${
            helpIsActive ? " opacity-100 " : "hidden"
          }`}
        />
      </>
    </div>
  );
};

export default Layout;
