import { useEffect, useState } from "react";

import { Button, Input } from "@ui";

import classes from "./Profile.module.scss";
import { toast } from "react-toastify";

import { useGetProfileQuery, useUpdateUserMutation } from "@store/authSlice";

const Profile = () => {
  const { data: user } = useGetProfileQuery();
  const [updateUser] = useUpdateUserMutation();
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
    toast.promise(updateUser(userData).unwrap(), {
      pending: "Updating User",
      success: "User Updated",
      error: "Error 🤯",
    });
  };

  return (
    <form className={classes.content} onSubmit={onSubmitHandler}>
      <div className={classes.content_main}>
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
  );
};

export default Profile;
