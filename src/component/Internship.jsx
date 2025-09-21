import React, { useState, useEffect, useRef } from "react";

const Internship = () => {
  const [openCard, setOpenCard] = useState(null);
  const containerRef = useRef(null);

  const internships = [
    {
      name: "SmartCliff Learning Solution",
      img: "https://tse2.mm.bing.net/th/id/OIP.C9JFh1p6hs_hXnivcz7BpgHaHa?pid=Api&P=0&h=180",
      details: `Role: Frontend Developer Intern
Duration: JULY 2024 - AUG 2024
Location: Onsite
Tasks: Developed front-end web applications using HTML, CSS, JavaScript, and Bootstrap. Built responsive and dynamic web pages and gained hands-on experience with front-end frameworks.`,
    },
    {
      name: "JSpider",
      img: "https://www.topbengaluru.com/wp-content/uploads/2024/03/jspiders.jpg",
      details: `Role: MERN Stack Developer Intern
Duration: 6 months
Location: Onsite
Tasks: Backend APIs, Database Management, and frontend integration.`,
    },
  ];

  const handleCardClick = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpenCard(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section className="section internship-page">
      <h2 className="section-title">Internships</h2>
      <div className="internship-cards" ref={containerRef}>
        {internships.map((intern, index) => (
          <div
            key={index}
            className={`internship-card ${openCard === index ? "active" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <img src={intern.img} alt={intern.name} />
            <h6>{intern.name}</h6>

            <div className={`overlay ${openCard === index ? "show" : ""}`}>
              {intern.details.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internship;
