import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router";

import axios from "../../axios.default";

import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";

import classes from "./UserDetails.module.scss";
import ProfileSection from "@components/ProfileSection/ProfileSection";

const UserDetails = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    toast
      .promise(axios.get(`/user/${username}`), {
        pending: "Fetching Forms",
        success: "Fetched Succesfully 👌",
        error: "Error 🤯",
      })
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  }, [username]);

  return (
    <div className={classes.content}>
      {user ? (
        <ProfileSection
          username={user.username}
          email={user.email}
          createdForms={user.createdForms}
        />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default UserDetails;
