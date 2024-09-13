import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import classes from "./Card.module.scss";

const Card = ({ children, className, isLoading }) => {
  return (
    <div className={`${classes.card} ${className}`}>
      {isLoading && (
        <div className={classes.loading}>
          <LoadingSpinner />
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
