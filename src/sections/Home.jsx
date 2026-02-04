import React, { useEffect, useMemo } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { hover, motion, scale } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { href } from "react-router-dom";
import { a, filter } from "framer-motion/client";
import avatarImg from "../assets/Cartttoon.jpg";

const Home = () => {
  const socials = [
    { Icon: FaGithub, name: "GitHub", href: "https://github.com/sandip191144" },
    {
      Icon: FaLinkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sandip-shrimangale/",
    },
  ];

  const glowVariants = {
    initial: {
      scale: 1,
      y: 0,
      filter: "drop-shadow(0 0 0px rgba(0, 0, 0, 0))",
    },
    hover: {
      scale: 1.2,
      y: -3,
      filter:
        "drop-shadow(0 0 8px rgba(13, 88, 204, 0.9)) drop-shadow(0 0 18px rgba(16, 185, 129, 0.8))",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    tap: { scale: 0.9, y: 0, transition: { duration: 0.08 } },
  };

  const roles = useMemo(
    () => [
      "Software Developer",
      "Junior .NET Developer",
      "Associate Software Developer",
    ],
    [],
  );

  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  useEffect(() => {
    const current = roles[index];

    if (!deleting && subIndex <= current.length) {
      const timeout = setTimeout(() => {
        if (subIndex < current.length) {
          setSubIndex((v) => v + 1);
        } else {
          // pause briefly, then start deleting
          setDeleting(true);
        }
      }, 120);
      return () => clearTimeout(timeout);
    }

    if (deleting) {
      const timeout = setTimeout(() => {
        if (subIndex > 0) {
          setSubIndex((v) => v - 1);
        } else {
          setDeleting(false);
          setIndex((p) => (p + 1) % roles.length);
        }
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index, subIndex, deleting, roles]);

  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <ParticlesBackground />
      <div>
        {/* this both divs are for animation  */}

        <div
          className=" absolute -top-32 -left-32
      w-[70vw] sm:w-[50vw] md:w-[40vw]
      h-[70vw] sm:h-[50vw] md:h-[40vw]
      max-w-[500px] max-h-[500px]
      rounded-full
      bg-linear-to-r from-[#302b63] via-[#102f68] to-[#0c0330]
      opacity-30 sm:opacity-20 md:opacity-10
      blur-[100px] sm:blur-[130px] md:blur-[150px]
      animate-pulse"
        ></div>

        <div
          className=" absolute -bottom-0 -right-0
      w-[70vw] sm:w-[50vw] md:w-[40vw]
      h-[70vw] sm:h-[50vw] md:h-[40vw]
      max-w-[500px] max-h-[500px]
      rounded-full
      bg-linear-to-r from-[#302b63] via-[#242984] to-[#110743]
      opacity-30 sm:opacity-20 md:opacity-10
      blur-[100px] sm:blur-[130px] md:blur-[150px]
      animate-ping delay-300"
        ></div>
      </div>

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">
            <motion.div
              key={index}
              className="mb-3 text-xl sm:text-2xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span className="ml-1 inline-block w-[2px] h-7 bg-white animate-pulse"></span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-red-500"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hello, <br />
              <span>I'm Sandip Shrimangale </span>
            </motion.h1>
            <motion.p
              className="mt-6 text-white text-lg sm:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              A passionate .NET Developer with experience in building secure and
              scalable web applications using C# and ASP.NET technologies.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap sm:flex-row gap-4 justify-center items-center lg:justify-start"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="#projects"
                className="inline-block mt-8 px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
              >
                View My Projects{" "}
              </a>

              <a
                href={`${import.meta.env.BASE_URL}Sandip_Shrimangale_CV.pdf`}
                download
                className="inline-block mt-8 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
              >
                My Resume
              </a>
            </motion.div>
            <div className=" mt-10 flex - gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
              {socials.map(({ Icon, name, href }) => (
                <motion.a
                  href={href}
                  key={name}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-grey-300 "
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-[100px] opacity-30"></div>
          <motion.img
            src={avatarImg}
            alt="Sandip Shrimangale"
            className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
            style={{
              right: "-30px",
              width: "min(45vw,700px)",
              maxHeight: "90vh",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
