import React from "react";
import { FaCrown } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-black text-white flex flex-col items-center justify-center min-h-screen text-center p-6">
      {/* Animated Logo & Title */}
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="p-4 bg-yellow-500 text-black rounded-full shadow-xl"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaCrown className="text-5xl sm:text-6xl" />
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold ml-3 tracking-wide"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The Legends Club
        </motion.h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="text-lg sm:text-xl mt-4 italic text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        We Are Inevitable
      </motion.p>

      {/* Join Us Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Link
          to="joinUs"
          smooth={true}
          duration={800}
          className="px-6 py-3 bg-yellow-500 text-black text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition cursor-pointer"
        >
          Join Us
        </Link>
      </motion.div>
    </header>
  );
};

export default Home;
