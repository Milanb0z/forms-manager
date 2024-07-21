import { useContext } from "react";
import { Link } from "react-router-dom";

import ProfileCard from "@components/ProfileCard/ProfileCard";

import { Button } from "@ui";

import Add from "@assets/add.svg";
import Profile from "@assets/profile.svg";

import classes from "./Header.module.scss";
import { UserContext } from "@context/user.context";

const Header = ({ title, link }) => {
  const [user] = useContext(UserContext);

  return (
    <header className={classes.header}>
      <div className={classes.header_text}>
        <div className={classes.header_depth}>
          <p>dashboard</p>
          <p>/</p>
          <p>
            <span>{link || "monitoring"}</span>
          </p>
        </div>
        <h2>{title || "Welcome to Dashboard"}</h2>
      </div>
      <div className={classes.header_actions}>
        {user ? (
          <div className={classes.actions}>
            <Link to="/form/new">
              <Button outline iconUrl={Add} />
            </Link>

            <Link to="/form/new">
              <Button outline iconUrl={Profile} />
            </Link>
            <ProfileCard username={user.username} email={user.email} />
          </div>
        ) : (
          <div className={classes.actions}>
            <Link to="/login">
              <Button outline>Login</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
