import { useEffect } from "react";
import { motion } from "framer-motion";

import ModalWrapper from "@hoc/ModalWrapper";
import { Button } from "@ui";

import classes from "./SideModal.module.scss";

const itemVars = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const SideModal = ({ children, title, isOpen, handleClose }) => {
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
        <motion.aside
          animate="animate"
          initial="initial"
          variants={itemVars}
          className={classes.side}
        >
          <div className={classes.side_heading}>
            <h2>{title}</h2>
            <Button
              danger
              iconUrl="/icons/exit_white.svg"
              onClick={handleClose}
            />
          </div>
          <div className={classes.side_content}>{children}</div>
        </motion.aside>
        <div onClick={handleClose} className={classes.backdrop}></div>
      </div>
    </ModalWrapper>
  );
};

export default SideModal;
