import React from "react";
import classes from "./Landing.module.scss";

import HeroSection from "@sections/Hero/Hero";
import Clients from "@sections/clients/Clients";

import Footer from "@sections/Footer/Footer";
import Reviews from "@sections/Reviews/Reviews";
import FAQSection from "@sections/FAQ/FAQ";
import Promo from "@sections/Promo/Promo";
import FeaturesSection from "@sections/Features/Features";

const Landing = () => {
  return (
    <div className={classes.wrapper}>
      <HeroSection />
      <div className={classes.content}>
        <FeaturesSection />

        <Reviews />
        <FAQSection />
        <Promo />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
