import React from "react";

import classes from "./Hero.module.scss";
import Header from "@sections/Header/Header";
import { Button } from "@ui";

const HeroSection = () => {
  return (
    <div className={classes.hero}>
      <section className={classes.content}>
        <Header />
        <div className={classes.main}>
          <div className={classes.left}>
            <h1>Boost productivity with our powerful BlazeX solution.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              aliquid animi aut eum perspiciatis voluptatum laudantium odio
              aspernatur voluptas dolorem!
            </p>

            <div className={classes.actions}>
              <Button>Create Form</Button>
              <Button outline>Get Demo</Button>
            </div>

            <div className={classes.reviews}>
              <div className={classes.profiles}>
                <div className={classes.profiles_icon}>1</div>
                <div className={classes.profiles_icon}>2</div>
                <div className={classes.profiles_icon}>3</div>
                <div className={classes.profiles_icon}>4</div>
              </div>
              <div className={classes.reviews_text}>
                <div className={classes.row}>
                  <h2>4.8</h2>
                  <div className={classes.reviews_stars}>
                    <img src="/star.svg" alt="star" />
                    <img src="/star.svg" alt="star" />
                    <img src="/star.svg" alt="star" />
                    <img src="/star.svg" alt="star" />
                    <img src="/star.svg" alt="star" />
                  </div>
                </div>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
          <div className={classes.screen}>
            <img src="/dash.jpg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
