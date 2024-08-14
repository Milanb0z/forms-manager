import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.wrapper}>
      <section className={classes.footer}>
        <div className={classes.left}>
          <div className={classes.logo}>
            <img src="/logo.svg" alt="" />
            <h4>Formr</h4>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            porro odio nihil obcaecati. Distinctio libero possimus nihil nobis
            ipsa id.
          </p>
          <p>
            © 2023 by <span> milanb0z</span>
          </p>
        </div>
        <ul className={classes.links}>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
        </ul>

        <ul className={classes.links}>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
