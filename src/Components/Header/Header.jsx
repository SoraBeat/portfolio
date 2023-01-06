import React, { useState } from "react";
import { useWindowSize } from "../../Hooks/useWindowSize";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import LinkButtons from "./LinkButtons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const windowSize = useWindowSize();

  return (
    <>
      <div className="sticky top-0 h-16 w-full text-white font-bold text-2xl z-50">
        {windowSize.width > 1024 && (
          <div className="relative flex justify-end items-center gap-10 px-10 py-3 transition-all bg-backgroundDark shadow-md">
            <LinkButtons />
          </div>
        )}

        {windowSize.width <= 1024 && (
          <div className="transition-all absolute right-0 top-0 w-72">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="absolute right-5 top-5"
            >
              {!isOpen ? (
                <AiOutlineMenu size={40} />
              ) : (
                <AiOutlineClose size={40} />
              )}
            </button>
            <div
              className={`absolute top-0 right-0 w-72 flex flex-col justify-end items-center gap-10 pt-16 pb-7 rounded-b-xl ${
                isOpen ? "opacity-100 bg-backgroundLight" : "opacity-0"
              } duration-75 -z-20`}
            >
              {isOpen && <LinkButtons />}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
