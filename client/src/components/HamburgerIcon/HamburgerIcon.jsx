import classes from "./HamburgerIcon.module.scss";

const HamburgerIcon = ({ isActive, onClickHandler }) => {
  return (
    <div
      onClick={onClickHandler}
      className={`${classes.btn} ${isActive ? classes.active : ""}`}
    >
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerIcon;
