import React from "react";

import classes from "./Header.module.scss";
import { Button } from "@ui";

const LINKS = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Author", href: "/author" },
  { title: "Home", href: "/" },
];

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src="/logo.svg" alt="" />
        <h4>Formr</h4>
      </div>

      <ul className={classes.links}>
        {LINKS.map((item) => (
          <li key={item.title} className={classes.links_item}>
            {item.title}
          </li>
        ))}
        <Button>Login</Button>
      </ul>
    </header>
  );
};

export default Header;
