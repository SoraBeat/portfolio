import React, { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { CgArrowsHAlt } from "react-icons/cg";
import Proyect from "./Proyect";

const Carousel = ({ model, items, widthOfCarousel }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useLayoutEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <div
        className={`max-w-[1200px] flex items-center ${
          widthOfCarousel && "w-10/12 lg:w-10/12 xl:w-1/2"
        } mx-auto`}
      >
        <motion.div ref={carousel} className="cursor-grab overflow-hidden mt-5">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-5 overflow-visible h-56 items-center"
          >
            {items.map((item, i) => {
              if (model === "card")
                return <Card item={item} key={"Item " + i} />;
              else return <Proyect item={item} key={"Item " + i} />;
            })}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 10 }}
      >
        <CgArrowsHAlt size={40} className="text-white mx-auto" />
      </motion.div>
    </>
  );
};

export default Carousel;
