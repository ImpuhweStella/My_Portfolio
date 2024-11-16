import React from "react";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutMe />
      <ProjectSection />
      <SkillSection />
      <ContactForm />

   
    </div>
  );
};

export default Home;
