import React from "react";
import classes from "./Button.module.scss";

const Button = ({ children, iconUrl, ...btnProps }) => {
  return (
    <button {...btnProps} className={classes.btn}>
      {iconUrl ? <img src={iconUrl} alt={children} /> : null}
      {children}
    </button>
  );
};

export default Button;
