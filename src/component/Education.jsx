import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "SSLC",
    school: "Avvaiyar Government Higher Secondary School, Dharmapuri",
    percentage: "87%",
    year: "2017",
    color: "#FFD700", // Gold
    fullDetails: "Completed SSLC with 87% in 2017 at Avvaiyar Government Higher Secondary School, Dharmapuri, Tamil Nadu.",
  },
  {
    degree: "HSC",
    school: "Pachamuthu Higher Secondary School, Dharmapuri",
    stream: "Maths-Bio",
    percentage: "90%",
    year: "2019",
    color: "#C0C0C0", // Silver
    fullDetails: "Completed HSC (Maths-Bio Stream) with 90% in 2019 at Pachamuthu Higher Secondary School, Dharmapuri, Tamil Nadu.",
  },
  {
    degree: "BE",
    school: "Government College of Engineering, Dharmapuri",
    stream: "CSE",
    cgpa: "8.0",
    classification: "First Class with Distinction",
    percentage: "80%",
    year: "2021-2025",
    color: "#CD7F32", // Bronze
    fullDetails: "B.E in Computer Science & Engineering, First Class with Distinction, CGPA: 8.0, Graduated in 2025 from Government College of Engineering, Dharmapuri.",
  },
];

export default function Education() {
  return (
    <section style={{ padding: "50px 20px", minHeight: "100vh", background: "#f9fafb" }}>
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>My Education Journey</h1>

      <div style={{ position: "relative", marginLeft: "20px" }}>
        {/* Vertical timeline line */}
        <div
          style={{
            position: "absolute",
            left: "20px",
            top: 0,
            bottom: 0,
            width: "4px",
            background: "#ddd",
          }}
        ></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{
              position: "relative",
              marginBottom: "50px",
              paddingLeft: "60px",
            }}
          >
            {/* Circle on timeline */}
            <div
              style={{
                position: "absolute",
                left: "12px",
                top: "5px",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background: edu.color,
                border: "2px solid #fff",
              }}
            ></div>

            {/* Card */}
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                position: "relative",
              }}
            >
              {/* Year & Percentage at top-right */}
              <div
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "20px",
                  textAlign: "right",
                  fontWeight: "bold",
                  color: "#555",
                }}
              >
                <div>{edu.year}</div>
                <div>{edu.percentage}</div>
              </div>

              <h2 style={{ margin: "0 0 10px 0" }}>{edu.degree}</h2>
              <p style={{ margin: "0 0 5px 0" }}>
                <strong>School/College:</strong> {edu.school}
              </p>
              {edu.stream && (
                <p style={{ margin: "0 0 5px 0" }}>
                  <strong>Stream:</strong> {edu.stream}
                </p>
              )}
              {edu.classification && (
                <p style={{ margin: "0 0 5px 0" }}>
                  <strong>Class/Division:</strong> {edu.classification}
                </p>
              )}
              {edu.cgpa && (
                <p style={{ margin: "0 0 5px 0" }}>
                  <strong>CGPA:</strong> {edu.cgpa}
                </p>
              )}
              {/* Full Details */}
              <p style={{ marginTop: "10px", fontStyle: "italic", color: "#555" }}>
                {edu.fullDetails}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
