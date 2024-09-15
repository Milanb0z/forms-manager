import { useEffect } from "react";
import classes from "./Modal.module.scss";
import ModalWrapper from "@hoc/ModalWrapper";
import { Button } from "@ui";
import { AnimatePresence, motion } from "framer-motion";

const itemVars = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Modal = ({ children, title, isOpen, handleClose }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <div className={classes.wrapper}>
        <motion.div
          animate="animate"
          initial="initial"
          variants={itemVars}
          className={classes.modal}
        >
          <div className={classes.modal_heading}>
            <h2>{title}</h2>
            <Button danger iconUrl="/exit_white.svg" onClick={handleClose} />
          </div>
          <div className={classes.modal_content}>{children}</div>
        </motion.div>
        <div className={classes.backdrop}></div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
