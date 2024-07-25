import React from "react";
import classes from "./Landing.module.scss";

import HeroSection from "@sections/Hero/Hero";
import Clients from "@sections/clients/Clients";

const Landing = () => {
  return (
    <div className={classes.wrapper}>
      <HeroSection />
      <Clients />
    </div>
  );
};

export default Landing;
