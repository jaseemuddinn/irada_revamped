import React from "react";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};

function Landing() {
  return (
    <div className="h-screen bg-black flex justify-center items-center">
       <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 2.05,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl p-8"
    >
      <Background />
      
    </motion.div>
      <div className="max-w-7xl">
        <h1 className="text-white md:left-20 right-20 absolute top-20 md:text-6xl text-3xl leading-20 ">SAVING THE TREE, <br />SAVING THE WORLD</h1>
        <h1 className="transition-colors absolute bottom-20 right-20 text-justify text-7xl md:text-[160px] md:leading-[150px] font-bold text-white">
          THE <br /> WORLD <br />
          SAVING
        </h1>
      </div>
    </div>
  );
}

export default Landing;