import { motion, AnimatePresence } from "framer-motion";
import classes from "./FaqCard.module.scss";

const FAQCard = ({ heading, body, isActive, onClickHandler }) => {
  return (
    <div className={classes.card}>
      <div className={classes.header} onClick={onClickHandler}>
        <h5>{heading}</h5>
        <motion.div
          animate={{ rotate: isActive ? 45 : 0 }}
          className={classes.btn}
        >
          <img src="/add.svg" alt="close" />
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          >
            <div className={classes.answer}>
              <p>{body}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQCard;
