import React, { useState } from "react";
import { useWindowSize } from "../../Hooks/useWindowSize";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import LinkButtons from "./LinkButtons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const windowSize = useWindowSize();

  return (
    <>
      <div className="h-16 w-full text-white font-bold text-2xl overflow-hidden">
        {windowSize.width > 1024 && (
          <div className="flex justify-end items-center gap-10 px-10 py-5 transition-all">
            <LinkButtons />
          </div>
        )}

        {windowSize.width <= 1024 && (
          <div className="transition-all absolute right-0 w-full sm:w-72 z-30 transition-all">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="absolute right-5 top-5 z-10"
            >
              {!isOpen ? (
                <AiOutlineMenu size={40} />
              ) : (
                <AiOutlineClose size={40} />
              )}
            </button>
            <div
              className={`relative flex flex-col justify-end items-center gap-10 pt-16 pb-7 rounded-b-xl ${
                isOpen ? "opacity-100 bg-backgroundLight" : "opacity-0"
              } duration-75`}
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
