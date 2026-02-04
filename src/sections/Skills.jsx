import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpringboot,
  SiHibernate,
  SiSpring,
  SiMysql,
  SiPostman,
} from "react-icons/si";

/* ===================== DATA ===================== */

const categories = [
  {
    title: "Frontend Stack",
    subtitle: "UI / UX & Client Side",
    gradient: "from-cyan-400 to-blue-500",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
    ],
  },
  {
    title: "Backend Stack",
    subtitle: "Business Logic & APIs",
    gradient: "from-indigo-500 to-purple-600",
    skills: [
      { name: "C#", icon: <FaJava /> },
      { name: "ASP.NET Core", icon: <FaJava /> },
      { name: "MVC", icon: <SiHibernate /> },
      { name: "Entity Framework", icon: <SiSpringboot /> },
      { name: "WEB API", icon: <SiSpring /> },
    ],
  },
  {
    title: "Database",
    subtitle: "Data Persistence",
    gradient: "from-emerald-400 to-teal-500",
    skills: [{ name: "MS-SQL", icon: <SiMysql /> }],
  },
  {
    title: "Tools & Workflow",
    subtitle: "Development Essentials",
    gradient: "from-orange-400 to-red-500",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

/* ===================== ANIMATIONS ===================== */

const sectionVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const categoryVariant = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const skillVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

/* ===================== COMPONENT ===================== */

const SkillsPremium = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white relative overflow-hidden py-24"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[320px] h-[320px] bg-indigo-600/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[360px] h-[360px] bg-purple-600/20 blur-[180px] rounded-full" />
      </div>

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto px-6 space-y-20"
      >
        {/* Heading */}
        <motion.div
          variants={categoryVariant}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="text-indigo-400">Expertise</span>
          </h2>
          <p className="text-gray-400">
            A refined overview of my development skillset and workflow
          </p>
        </motion.div>

        {/* Categories */}
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            variants={categoryVariant}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10"
          >
            {/* Title */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold">{cat.title}</h3>
              <p className="text-gray-400 text-sm">{cat.subtitle}</p>
            </div>

            {/* Skills Pills */}
            <motion.div
              variants={sectionVariant}
              className="flex flex-wrap gap-4"
            >
              {cat.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={skillVariant}
                  whileHover={{ scale: 1.1 }}
                  className={`flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r ${cat.gradient} text-black font-semibold shadow-lg cursor-pointer`}
                >
                  <span className="text-xl">{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsPremium;
