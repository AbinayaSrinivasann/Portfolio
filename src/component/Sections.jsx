import React from "react";

const sections = [
  { id: "projects", title: "Projects", content: "Your project details here." },
  { id: "internship", title: "Internship", content: "Internship experience." },
  { id: "skills", title: "Skills", content: "React, Node, MongoDB, etc." },
  { id: "education", title: "Education", content: "Your education details." },
 
  { id: "contact", title: "Contact", content: "Email: you@example.com" }
];

export default function Sections() {
  return (
    <>
      {sections.map((section) => (
        <div key={section.id} id={section.id} className="section">
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </div>
      ))}
    </>
  );
}
