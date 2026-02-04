import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import ParticlesBackground from "../components/ParticlesBackground";
import kapil from "../assets/s.jpg";

const About = () => {
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-80 blur-[120px]",
    "-bottom-10 -right-10 w-[400px] h-[400px] opacity-100 blur-[140px]",
    "top-1/2 left-1/2 w-[300px] h-[300px] opacity-100 blur-[100px] -translate-x-1/2 -translate-y-1/2",
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      <ParticlesBackground />
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#102f68] to-[#0c0330] animate-pulse ${c}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 py-20">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Profile Image */}
          <motion.div
            className="w-65 h-100 rounded-2xl overflow-hidden border border-white/20 shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={kapil}
              alt="Sandip Shrimangale"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              About <span className="text-indigo-400">Me</span>
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              I am{" "}
              <span className="text-white font-semibold">
                Sandip Shrimangale
              </span>
              , a passionate Full Stack Developer skilled in building modern web
              applications using React . I love creating clean, animated, and
              user-friendly interfaces with strong backend logic.
            </p>

            <p className="text-gray-400 mb-8">
              Currently a fresher, actively building real-world projects and
              continuously learning new technologies to become an industry-ready
              software developer.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center md:justify-start gap-5 text-3xl text-indigo-400">
              <FaReact title="React" />
              <FaNodeJs title="Node.js" />
              <FaJava title="Java" />
              <SiSpringboot title="Spring Boot" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
