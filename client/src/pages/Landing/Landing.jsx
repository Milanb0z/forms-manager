import React from "react";
import classes from "./Landing.module.scss";

import HeroSection from "@sections/Hero/Hero";

import Footer from "@sections/Footer/Footer";
import Reviews from "@sections/Reviews/Reviews";
import FAQSection from "@sections/FAQ/FAQ";
import Promo from "@sections/Promo/Promo";
import FeaturesSection from "@sections/Features/Features";
import Steps from "@sections/Steps/Steps";
import Summary from "@sections/Summary/Summary";

const Landing = () => {
  return (
    <div className={classes.wrapper}>
      <div></div>
      <HeroSection />

      <Summary />
      <FeaturesSection />

      <Footer />
    </div>
  );
};

export default Landing;
