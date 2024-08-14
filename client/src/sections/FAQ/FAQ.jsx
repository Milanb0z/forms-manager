import React from "react";

import classes from "./FAQ.module.scss";

const FAQSection = () => {
  return (
    <div className={classes.faq}>
      <h2>FAQ</h2>

      <div className={classes.quesitons}>
        <div className={classes.question}>
          <div className={classes.quesiton_header}>
            <h4>Lorem ipsum dolor sit.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
