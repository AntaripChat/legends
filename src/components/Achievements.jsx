import React from "react";
import { FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <section className="p-6 sm:p-10 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex flex-col items-center justify-center text-white">
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-wide text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Achievements
      </motion.h2>

      <motion.div
        className="p-6 bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-xl w-full max-w-lg text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex flex-col items-center">
          <motion.div
            className="p-4 bg-yellow-500 text-black rounded-full shadow-lg"
            whileHover={{ rotate: 15, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaTrophy className="text-4xl" />
          </motion.div>
          <p className="text-lg sm:text-xl mt-4 px-4 text-black leading-relaxed">
            <span className="font-bold text-red-400">15/03/2022</span>: Our unforgettable bike ride took a twist when we accidentally hit a chicken. 
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
