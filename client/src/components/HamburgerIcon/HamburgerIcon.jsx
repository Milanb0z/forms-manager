import classes from "./HamburgerIcon.module.scss";

const HamburgerIcon = ({ isActive, onClickHandler }) => {
  return (
    <button
      aria-label="Toggle Menu"
      onClick={onClickHandler}
      className={classes.btn}
    >
      <div className={`${classes.wrapper} ${isActive && classes.active} `}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};

export default HamburgerIcon;
