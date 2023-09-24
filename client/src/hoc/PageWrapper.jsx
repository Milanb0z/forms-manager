import { useState } from "react";

import classes from "./PageWrapper.module.scss";

import Sidenav from "@components/Sidenav/Sidenav";
import Header from "@components/Header/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PageWrapper = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNav = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <section className={classes.wrapper}>
      {isOpen ? (
        <div onClick={toggleNav} className={classes.backdrop}></div>
      ) : null}

      <Header isActive={isOpen} title={title} onNavToggle={toggleNav} />
      <main className={classes.main}>
        <Sidenav isOpen={isOpen} />
        <div className={classes.content}>{children}</div>

        <ToastContainer position="bottom-right" />
      </main>
    </section>
  );
};

export default PageWrapper;
