import { useContext } from "react";
import { Link } from "react-router-dom";

import ProfileCard from "@components/ProfileCard/ProfileCard";

import { Button } from "@ui";

import Logo from "@assets/logo.svg";
import Add from "@assets/add.svg";

import classes from "./Header.module.scss";
import { UserContext } from "@context/user.context";
import HamburgerIcon from "@components/HamburgerIcon/HamburgerIcon";

const Header = ({ title, onNavToggle, isActive }) => {
  const [user] = useContext(UserContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/form">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className={classes.header_content}>
        <div className={classes.mobile}>
          <HamburgerIcon onClickHandler={onNavToggle} isActive={isActive} />
        </div>

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
  );
};

export default Header;
