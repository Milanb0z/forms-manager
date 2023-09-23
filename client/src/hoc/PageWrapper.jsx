import { useContext } from "react";

import classes from "./PageWrapper.module.scss";

import Logo from "@assets/logo.svg";
import Add from "@assets/add.svg";

import Sidenav from "@components/Sidenav/Sidenav";
import { Button } from "@ui";
import { Link } from "react-router-dom";
import { UserContext } from "@context/user.context";
import ProfileCard from "@components/ProfileCard/ProfileCard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PageWrapper = ({ children, title }) => {
  const [user] = useContext(UserContext);
  return (
    <section className={classes.wrapper}>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link to="/form">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className={classes.header_content}>
          <h3>{title || "Dashboard"}</h3>
          {user ? (
            <div className={classes.actions}>
              <Link to="/form/new">
                <Button iconUrl={Add}>New Form</Button>
              </Link>
              <ProfileCard username={user.username} email={user.email} />
            </div>
          ) : (
            <div className={classes.actions}>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </div>
          )}
        </div>
      </header>
      <main className={classes.main}>
        <Sidenav />
        <div className={classes.content}>{children}</div>

        <ToastContainer position="bottom-right" />
      </main>
    </section>
  );
};

export default PageWrapper;
