import { useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import useScrollDirection from "@hooks/useScrollDirection";

import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import HamburgerIcon from "@components/HamburgerIcon/HamburgerIcon";
import SideDrawer from "@components/SideDrawer/SideDrawer";
import { Button } from "@ui";

const LINKS = [
  { text: "početna", src: "/#" },
  { text: "Proizvodi", src: "/#products" },
  { text: "Benefiti", src: "/#benefits" },
  { text: "Galerija", src: "/#gallery" },
  { text: "FAQ", src: "/#faq" },
  { text: "kontakt", src: "/#contact" },
];

const revealVar = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ease: [0.455, 0.03, 0.515, 0.955] },
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const direction = useScrollDirection();

  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [50, 500],
    ["rgba(52, 52, 52, 0)", "rgba(52, 52, 52, 1)"]
  );

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <motion.div
      animate="animate"
      initial="initial"
      transition={{ staggerChildren: 0.1, delayChildren: 1.5 }}
      style={{
        background,
      }}
      className={`${classes.wrapper} ${
        direction == "down" && !isOpen ? classes.hidden : ""
      }`}
    >
      <header className={classes.header}>
        <motion.div variants={revealVar} className={classes.logo}>
          <Link href="/">
            <h4>formr</h4>
          </Link>
        </motion.div>
        <motion.ul variants={revealVar} className={classes.links}>
          {LINKS.map((link) => (
            <a key={link.text} href={link.src}>
              <li className={classes.links_item}> {link.text}</li>
            </a>
          ))}
        </motion.ul>
        <div className={classes.actions}>
          <Button>Dashboard</Button>
        </div>
        <HamburgerIcon onClickHandler={toggleNav} isActive={isOpen} />
        <SideDrawer isOpen={isOpen} onClick={toggleNav} />
      </header>
    </motion.div>
  );
};

export default Header;
