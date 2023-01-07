import React from 'react'
import { motion } from 'framer-motion'

const Card = ({item}) => {
  return (
    <motion.div
    className={`h-40 w-[120px] min-w-[120px] rounded-lg flex justify-center items-center relative overflow-hidden`}
    
    whileHover={{
      scale: 1.2,
      transition: { duration: 0.1 },
    }}
  >
    <img src={item.icon} alt="carousel item" className="pointer-events-none" />
    <motion.div 
    className="absolute w-28 h-28 -z-10 rounded-full"
      style={{background:item.bgColor}}
      whileHover={{
        scale:2,
        transition:{duration:0.2}
      }}
    />
  </motion.div>
  )
}

export default Card