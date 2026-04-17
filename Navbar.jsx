import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-600 text-white p-4"
    >
      <input type="checkbox" id="menu" className="peer hidden" />

      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">MyPortfolio</h1>

        <label htmlFor="menu" className="text-2xl cursor-pointer md:hidden">
          ☰
        </label>

        <ul className="hidden md:flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      <ul className="hidden peer-checked:flex flex-col gap-4 mt-4 md:hidden">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;