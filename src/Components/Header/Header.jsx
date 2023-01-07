import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../Hooks/useWindowSize";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import LinkButtons from "./LinkButtons";
import logo from "../../Assets/Images/logo-light.png";

const Header = ({ cardModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const windowSize = useWindowSize();

  return (
    <>
      <div
        className={`max-w-[1300px] lg:mt-3 sticky top-0 h-16 w-11/12 mx-auto text-white font-bold text-2xl z-40 transition-all bg-backgroundDark ${
          cardModal.isActive && "opacity-0"
        }`}
      >
        {windowSize.width > 1024 && (
          <div className="relative flex justify-between items-center gap-10 px-10 py-3 transition-all">
            <Link to={"/"}>
              <div className="flex items-center gap-1 hover:scale-110 transition-all">
                <img src={logo} alt="logo" className="h-10" />
                <p>Lauta Roa</p>
              </div>
            </Link>
            <LinkButtons />
          </div>
        )}

        {windowSize.width <= 1024 && (
          <div className="transition-all absolute right-0 top-0 w-72">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="absolute right-0 top-5"
            >
              {!isOpen ? (
                <AiOutlineMenu size={40} />
              ) : (
                <AiOutlineClose size={40} />
              )}
            </button>
            <div
              className={`fixed top-0 right-0 w-72 flex flex-col justify-end items-center gap-10 pt-16 pb-7 rounded-b-xl ${
                isOpen ? "opacity-100 bg-backgroundLight" : "opacity-0"
              } duration-75 -z-20`}
            >
              <Link to={"/"} className="absolute top-5 left-30">
                <div className="flex items-center gap-1 hover:scale-110 transition-all">
                  <img src={logo} alt="logo" className="h-10" />
                </div>
              </Link>
              {isOpen && <LinkButtons />}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
