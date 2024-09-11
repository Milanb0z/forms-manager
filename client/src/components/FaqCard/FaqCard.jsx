import { motion, AnimatePresence } from "framer-motion";
import classes from "./FAQCard.module.scss";

const FAQCard = ({ heading, body, isActive, onClickHandler }) => {
  return (
    <div className={classes.card}>
      <div className={classes.header} onClick={onClickHandler}>
        <h4>{heading}</h4>
        <motion.div
          animate={{ rotate: isActive ? 45 : 0 }}
          className={classes.btn}
        >
          <img src="/icons/plus.svg" width={32} height={32} alt="" />
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
