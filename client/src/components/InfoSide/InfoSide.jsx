import React from "react";
import { motion } from "framer-motion";
import classes from "./InfoSide.module.scss";

const sideVariants = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const InfoSide = () => {
  return (
    <motion.div
      variants={sideVariants}
      initial="initial"
      animate="animate"
      className={classes.side}
    >
      <div className={classes.side_content}>
        <div className={classes.side_heading}>
          <img src="/logo.svg" alt="" />
          <h1>Formr</h1>
        </div>
        <div className={classes.side_item}>
          <h4>Create Custom Forms</h4>
          <p>
            Design personalized forms with a wide range of question types,
            including multiple choice, text fields, and file uploads. Tailor
            each form to meet your specific requirements, making data collection
            efficient and versatile.
          </p>
        </div>

        <div className={classes.side_item}>
          <h4>Multiple Submission Options</h4>
          <p>
            Customize your forms with various question types, including
            checkboxes, radio buttons, free text, input text, and file uploads.
          </p>
        </div>

        <div className={classes.side_item}>
          <h4>User-Friendly Interface</h4>
          <p>
            Enjoy a simple, intuitive design that makes form creation and
            response collection effortless.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default InfoSide;
