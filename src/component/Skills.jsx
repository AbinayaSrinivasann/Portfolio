import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaWordpress,
  FaUsers,
} from "react-icons/fa";

const skillCategories = [
  {
    category: "Languages",
    icon: <FaPython size={40} color="#306998" />,
    skills: ["Python"],
    gradient: "linear-gradient(135deg, #ffe066,rgb(214, 196, 131))",
  },
  {
    category: "Web Development",
    icon: <FaHtml5 size={40} color="#e34f26" />,
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js", "Node.js"],
    gradient: "linear-gradient(135deg, #90e0ef, #48cae4)",
  },
  {
    category: "Tools & Platforms",
    icon: <FaGitAlt size={40} color="#f1502f" />,
    skills: ["WordPress (Basic)", "Git", "GitHub", "VS Code"],
    gradient: "linear-gradient(135deg, #cdb4db, #9b5de5)",
  },
  {
    category: "UI/UX Tools",
    icon: <FaFigma size={40} color="#f24e1e" />,
    skills: ["Figma (Basic Knowledge)"],
    gradient: "linear-gradient(135deg, #ffb4a2, #e5989b)",
  },
  {
    category: "Databases",
    icon: <FaDatabase size={40} color="#0077b6" />,
    skills: ["SQL"],
    gradient: "linear-gradient(135deg, #90be6d, #43aa8b)",
  },
  {
    category: "Soft Skills",
    icon: <FaUsers size={40} color="#ff006e" />,
    skills: ["Time Management", "Teamwork", "Communication", "Leadership"],
    gradient: "linear-gradient(135deg,rgb(169, 88, 125),rgb(153, 91, 144))",
  },
];

export default function Skills() {
  // store the index of the currently flipped card (null = none)
  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      style={{
        padding: "50px 20px",
        minHeight: "100vh",
        background: "#f0f4f8",
      }}
    >
      <h1
        style={{ textAlign: "center", marginBottom: "50px", color: "#0077b6" }}
      >
        My Skills 💡
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
          <motion.div
            key={index}
            style={{ perspective: "1000px" }}
            onClick={() => toggleFlip(index)} // 👈 click/tap to flip
          >
            <motion.div
              animate={{ rotateY: flippedIndex === index ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "20px",
                cursor: "pointer",
                transformStyle: "preserve-3d",
                position: "relative",
              }}
            >
              {/* Front Side */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  background: item.gradient,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  backfaceVisibility: "hidden",
                }}
              >
                {item.icon}
                <h3 style={{ marginTop: "15px", textAlign: "center" }}>
                  {item.category}
                </h3>
              </div>

              {/* Back Side */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  background: "#fff",
                  color: "#333",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  padding: "15px",
                  fontSize: "14px",
                }}
              >
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {item.skills.map((skill, i) => (
                    <li
                      key={i}
                      style={{
                        margin: "5px 0",
                        padding: "6px 10px",
                        borderRadius: "12px",
                        background: "#f0f4f8",
                        width: "100%",
                        textAlign: "center",
                        fontWeight: "500",
                      }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
