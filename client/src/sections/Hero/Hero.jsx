import { Button } from "@ui";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@sections/Header/Header";

import classes from "./Hero.module.scss";

const landingVars = {
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: 50,
  },
};

const HeroSection = () => {
  return (
    <motion.div
      variants={{}}
      initial="initial"
      animate="animate"
      transition={{ staggerChildren: 0.15 }}
      className={classes.hero}
    >
      <section className={classes.content}>
        <Header />
        <div className={classes.main}>
          <div className={classes.text}>
            <motion.h1 variants={landingVars}>
              Improve your performance using Easy HR.
            </motion.h1>
            <motion.p variants={landingVars}>
              Don't let your work be hampered by trivial matters. increase your
              work efficiency with our platform and feel the ease in managing
              employees
            </motion.p>
            <motion.div variants={landingVars} className={classes.row}>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              <Link to="/form/id/first">
                <Button outline>Demo Form</Button>
              </Link>
            </motion.div>
            <motion.img
              variants={landingVars}
              src="/screen.png"
              alt="screen"
              className={classes.screen}
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HeroSection;
