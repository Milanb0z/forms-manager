import React from "react";
import classes from "./Landing.module.scss";

import HeroSection from "@sections/Hero/Hero";
import Clients from "@sections/clients/Clients";
import AuthorSection from "@sections/Author/Author";
import AboutSection from "@sections/About/About";

import Footer from "@sections/Footer/Footer";

const Landing = () => {
  return (
    <div className={classes.wrapper}>
      <HeroSection />
      <Clients />
      <div className={classes.line}></div>
      <AboutSection />
      <AuthorSection />
      <div className={classes.line}></div>

      <Footer />
    </div>
  );
};

export default Landing;
