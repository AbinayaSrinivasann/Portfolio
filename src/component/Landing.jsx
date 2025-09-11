import React, { useState, useEffect } from "react";
import BoxGrid from "./BoxGrid";
import "../App.css";
import pick from './assest/ABI.jpg'
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Landing({ onNavigate }) {
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="landing">
      {/* Left Panel */}
      <div className="left-panel">
        <img src={pick} alt="Your Pic" className="profile-pic" />
        <div className="contact-info top">
          <a href="mailto:abinayasrinivasan196@gmail.com">
            abinayasrinivasan196@gmail.com
          </a>
        </div>
        <div className="contact-info bottom">
          <a
            href="https://linkedin.com/in/abinayasrinivasan196"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <br />
          <a
            href="https://github.com/AbinayaSrinivasann"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <FaGithub size={20} /> GitHub
          </a>
        </div>
      </div>

      {/* Right Panel */}
      <div className={`right-panel ${showGrid ? "shift-up" : ""}`}>
        <div className="name">ABINAYA</div>
        <div className="role">
          Full Stack Developer :- Aspiring MERN Stack Developer | Currently Learning Express.js at JSpiders | Soon Exploring MongoDB
        </div>

        {!showGrid && (
          <div className="about-icon center-right" onClick={() => setShowGrid(true)}>
            <img
              src="https://twemoji.maxcdn.com/v/latest/72x72/1f4ad.png"
              alt="Thought Bubble"
            />
            <span className="icon-text">About Me</span>
          </div>
        )}

        {showGrid && (
          <div className="about-content centered-content">
            <BoxGrid onNavigate={onNavigate} />
          </div>
        )}
      </div>
    </div>
  );
}
