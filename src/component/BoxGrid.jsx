import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const items = [
  { label: "project", path: "/projects", img: "https://tse4.mm.bing.net/th/id/OIP.ngGPgpdbtgabnmInL3k-0QHaE8?pid=Api&P=0&h=180" },
  { label: "Internship", path: "/internship", img: "https://tse3.mm.bing.net/th/id/OIP.FDcwTMKcQEOB87NQJob2vAHaE8?pid=Api&P=0&h=180" },
  { label: "Skills", path: "/skills", img: "https://tse1.mm.bing.net/th/id/OIP._mxQM93t_SRxxFbTZ4opVgHaEv?pid=Api&P=0&h=180" },
  { label: "education", path: "/Education", img: "https://tse3.mm.bing.net/th/id/OIP.6YBgfdymw4lDYDOluCqFZAHaFj?pid=Api&P=0&h=180" },
  { label: "Creative Contact", path: "/contact", img: "https://tse4.mm.bing.net/th/id/OIP.RIrrx1OEb4i7Oumx7ZohvgHaFj?pid=Api&P=0&h=180" },
  { label: "Resume", path: "/resume", img: "https://tse1.mm.bing.net/th/id/OIP.cqxfNCjlipsZMCKo4qqliwHaEk?pid=Api&P=0&h=180" },
];

export default function BoxGrid() {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.label === "Resume") {
      window.open("/files/Resume.pdf", "_blank");
    } else {
      navigate(item.path);
    }
  };

  return (
    <div className="grid-container">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="grid-box"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick(item)}
        >
          <img src={item.img} alt={item.label} className="grid-image" />
          <div className="grid-label">{item.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
