import classes from "./PageWrapper.module.scss";
import { AnimatePresence, cubicBezier, motion } from "framer-motion";

import Sidenav from "@components/Sidenav/Sidenav";
import Header from "@components/Header/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router";
import { useState } from "react";

const PageWrapper = ({ title, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleState = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <main className={classes.wrapper}>
      <Sidenav isOpen={isOpen} toggleState={toggleState} />

      <div className={classes.content}>
        <Header title={title} link={link} />
        <Outlet />
      </div>

      <ToastContainer theme="dark" position="bottom-right" />
    </main>
  );
};

export default PageWrapper;
