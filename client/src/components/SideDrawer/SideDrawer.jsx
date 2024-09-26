import React from "react";

import { motion } from "framer-motion";

import classes from "./SideDrawer.module.scss";
import { Link } from "react-router-dom";
import { Button } from "@ui";

const LINKS = [
  { text: "Home", src: "/#" },
  { text: "Features", src: "/#features" },
  { text: "steps", src: "/#steps" },
  { text: "reviews", src: "/#reviews" },
  { text: "FAQ", src: "/#faq" },
];
const bottomToTop = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const variants = {
  open: {
    x: 0,
    transition: {
      type: "linear",
      stiffness: 40,
      duration: 0.2,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const linkVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 20,
    opacity: 0,
  },
};

const SideDrawer = ({ isOpen = false, onClick }) => {
  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      className={classes.nav}
      onClick={onClick}
      variants={variants}
      initial="closed"
    >
      <motion.ul variants={linkVariants} className={classes.links}>
        {LINKS.map((link) => (
          <a key={link.text} href={link.src}>
            <motion.li variants={itemVariants} className={classes.links_item}>
              {link.text}
            </motion.li>
          </a>
        ))}
      </motion.ul>

      <motion.div className={classes.bottom} variants={bottomToTop}>
        <Link href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default SideDrawer;
