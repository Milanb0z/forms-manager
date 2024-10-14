import { Button } from "@ui";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        <div className={classes.main}>
          <div className={classes.text}>
            <motion.h1 variants={landingVars}>
              Create Forms Effortlessly with Formr
            </motion.h1>
            <motion.p variants={landingVars}>
              Effortlessly create custom forms using our drag-and-drop builder.
              Choose from various question types, send invites with ease, and
              track responses in real-time.
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
