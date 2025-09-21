import React from "react";
import { motion } from "framer-motion";
import img from './assest/ems1.jpg'; // imported local image
import crop from "./assest/cr.jpg";
import pathimg from "./assest/path.jpg"
import port from "./assest/bg-2.jpg"
import mern from "./assest/mern.jpg"

const projects = [
  {
    name: "Online Event Management System",
    description: "A web platform to manage events, vendors, and payments.",
    link: "https://github.com/AbinayaSrinivasann/online-Event-management-system",
    color: "#0077b6",
    background: img, // local image
    bgPosition: "center top", // crop/focus
  },
  {
    name: "Crop Recommendation System",
    description: "AI-based crop prediction using soil and weather data.",
    link: "https://github.com/AbinayaSrinivasann/Crop-Recommendation-System",
    color: "#00b4d8",
    background: crop,
    bgPosition: "center center",
  },
  {
    name: "Career Path Finder",
    description: "Helps users find best career paths based on skills & gaps.",
    link: "https://github.com/AbinayaSrinivasann/Carrier-Path-Finder",
    color: "#0096c7",
    background: pathimg,
    bgPosition: "center bottom",
  },
  {
    name: "JSpiders Project",
    description: "Project built during JSpiders training.",
    link: "https://yourjspiderproject.com",
    color: "#00b4d8",
    background: mern,
    bgPosition: "center center",
  },
  {
    name: "Portfolio",
    description: "Project built during JSpiders training.",
    link: "https://github.com/AbinayaSrinivasann/Portfolio",
    color: "#023e8a",
    background: port,
    bgPosition: "center center",
  },
];

export default function Projects() {
  return (
    <section
      style={{
        padding: "50px 20px",
        minHeight: "100vh",
        background: "#f0f4f8",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "50px",
          color: "#0077b6",
        }}
      >
        My Projects
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
          justifyContent: "center",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            style={{
              backgroundImage: `url(${project.background})`,
              backgroundPosition: project.bgPosition,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              padding: "20px",
              width: "260px",
              borderRadius: "15px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
              borderTop: `5px solid ${project.color}`,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              minHeight: "220px",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Gradient overlay for readability */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3))",
                borderRadius: "15px",
                zIndex: 1,
              }}
            ></div>

            <div style={{ zIndex: 2 }}>
              <h2
                style={{
                  color: "#fff",
                  marginBottom: index >= 2 ? "20px" : "10px",
                  textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
                }}
              >
                {project.name}
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "#f0f0f0",
                  textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
                }}
              >
                {project.description}
              </p>
            </div>

            {/* Button always at the bottom */}
            <button
              style={{
                marginTop: "auto",
                background: project.color,
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "8px 15px",
                cursor: "pointer",
                alignSelf: "center",
                zIndex: 2,
                boxShadow: "0 3px 6px rgba(0,0,0,0.3)",
              }}
              onClick={() => window.open(project.link, "_blank")}
            >
              Visit GitHub
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
