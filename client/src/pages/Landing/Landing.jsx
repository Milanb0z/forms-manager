import React from "react";
import classes from "./Landing.module.scss";

import HeroSection from "@sections/Hero/Hero";

import Footer from "@sections/Footer/Footer";
import FeaturesSection from "@sections/Features/Features";
import Summary from "@sections/Summary/Summary";
import Header from "@sections/Header/Header";
import Submit from "@sections/Submit/Submit";

const LINKS = [
  { text: "Home", src: "/#" },
  { text: "Features", src: "/#features" },
  { text: "steps", src: "/#steps" },
  { text: "reviews", src: "/#reviews" },
  { text: "FAQ", src: "/#faq" },
];

const Landing = () => {
  console.log(import.meta.env.REACT_APP_BAKCEND_URL);
  return (
    <div className={classes.wrapper}>
      <div></div>
      <Header links={LINKS} />
      <HeroSection />

      <Summary />
      <FeaturesSection />
      <Submit />
      <Footer links={LINKS} />
    </div>
  );
};

export default Landing;
