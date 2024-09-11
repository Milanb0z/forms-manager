import React from "react";
import classes from "./Landing.module.scss";

import HeroSection from "@sections/Hero/Hero";
import Clients from "@sections/clients/Clients";
import AuthorSection from "@sections/Author/Author";
import AboutSection from "@sections/About/About";

import Footer from "@sections/Footer/Footer";
import Reviews from "@sections/Reviews/Reviews";
import FAQSection from "@sections/FAQ/FAQ";
import Promo from "@sections/Promo/Promo";

const Landing = () => {
  return (
    <div className={classes.wrapper}>
      <HeroSection />
      <Clients />
      <div className={classes.line}></div>
      <AboutSection />
      <AuthorSection />
      <div className={classes.line}></div>
      <Reviews />
      <FAQSection />
      <Promo />
      <Footer />
    </div>
  );
};

export default Landing;
