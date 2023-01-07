import React, { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { CgArrowsHAlt } from "react-icons/cg";
import Card from "./Card";
import htmlIcon from "../../Assets/Images/html.png";
import cssIcon from "../../Assets/Images/css.png";
import jsIcon from "../../Assets/Images/js.png";
import reactIcon from "../../Assets/Images/react.png";
import reduxIcon from "../../Assets/Images/redux.png";
import figmaIcon from "../../Assets/Images/figma.png";
import csharpIcon from "../../Assets/Images/csharp.png";
import sqlIcon from "../../Assets/Images/sql.png";
import photoshopIcon from "../../Assets/Images/photoshop.png";
import tailwindIcon from "../../Assets/Images/tailwind.png";
import bootstrapIcon from "../../Assets/Images/bootstrap.png";

const items = [
  {
    bgColor: "#e44d26",
    icon: htmlIcon,
  },
  {
    bgColor: "#379ad6",
    icon: cssIcon,
  },
  {
    bgColor: "#000",
    icon: tailwindIcon,
  },
  {
    bgColor: "#563d7c",
    icon: bootstrapIcon,
  },
  {
    bgColor: "#fccc00",
    icon: jsIcon,
  },
  {
    bgColor: "#fefefe",
    icon: reactIcon,
  },
  {
    bgColor: "#7046b2",
    icon: reduxIcon,
  },
  {
    bgColor: "#181818",
    icon: figmaIcon,
  },
  {
    bgColor: "#964d91",
    icon: csharpIcon,
  },
  {
    bgColor: "#4275cb",
    icon: sqlIcon,
  },
  {
    bgColor: "#001e36",
    icon: photoshopIcon,
  },
];

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
            className="flex gap-5 overflow-visible h-56 items-center"
          >
            {items.map((item, i) => {
              return <Card item={item} key={"Item " + i}/>;
            })}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 10 }}
      >
        <CgArrowsHAlt size={40} className="text-white mx-auto mb-10" />
      </motion.div>
    </>
  );
};

export default Carousel;
