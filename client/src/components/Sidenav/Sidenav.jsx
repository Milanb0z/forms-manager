import React from "react";
import classes from "./Sidenav.module.scss";

import GridIcon from "@assets/grid.svg";
import { Button } from "@ui";

const STATIC_LINKS = [
  { id: "sd12", iconLink: GridIcon },
  { id: "sd13", iconLink: GridIcon },
  { id: "sd14", iconLink: GridIcon },
  { id: "sd15", iconLink: GridIcon },
];

const Sidenav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.links}>
        {STATIC_LINKS.map((link) => (
          <Button key={link.id} iconUrl={link.iconLink} />
        ))}
      </div>
    </nav>
  );
};

export default Sidenav;
