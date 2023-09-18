import { NavLink } from "react-router-dom";
import { Button } from "@ui";

import GridIcon from "@assets/grid.svg";

import classes from "./Sidenav.module.scss";

const STATIC_LINKS = [
  { id: "sd12", iconLink: GridIcon, url: "/form" },
  { id: "sd13", iconLink: GridIcon, url: "/form/65006d658987c88761a9d36c" },
];

const Sidenav = () => {
  return (
    <nav className={classes.nav}>
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
