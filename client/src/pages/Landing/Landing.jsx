import React from "react";
import classes from "./Landing.module.scss";

import HeroSection from "@sections/Hero/Hero";
import Clients from "@sections/clients/Clients";
import AuthorSection from "@sections/Author/Author";
import AboutSection from "@sections/About/About";

const Landing = () => {
  return (
    <div className={classes.wrapper}>
      <HeroSection />
      <Clients />
      <div className={classes.line}></div>
      <AboutSection />
      <AuthorSection />
    </div>
  );
};

export default Landing;
