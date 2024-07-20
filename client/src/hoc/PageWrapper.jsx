import classes from "./PageWrapper.module.scss";

import Sidenav from "@components/Sidenav/Sidenav";
import Header from "@components/Header/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PageWrapper = ({ children }) => {
  return (
    <main className={classes.main}>
      <Sidenav />
      <div className={classes.content}>
        <Header />
        {children}
      </div>

      <ToastContainer theme="dark" position="bottom-right" />
    </main>
  );
};

export default PageWrapper;
