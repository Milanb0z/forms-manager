import React from "react";

import classes from "./Summary.module.scss";

const Summary = () => {
  return (
    <div className={classes.summary}>
      <section className={classes.content}>
        <h2>
          Using our custom link feature makes it easier for users to find and
          complete forms quickly, ensuring a smooth experience for everyone
          involved in the process!
        </h2>
        <div className={classes.bottom}>
          <img
            className={classes.bottom_box}
            src="/assets/customlink.webp"
            alt="customlink"
          />
          <img src="/icons/text.svg" alt="customlink" />
        </div>
      </section>
    </div>
  );
};

export default Summary;
