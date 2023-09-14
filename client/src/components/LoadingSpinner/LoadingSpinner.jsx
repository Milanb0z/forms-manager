import React from "react";

import classes from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={classes.loading}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default LoadingSpinner;
