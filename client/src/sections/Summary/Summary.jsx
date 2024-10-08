import React from "react";

import classes from "./Summary.module.scss";

const Summary = () => {
  return (
    <div className={classes.summary}>
      <section className={classes.content}>
        <h2>
          EasyHR was created to help HRD in managing work and employees in one
          platform easily. Provide the ultimate digital engagement experience
          from anywhere on the web.
        </h2>
        <div className={classes.bottom}>
          <img
            className={classes.bottom_box}
            src="/customlink.webp"
            alt="customlink"
          />
          <img src="/text.svg" alt="customlink" />
        </div>
      </section>
    </div>
  );
};

export default Summary;
