import { useContext, useEffect, useState } from "react";

import useInput from "@hooks/useInput";
import { Button, Input } from "@ui";
import { UserContext } from "@context/user.context";

import PageWrapper from "@hoc/PageWrapper";

import classes from "./Profile.module.scss";
import { toast } from "react-toastify";

import axios from "../../axios.default";

const Profile = () => {
  const [user, setUser] = useContext(UserContext);
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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    toast
      .promise(axios.patch("/user/", userData, { headers: { token } }), {
        pending: "Updating User",
        success: "User Updated",
        error: "Error 🤯",
      })
      .then((res) => {
        setUser(res.data);
      });
  };

  return (
    <PageWrapper title="Profile Settings">
      <form onSubmit={onSubmitHandler}>
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
            <Button type="submit">Update</Button>
          </div>
        </div>
      </form>
    </PageWrapper>
  );
};

export default Profile;
