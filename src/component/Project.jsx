import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Online Event Management System",
    description: "A web platform to manage events, vendors, and payments.",
    link: "https://youreventsystemlive.com", // Replace with your real live link
    color: "#0077b6",
  },
  {
    name: "Crop Recommendation System",
    description: "AI-based crop prediction using soil and weather data.",
    link: "https://yourcroprecommendation.com",
    color: "#00b4d8",
  },
  {
    name: "Career Path Finder",
    description: "Helps users find best career paths based on skills & gaps.",
    link: "https://yourcareerpathfinder.com",
    color: "#0096c7",
  },
  {
    name: "JSpiders Project",
    description: "Project built during JSpiders training.",
    link: "https://yourjspiderproject.com",
    color: "#023e8a",
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
      <h1 style={{ textAlign: "center", marginBottom: "50px", color: "#0077b6" }}>
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
              background: "#fff",
              padding: "20px",
              width: "260px",
              borderRadius: "15px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
              borderTop: `5px solid ${project.color}`,
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => window.open(project.link, "_blank")}
          >
            <h2 style={{ color: project.color }}>{project.name}</h2>
            <p style={{ color: "#333", fontSize: "14px" }}>
              {project.description}
            </p>
            <button
              style={{
                marginTop: "10px",
                background: project.color,
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "8px 15px",
                cursor: "pointer",
              }}
            >
              View Live
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
