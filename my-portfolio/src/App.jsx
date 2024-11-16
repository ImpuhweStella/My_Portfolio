import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectSection />} />
        <Route path="/skills" element={<SkillSection />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
