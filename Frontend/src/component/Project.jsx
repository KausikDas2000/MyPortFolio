import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";
import cover from "../assets/projects/Cover.png";
import arrangement from "../assets/projects/Arrangement.png";
import details from "../assets/projects/Details.png";
import portfolioCover from "../assets/projects/PortfolioCover.png";
import portfolioContact from "../assets/projects/PortfolioContact.png";
import travelCover from "../assets/projects/TravelCover.png";
import travelDestination from "../assets/projects/TravelDestination.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[8px] text-gray-500">
            My Recent Work
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            Featured <span className="text-gray-400">Projects</span>
          </h2>

          <div className="w-24 h-1 bg-black mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-600 max-w-3xl mx-auto mt-8 leading-8">
            These are some of my featured projects built using PHP, MySQL,
            Bootstrap, JavaScript, HTML, and CSS. They demonstrate my ability
            to develop complete web applications with responsive interfaces and
            efficient backend functionality.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 items-start">

          {/* Travel Management System */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden flex flex-col h-full">

            {/* Cover Image */}
            <img
              src={travelCover}
              alt="Travel Management System"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold">
                ✈️ Travel Management System
              </h3>

              <p className="text-gray-600 mt-5 leading-7 line-clamp-5">
                A complete Travel Management System developed using PHP, MySQL, Bootstrap,
                JavaScript, HTML, and CSS. The application allows users to explore travel
                destinations, browse tour packages, view package details, and submit
                booking inquiries through a responsive and user-friendly interface.
                It includes an admin panel for managing destinations, tour packages,
                and customer information with full CRUD functionality.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-6">

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  PHP
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  MySQL
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  Bootstrap
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  HTML5
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  CSS3
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  JavaScript
                </span>

              </div>

              {/* Screenshot */}
              <div className="mt-8">
                <img
                  src={travelDestination}
                  alt="Travel Destinations"
                  className="w-full h-48 object-cover rounded-2xl border shadow-md"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-5 mt-8">

                <a
                  href="https://github.com/KausikDas2000/Travel_Management_System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-gray-800 transition"
                >
                  <FaGithub />
                  Source Code
                </a>

                <a
                  href="#"
                  className="border-2 border-black px-6 py-3 rounded-full flex items-center gap-3 hover:bg-black hover:text-white transition"
                >
                  <FaExternalLinkAlt />
                  Project Details
                </a>

              </div>

            </div>

          </div>

          {/* Guitar In Soul */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden flex flex-col h-full">

            <img
              src={cover}
              alt="Guitar In Soul"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">

              <h3 className="text-4xl font-bold">
                🎸 Guitar In Soul
              </h3>

              <p className="text-gray-600 mt-5 leading-7 line-clamp-5">
                Guitar In Soul is a full-stack MERN application built for guitar
                enthusiasts to upload, discover, and manage guitar arrangements.
                Users can securely authenticate, upload PDF notation and audio
                previews, browse arrangements, save favorites, and enjoy a modern,
                responsive user experience powered by React, Node.js, Express,
                MongoDB Atlas, and Cloudinary.
              </p>









              <div className="flex flex-wrap gap-3 mt-8">

                <span className="px-4 py-2 bg-black text-white rounded-full">React</span>
                <span className="px-4 py-2 bg-black text-white rounded-full">Node.js</span>
                <span className="px-4 py-2 bg-black text-white rounded-full">Express</span>
                <span className="px-4 py-2 bg-black text-white rounded-full">MongoDB</span>
                <span className="px-4 py-2 bg-black text-white rounded-full">Tailwind</span>
                <span className="px-4 py-2 bg-black text-white rounded-full">JWT</span>
                <span className="px-4 py-2 bg-black text-white rounded-full">Cloudinary</span>

              </div>
              <a
                href="https://guitar-in-soul.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >


                <div className="mt-8">
                  <img
                    src={arrangement}
                    alt="Arrangements"
                    className="w-full h-48 object-cover rounded-2xl border shadow-md"
                  />
                </div>

              </a>

              <div className="flex gap-5 mt-8">

                <a
                  href="https://github.com/KausikDas2000/Guitar-In-Soul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-gray-800 transition"
                >
                  <FaGithub />
                  Source Code
                </a>

                <a
                  href="https://guitar-in-soul.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-black px-6 py-3 rounded-full flex items-center gap-3 hover:bg-black hover:text-white transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </div>






          {/* Portfolio Project */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden flex flex-col h-full">

            {/* Cover Image */}
            <img
              src={portfolioCover}
              alt="My Portfolio"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold">
                💼 My Portfolio
              </h3>

              <p className="text-gray-600 mt-5 leading-7 line-clamp-5">
                A modern full-stack developer portfolio built with React, Node.js,
                Express, MongoDB, and Tailwind CSS. The portfolio showcases my
                projects, technical skills, experience, resume, and provides a
                secure contact form for seamless communication. Designed with a
                clean, responsive interface and smooth user experience, it
                highlights my journey as a Full Stack Developer while following
                modern web development best practices.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-6">

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  React
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  Node.js
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  Express.js
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  MongoDB
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  Tailwind CSS
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  Vite
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  JWT
                </span>

                <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  Nodemailer
                </span>

              </div>

              {/* Screenshot */}
              <div className="mt-8">

                <img
                  src={portfolioContact}
                  alt="Portfolio Contact"
                  className="w-full h-48 object-cover rounded-2xl border shadow-md"
                />

              </div>

              {/* Buttons */}
              <div className="flex gap-5 mt-8">

                <a
                  href="https://github.com/KausikDas2000/MyPortFolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-gray-800 transition"
                >
                  <FaGithub />
                  Source Code
                </a>

                <a
                  href="https://kausik-fullstack.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-black px-6 py-3 rounded-full flex items-center gap-3 hover:bg-black hover:text-white transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </div>







        </div>

      </div>
    </section>
  );
};

export default Projects;