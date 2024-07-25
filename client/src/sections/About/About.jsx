import React from "react";

import classes from "./About.module.scss";

const AboutSection = () => {
  return (
    <section className={classes.about}>
      <h2>We’ve here t help you build, manage & protect your wealth</h2>

      <div className={classes.grid}>
        <div className={classes.card}>1</div>
        <div className={classes.card}>2</div>
        <div className={classes.card}>3</div>
      </div>
    </section>
  );
};

export default AboutSection;
