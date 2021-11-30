import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";

import HomePage from "../HomePage/HomePage";
import Portfolio from "../Portfolio/Portfolio";

const Home = () => {
  return (
    <div className="">
      
      <HomePage />
      <About></About>

      <Education></Education>

      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
};

export default Home;
