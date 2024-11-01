import {} from "react";
import classes from "./Button.module.scss";

const Button = ({
  children,
  outline,
  secondary,
  danger,
  iconUrl,
  ...btnProps
}) => {
  return (
    <button
      {...btnProps}
      className={`${classes.btn} ${secondary ? classes.secondary : ""} ${
        outline ? classes.outline : ""
      }  ${danger ? classes.danger : ""}`}
    >
      {iconUrl ? <img src={iconUrl} alt={children} /> : null}
      {children}
    </button>
  );
};

export default Button;
