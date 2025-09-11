import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python"],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js", "Node.js"],
  },
  {
    category: "Tools & Platforms",
    skills: ["WordPress (Basic)", "Git", "GitHub", "Visual Studio Code"],
  },
  {
    category: "UI/UX Tools",
    skills: ["Basic knowledge of Figma"],
  },
  {
    category: "Databases",
    skills: ["SQL"],
  },
  {
    category: "Soft Skills",
    skills: [
      "Time Management",
      "Teamwork",
      "Communication",
      "Leadership (Team Lead in final year project), Placement Representative",
     
    ],
  },
 
];

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{
        padding: "50px 20px",
        minHeight: "100vh",
        background: "#f0f4f8",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "50px", color: "#0077b6" }}>
        My Skills 📚
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {skillCategories.map((item, index) => (
          <div key={index} style={{ position: "relative" }}>
            {/* Category Card */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              style={{
                padding: "25px 35px",
                borderRadius: "20px",
                background: "linear-gradient(135deg, #caf0f8, #ade8f4)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                cursor: "pointer",
                minWidth: "220px",
                textAlign: "center",
                transition: "all 0.3s ease",
                fontWeight: "600",
                color: "#03045e",
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <h3 style={{ margin: 0 }}>{item.category}</h3>
            </motion.div>

            {/* Popup / Tooltip */}
            <AnimatePresence>
              {hovered === index && (
                <motion.div
                  initial={{ opacity: 0, y: -15, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    top: "-10px",
                    left: "50%",
                    transform: "translateX(-50%) translateY(-100%)",
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "15px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    zIndex: 10,
                    width: "260px",
                  }}
                >
                  <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                    {item.skills.map((skill, i) => (
                      <li
                        key={i}
                        style={{
 padding: "8px 12px",
                        borderRadius: "12px",
                        border: "1px solid #ddd",
                        background: "#f7f9fc",
                        textAlign: "center",
                        fontWeight: "500",
                        color: "#333",
                        cursor: "default",
                        }}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
