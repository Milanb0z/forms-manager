import React from "react";
import classes from "./Footer.module.scss";

const Footer = ({ links }) => {
  return (
    <footer className={classes.wrapper}>
      <div className={classes.footer}>
        <div className={classes.logo}>
          <img src="/logo.svg" alt="" className={classes.icon} />
          <h4>formr</h4>
        </div>
        <ul className={classes.links}>
          {links.map((link) => (
            <a key={link.text} href={link.src}>
              <li className={classes.links_item}> {link.text}</li>
            </a>
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
