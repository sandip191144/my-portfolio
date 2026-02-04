import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelors of Computer Science",
    institute: "Sir Parashurambhau College, Pune",
    duration: "2022 – 2025",
    details:
      "Focused on core computer science subjects including DSA, DBMS, OS, CN, and Software Engineering. Actively worked on academic and personal full stack projects.",
  },
];

const certifications = [
  {
    title: "ASP.NET Core Foundations Course",
    provider: "ScholarHat",
  },
  {
    title: "SQL Advanced",
    provider: "HackerRank",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const EducationCertifications = () => {
  return (
    <section
      id="education"
      className="relative bg-slate-950 py-32 px-6 md:px-16 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      {/* ================= EDUCATION ================= */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="relative z-10 max-w-5xl mx-auto mb-32"
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education <span className="text-blue-500">Background</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Academic foundation that shaped my problem-solving and development
            skills
          </p>
        </motion.div>

        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8
                       hover:border-blue-500/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              {edu.degree}
            </h3>
            <p className="text-sm text-slate-300">{edu.institute}</p>
            <p className="text-xs text-slate-400 mb-4">{edu.duration}</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              {edu.details}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* ================= CERTIFICATIONS ================= */}
      <motion.div
        id="certifications"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-blue-500">Training</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Structured learning and industry-relevant certifications
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6
                         hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10
                         transition-all"
            >
              <h3 className="text-lg font-semibold text-purple-400 mb-1">
                {cert.title}
              </h3>
              <p className="text-sm text-slate-300">{cert.provider}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationCertifications;
