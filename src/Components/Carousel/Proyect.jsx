import React from "react";
import { motion } from "framer-motion";
import { MdOutlineAirplay } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Proyect = ({ item }) => {
  return (
    <div className="h-48 min-w-[300px] max-w-[300px] bg-backgroundDarkest transition-all hover:scale-110 relative rounded-lg ">
      <div className="w-full h-full">
        <LazyLoadImage
          src={item.background}
          alt="background"
          className="h-48 min-w-[300px] max-w-[300px] rounded-lg"
          wrapperClassName="h-48 min-w-[300px] max-w-[300px] rounded-lg"
          effect="blur"
        />
      </div>
      <motion.div
        whileHover={{ border: "3px solid #FFF" }}
        transition={{ duration: "0.01" }}
        className={`flex flex-col-reverse p-3 absolute h-full w-full transition-all top-0 opacity-0 hover:opacity-100 bg-backgroundModal text-center rounded-lg`}
      >
        <p className="text-sm text-gold">{item.description}</p>
        <h1 className="text-xl">{item.title}</h1>
        <a
          href={item.webpage}
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 hover:text-gold transition-all mb-9 self-center cursor-pointer"
        >
          <MdOutlineAirplay size={50} />
        </a>
        <button></button>
      </motion.div>
    </div>
  );
};

export default Proyect;
