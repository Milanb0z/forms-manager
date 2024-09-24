import React from "react";
import classes from "./Footer.module.scss";

const LINKS = [1, 2, 3, 4, 5];

const Footer = () => {
  return (
    <footer className={classes.wrapper}>
      <div className={classes.footer}>
        <h3>LOGO</h3>
        <ul className={classes.links}>
          {LINKS.map((i) => (
            <li className={classes.links_item}>{i}</li>
          ))}
        </ul>
      </div>
      <div className={classes.credits}>
        <p>© 2024 milanb0z Agency. Copyright and All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
