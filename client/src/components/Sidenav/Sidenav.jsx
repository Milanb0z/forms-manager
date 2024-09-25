import { useState } from "react";
import { NavLink } from "react-router-dom";

import GridIcon from "@assets/grid.svg";
import Profile from "@assets/profile.svg";

import classes from "./Sidenav.module.scss";

const STATIC_LINKS = [
  { id: "sd12", iconLink: GridIcon, url: "/dashboard" },
  { id: "sd13", iconLink: Profile, url: "/dashboard/me" },
];

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleState = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={`${classes.nav} ${isOpen ? classes.nav_open : ""}`}>
      <div className={classes.logo}>
        <img src="/logo.svg" alt="" />
      </div>

      <div onClick={toggleState} className={classes.toggle}>
        <img src="/arrow-right.svg" alt="open" />
      </div>
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
            <img src={link.iconLink} alt="" />
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Sidenav;
