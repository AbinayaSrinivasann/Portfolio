import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Online Event Management System",
    description: "A web platform to manage events, vendors, and payments.",
    link: "https://github.com/AbinayaSrinivasann/online-Event-management-system",
    color: "#0077b6",
  },
  {
    name: "Crop Recommendation System",
    description: "AI-based crop prediction using soil and weather data.",
    link: "https://github.com/AbinayaSrinivasann/Crop-Recommendation-System",
    color: "#00b4d8",
  },
  {
    name: "Career Path Finder",
    description: "Helps users find best career paths based on skills & gaps.",
    link: "https://github.com/AbinayaSrinivasann/Carrier-Path-Finder",
    color: "#0096c7",
  },
  {
    name: "JSpiders Project",
    description: "Project built during JSpiders training.",
    link: "https://yourjspiderproject.com",
    color: "#00b4d8",
  },
  {
    name: "Portfolio",
    description: "Project built during JSpiders training.",
    link: "https://github.com/AbinayaSrinivasann/Portfolio",
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
              background: "#fff",
              padding: "20px",
              width: "260px",
              borderRadius: "15px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
              borderTop: `5px solid ${project.color}`,
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              flexDirection: "column",
              minHeight: "220px",
            }}
            onClick={() => window.open(project.link, "_blank")}
          >
            {/* Header and Description */}
            <div>
              <h2
                style={{
                  color: project.color,
                  marginBottom: index >= 2 ? "20px" : "10px", // extra space for last three
                }}
              >
                {project.name}
              </h2>
              <p style={{ color: "#333", fontSize: "14px" }}>
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
              }}
            >
              Download
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
