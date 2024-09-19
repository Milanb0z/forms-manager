import React from "react";
import classes from "./Promo.module.scss";
import { Button } from "@ui";

const Promo = () => {
  return (
    <div className={classes.promo}>
      <div className={classes.text}>
        <img src="/logo.svg" alt="" className={classes.icon} />

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
    </div>
  );
};

export default Promo;
