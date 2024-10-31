import React from "react";

import classes from "./LaptopHero.module.scss";

const LaptopHero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.text}>
        <h1>lspot</h1>
      </div>
      <div className={classes.laptop}>
        <div className={classes.test}>
          <div className={classes.screen}>1</div>

          <img src="/laptop.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LaptopHero;
