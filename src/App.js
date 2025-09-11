import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./component/Landing";
import Sections from "./component/Sections";
import About from "./component/About";
import Projects from "./component/Project";
import Skills from "./component/Skills";
import Internship from "./component/Internship"; 
import Contact from "./component/Contact";
import Resume from "./component/Resume";
import Education from "./component/Education";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Landing /><Sections /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/Education" element={<Education/>} />
       <Route path="/internship" element={< Internship />} />
       <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

    </Router>
  );
}

export default App;
