import React from "react";

import classes from "./Input.module.scss";

const Input = ({ name, label, ...inputProps }) => {
  return (
    <div className={classes.input}>
      {label ? (
        <label className={classes.label} htmlFor={name}>
          {label}
        </label>
      ) : null}
      <input
        id={name}
        type="text"
        {...inputProps}
        name={name}
        className={classes.field}
      />
    </div>
  );
};

export default Input;
