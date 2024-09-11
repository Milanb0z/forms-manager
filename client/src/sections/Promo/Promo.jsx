import React from "react";
import classes from "./Promo.module.scss";
import { Button } from "@ui";

const Promo = () => {
  return (
    <div className={classes.promo}>
      <h2>Ready to jump in?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, alias. Esse
        inventore cupiditate natus quae quam. Optio ab nostrum necessitatibus
        totam consequatur ea, quod praesentium hic sunt, enim aut repellat.
      </p>
      <Button>Get Started For Free</Button>
    </div>
  );
};

export default Promo;
