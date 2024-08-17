import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Button } from "@ui";

import classes from "./404Page.module.scss";

const itemVars = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const NotFoundPage = () => {
  return (
    <motion.section
      variants={itemVars}
      animate="animate"
      initial="initial"
      className={classes.wrapper}
    >
      <h1>404</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        voluptatum voluptas in?
      </p>

      <Link variants={itemVars} to="/dashboard">
        <Button>Home</Button>
      </Link>
    </motion.section>
  );
};

export default NotFoundPage;
