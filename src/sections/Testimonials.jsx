import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Swapnil Sir",
    role: "Guide / Mentor",
    feedback:
      "Sandip shows strong dedication towards full stack development. His understanding of .NET and MS-SQL, along with clean coding practices, makes him stand out among peers.",
  },
  {
    name: "Ravi Dandale",
    role: "Senior Developer",
    feedback:
      "Working with Sandip was smooth and productive. He handled backend development efficiently and ensured seamless frontend integration.",
  },
  {
    name: "Sanket Gadgade",
    role: "Tean Member",
    feedback:
      "Sandip is consistent, disciplined, and eager to learn. His problem-solving approach and clarity of concepts are impressive.",
  },
];

/* Animation Variants */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative bg-slate-900 py-28 px-6 md:px-16 text-white overflow-hidden"
    >
      {/* Soft Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Testimonials <span className="text-blue-500">& Feedback</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          What mentors and peers say about working with me
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{
              y: -6,
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8
                       hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10
                       transition-colors"
          >
            {/* Quote */}
            <div className="text-5xl text-blue-500 mb-4 leading-none">“</div>

            {/* Feedback */}
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              {item.feedback}
            </p>

            {/* Author */}
            <div className="border-t border-white/10 pt-4">
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-xs text-slate-400">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
