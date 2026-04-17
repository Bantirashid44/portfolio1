import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="p-10 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p>
        I am a passionate web developer skilled in React, Node.js, and Tailwind CSS.
      </p>
    </motion.section>
  );
}

export default About;