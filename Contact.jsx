import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="p-10 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Name" className="border p-2" />
        <input type="email" placeholder="Email" className="border p-2" />
        <textarea placeholder="Message" className="border p-2"></textarea>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-blue-600 text-white py-2"
        >
          Send
        </motion.button>
      </form>
    </motion.section>
  );
}

export default Contact;