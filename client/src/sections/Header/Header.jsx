import React from "react";

import classes from "./Header.module.scss";
import { Button } from "@ui";
import { Link } from "react-router-dom";

const LINKS = [
  { title: "Home", href: "/login" },
  { title: "About", href: "/about" },
  { title: "Author", href: "/author" },
  { title: "Home", href: "/dashboard" },
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
          <Link key={item.title} to={item.href}>
            <li className={classes.links_item}>{item.title}</li>
          </Link>
        ))}
      </ul>

      <div className={classes.actions}>
        <Link to="/dashboard">
          <Button>Go to Dashboard</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
