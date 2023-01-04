import React, { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { CgArrowsHAlt } from "react-icons/cg";

const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useLayoutEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <div className="max-w-[1200px] flex items-center w-10/12 lg:w-10/12 xl:w-1/2 mx-auto">
        <motion.div ref={carousel} className="cursor-grab overflow-hidden mt-5">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-10 overflow-visible h-56 items-center"
          >
            {items.map((item, i) => {
              return (
                <motion.div
                  className="h-40 min-w-[120px] bg-gold rounded-lg"
                  key={"Item " + i}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.1 },
                  }}
                >
                  <img src={item.background} alt="carousel item" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      <motion.div initial={{opacity:1}} animate={{opacity:0}} transition={{delay:10}}>
        <CgArrowsHAlt size={40} className="text-white mx-auto mb-10" />
      </motion.div>
    </>
  );
};

export default Carousel;
