import {} from "react";

import classes from "./Radio.module.scss";

const Radio = ({ children, ...radioProps }) => {
  return (
    <label className={classes.radio}>
      {children}
      <input {...radioProps} type="radio" />
      <span className={classes.checkmark}></span>
    </label>
  );
};

export default Radio;
