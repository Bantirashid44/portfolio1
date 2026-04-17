import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        
        {[1,2,3].map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 shadow rounded"
          >
            <h3 className="font-bold">Project {item}</h3>
            <p>React / MERN App</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Projects;