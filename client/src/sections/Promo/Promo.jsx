import React from "react";
import classes from "./Promo.module.scss";
import { Button } from "@ui";

const Promo = () => {
  return (
    <section className={classes.promo}>
      <div className={classes.text}>
        <div className={classes.icon}></div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ad
          quae deserunt cupiditate mollitia culpa amet laborum omnis, labore
          aspernatur.
        </p>
        <Button>Get Started</Button>
      </div>
      <div className={classes.img}>
        <img src="/dash.jpg" alt="" />
      </div>
    </section>
  );
};

export default Promo;
