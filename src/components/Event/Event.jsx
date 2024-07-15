import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Earth from "../Earth/Earth";
import "./Event.css";
import { FaArrowLeft } from "react-icons/fa";

export default function Event() {
  const [showEvent, setShowEvent] = useState(false);

  const handleShowEvent = () => {
    console.log("Show");
    setShowEvent(true);
  };
  const handleHideEvent = () => {
    console.log("Back");
    setShowEvent(false);
  };

  return (
    <div id="event" className="absolute bg-black text-white items-center justify-center p-8">
      <AnimatePresence>
        {!showEvent ? (
          <div className="md:flex block justify-center p-5 text-justify md:p-16 md:gap-20">
            <div className="hidden md:block">
              <img
                className="w-auto rounded-xl"
                src="https://images.nightcafe.studio/jobs/QjHFjQJFXSkk11LXBZ8m/QjHFjQJFXSkk11LXBZ8m--1--d2krz.jpg?tr=w-1600,c-at_max"
                alt="environment"
              />
            </div>
            <div className="md:w-8/12">
              <h1 className="text-justify">
                IRADA Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Modi reiciendis omnis officia natus in illo? Architecto minus
                quos fugiat, accusantium repellendus laboriosam cum excepturi,
                alias rerum nesciunt dolorum deserunt earum. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Tempora saepe animi
                aperiam praesentium, nihil eos doloribus reprehenderit fugit
                consequatur beatae placeat blanditiis dolores doloremque
                cupiditate aliquid? Provident sit tempore eos! Natus pariatur
                atque ullam esse aliquid, a iure facere. Sed recusandae nesciunt
                iure dolorem eveniet dicta tempore, consequuntur suscipit,
                maxime quasi dolore tempora unde reprehenderit accusamus illum
                deserunt earum cumque. Corrupti obcaecati iure libero eveniet,
                amet modi aut, laboriosam tempora odio pariatur asperiores sunt
                nam eligendi sit vero illum laborum architecto distinctio alias
                expedita excepturi! Error impedit placeat eveniet consequuntur.
              </h1>
              <div className="grid py-4">
                <motion.button
                  key="showButton"
                  onClick={handleShowEvent}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="rounded font-semibold bg-white px-4 py-2 text-black transition-colors"
                >
                  Show More
                </motion.button>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            key="eventContent"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center"
          >
            <div className="absolute top-4 left-4">
              <motion.button
                onClick={handleHideEvent}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-transparent text-white text-lg md:text-xl font-semibold relative z-10"
              >
                <span className="flex items-center">
                  <FaArrowLeft className="mr-2" /> Back
                </span>
              </motion.button>
            </div>
            <div className="earth-container">
              <Earth />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full h-full flex items-center justify-center"
            >
              <motion.h1
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center text-center text-7xl md:text-[160px] md:leading-[150px] font-bold text-image"
              >
                IRADA
              </motion.h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-center mt-8"
            >
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                More info about the event under the word "Irada".
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}