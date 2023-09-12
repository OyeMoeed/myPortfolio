import React from "react";

import Hero from "./Hero";
import Services from "./Services";
import Speciality from "./Speciality";
import Work from "./Work";
import Projects from "./Projects";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Speciality />
      <Work />
      <Projects />
    </div>
  );
};

export default HomePage;
