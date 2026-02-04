import React from "react";
import Ecom from "../assets/Ecom.jpg";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-24 px-6 md:px-16 text-white"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Mini full-stack projects built with modern technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-1 max-w-md mx-auto">
        {/* Mini Project Card */}
        <div
          className="group bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden 
                     border border-white/10 transition-all duration-500 
                     hover:-translate-y-3 hover:shadow-2xl"
        >
          <img
            src={Ecom}
            alt="Mini E-Commerce App"
            className="h-48 w-full object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
              Mini E-Commerce Application
            </h3>

            <p className="text-slate-300 text-sm mb-5">
              This is a complete E-Commerce web application developed using
              ASP.NET Core MVC and SQL Server. Features - User Registration &
              Login - Admin Panel - Product Management - Cart & Order - Role
              Based Authentication
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[".NET Core", "C#", "MS-SQL", "React", "Entity-Framework"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-slate-800 text-xs px-3 py-1 rounded-full border border-slate-700"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>

            {/* GitHub Link */}
            <a
              href="https://github.com/sandip191144/E-Commerce-Website.git"
              target="_blank"
              rel="noreferrer"
              className="block text-center bg-blue-600 hover:bg-blue-700 
                         transition rounded-lg py-2 text-sm font-medium"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
