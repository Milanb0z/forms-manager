import { useContext, useEffect, useState } from "react";

import useInput from "@hooks/useInput";
import { Button, Input } from "@ui";
import { UserContext } from "@context/user.context";

import PageWrapper from "@hoc/PageWrapper";

import classes from "./Profile.module.scss";

const Profile = () => {
  const [user] = useContext(UserContext);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
  });

  useEffect(() => {
    const { email, username } = user;
    setUserData({ username, email, password: "" });
  }, [user]);

  const onChangeHandler = ({ target: { value, name } }) => {
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <PageWrapper title="Profile Settings">
      <div className={classes.content}>
        <Input
          onChange={onChangeHandler}
          value={userData.username}
          name="username"
          label="Username"
        />
        <Input
          onChange={onChangeHandler}
          value={userData.email}
          type="email"
          name="email"
          label="Email"
        />
        <Input
          onChange={onChangeHandler}
          value={userData.password}
          name="password"
          type="password"
          label="Password"
        />
        <div className={classes.actions}>
          <Button>Update</Button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Profile;
