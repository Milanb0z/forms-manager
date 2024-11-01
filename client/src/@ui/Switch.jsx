import classes from "./Switch.module.scss";

const Switch = ({ checked, onClickHandler, children }) => {
  return (
    <div className={classes.row}>
      <label className={classes.switch}>
        <input checked={checked} onChange={onClickHandler} type="checkbox" />
        <span className={`${classes.slider} ${classes.round}`}></span>
      </label>
      {children}
    </div>
  );
};

export default Switch;
