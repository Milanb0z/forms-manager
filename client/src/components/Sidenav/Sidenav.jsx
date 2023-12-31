import { NavLink } from "react-router-dom";
import { Button } from "@ui";

import GridIcon from "@assets/grid.svg";
import Profile from "@assets/profile.svg";

import classes from "./Sidenav.module.scss";

const STATIC_LINKS = [
  { id: "sd12", iconLink: GridIcon, url: "/form" },
  { id: "sd13", iconLink: Profile, url: "/me" },
];

const Sidenav = ({ isOpen }) => {
  return (
    <nav className={`${classes.nav} ${isOpen ? classes.nav_open : ""}`}>
      <div className={classes.links}>
        {STATIC_LINKS.map((link) => (
          <NavLink
            end
            className={({ isActive }) =>
              isActive ? `${classes.active} ${classes.link}` : classes.link
            }
            key={link.id}
            to={link.url}
          >
            <Button iconUrl={link.iconLink} />
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Sidenav;
