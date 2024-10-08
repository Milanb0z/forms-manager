import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import GridIcon from "@assets/grid.svg";
import Profile from "@assets/profile.svg";

import classes from "./Sidenav.module.scss";

const STATIC_LINKS = [
  { id: "sd12", iconLink: GridIcon, url: "/dashboard" },
  { id: "sd13", iconLink: Profile, url: "/dashboard/me" },
];

const Sidenav = ({ isOpen, toggleState }) => {
  return (
    <motion.nav
      layout
      style={{
        width: isOpen ? "20em" : "fit-content",
      }}
      className={classes.nav}
    >
      <div className={classes.logo}>
        <motion.img layout src="/logo.svg" alt="" />

        {isOpen && (
          <motion.h2
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
          >
            Formr
          </motion.h2>
        )}
      </div>

      <motion.div layout onClick={toggleState} className={classes.toggle}>
        <motion.img
          style={{ rotate: isOpen ? 180 : 0 }}
          src="/arrow-right.svg"
          alt="open"
        />
      </motion.div>
      <motion.span layout className={classes.line}></motion.span>
      <div className={classes.links}>
        {STATIC_LINKS.map((link) => (
          <NavLink
            end
            className={({ isActive }) =>
              isActive ? `${classes.link} ${classes.active}` : classes.link
            }
            key={link.id}
            to={link.url}
          >
            <motion.div layout className={classes.link_icon}>
              <img src={link.iconLink} alt="" />
            </motion.div>

            {isOpen && (
              <motion.span
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.125 }}
                className={classes.link_text}
              >
                Formr
              </motion.span>
            )}
          </NavLink>
        ))}
      </div>
      {isOpen && <div className={classes.backdrop}></div>}
    </motion.nav>
  );
};

export default Sidenav;
