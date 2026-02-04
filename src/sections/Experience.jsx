import React from "react";
import { motion } from "framer-motion";

const timelineItem = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative bg-slate-950 py-28 px-6 md:px-16 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Experience & <span className="text-blue-500">Journey</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Learning by building, practicing, and improving every day
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto z-10">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500/40 to-purple-500/40 md:-translate-x-1/2"></div>

        {/* Item 2 */}
        <motion.div
          variants={timelineItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-20 flex flex-col md:flex-row md:items-center"
        >
          <div className="hidden md:block md:w-1/2 md:pr-12 text-right">
            <h3 className="text-xl font-semibold text-blue-400">
              Junior .NET Developer at SWAPSOFT SGHITECH PVT.LTD
            </h3>
            <p className="text-sm text-slate-400">Mar-2025 – Present</p>
          </div>

          <div className="z-10 w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-slate-950 mx-auto md:absolute md:left-1/2 md:-translate-x-1/2"></div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mt-6 md:mt-0 md:w-1/2 md:pl-12 hover:border-purple-500/40 transition">
            <h3 className="text-lg font-semibold text-blue-400 md:hidden">
              Academic Projects & Practical Training
            </h3>
            <p className="text-sm text-slate-400 mb-3 md:hidden">2023 – 2024</p>

            <ul className="text-slate-300 text-sm space-y-2">
              <li>
                • Developed and maintained web applications using ASP.NET MVC /
                ASP.NET Core, C#, and Razor Views
              </li>
              <li>
                • Implemented CRUD operations and business logic using Entity
                Framework / ADO.NET with SQL Server
              </li>
              <li>
                • Designed and optimized database tables, stored procedures, and
                queries
              </li>
              <li>
                • Built responsive UIs using HTML, CSS, JavaScript, jQuery, and
                Bootstrap
              </li>
              <li>
                • Debugged, optimized, and improved application performance
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Item 3 */}
        <motion.div
          variants={timelineItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex flex-col md:flex-row md:items-center"
        >
          <div className="hidden md:block md:w-1/2 md:pr-12 text-right">
            <h3 className="text-xl font-semibold text-blue-400">
              Bachelors in Computer Science{" "}
            </h3>
            <p className="text-sm text-slate-400">2022 – 2025</p>
          </div>

          <div className="z-10 w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-slate-950 mx-auto md:absolute md:left-1/2 md:-translate-x-1/2"></div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mt-6 md:mt-0 md:w-1/2 md:pl-12 hover:border-blue-500/40 transition">
            <h3 className="text-lg font-semibold text-blue-400 md:hidden"></h3>
            <p className="text-sm text-slate-400 mb-3 md:hidden">2022 – 2025</p>

            <ul className="text-slate-300 text-sm space-y-2">
              <li>• Studied core subjects: DSA, DBMS, OS, CN</li>
              <li>• Built multiple academic & personal projects</li>
              <li>• Strong foundation in Java, SQL, and Web Development</li>
              <li>• Actively preparing for Full Stack Developer roles</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
