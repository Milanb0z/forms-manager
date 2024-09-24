import React from "react";
import classes from "./Promo.module.scss";
import { Button } from "@ui";

const Promo = () => {
  return (
    <div className={classes.promo}>
      <div className={classes.text}>
        <img src="/logo.svg" alt="" className={classes.icon} />

        <h1>Ready to Build Your First Form?</h1>
        <p>
          Sign up now and experience the easiest way to create and manage forms.
          It’s fast, intuitive, and powerful—start building today!
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
