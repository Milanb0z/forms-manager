import classes from "./PageWrapper.module.scss";
import { cubicBezier, motion } from "framer-motion";

import Sidenav from "@components/Sidenav/Sidenav";
import Header from "@components/Header/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router";

const PageWrapper = ({ title, link }) => {
  return (
    <main className={classes.wrapper}>
      <Sidenav />
      <div className={classes.content}>
        <Header title={title} link={link} />
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ ease: cubicBezier(0.25, 0.23, 0.29, 1) }}
          className={classes.main}
        >
          <Outlet />
        </motion.div>
      </div>

      <ToastContainer theme="dark" position="bottom-right" />
    </main>
  );
};

export default PageWrapper;
