import classes from "./TextArea.module.scss";

const TextArea = ({ name, value, label, ...inputProps }) => {
  return (
    <div className={classes.input}>
      {label ? (
        <label className={classes.label} htmlFor={name}>
          {label}
        </label>
      ) : null}

      <textarea
        name={name}
        className={classes.field}
        rows="4"
        cols="50"
        {...inputProps}
        value={value}
      ></textarea>
    </div>
  );
};

export default TextArea;
