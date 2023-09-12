import React from "react";

import classes from "./PageWrapper.module.scss";

import Logo from "@assets/logo.svg";
import Sidenav from "@components/Sidenav/Sidenav";

const PageWrapper = ({ children, title }) => {
  return (
    <section className={classes.wrapper}>
      <header className={classes.header}>
        <div className={classes.logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={classes.header_content}>
          <h3>{title || "Dashboard"}</h3>
        </div>
      </header>
      <main className={classes.main}>
        <Sidenav />
        <div className={classes.content}>{children}</div>
      </main>
    </section>
  );
};

export default PageWrapper;
