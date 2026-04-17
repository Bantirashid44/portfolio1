import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-4"
      >
        Hi, I'm Rashid 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg"
      >
        MERN Stack Developer
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded"
      >
        Hire Me
      </motion.button>
     <motion.div
  initial={{ x: -100 }}
  animate={{ x: 0 }}
  transition={{ duration: 0.5 }}
>
  Slide from left
</motion.div>

    </section>
    
  );
}

export default Hero;