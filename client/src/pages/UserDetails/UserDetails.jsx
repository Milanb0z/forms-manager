import { useParams } from "react-router";
import { useGetUserByUsernameQuery } from "@store/authSlice";

import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";

import classes from "./UserDetails.module.scss";
import FromatedDate from "@utils/formatDate";

const UserDetails = () => {
  const { username } = useParams();
  const { data: user, isLoading } = useGetUserByUsernameQuery(username);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (user) {
    return (
      <div className={classes.content}>
        <div className={classes.profile}>
          <h2>User Details:</h2>

          <h2>{user.username}</h2>
          <p>{user.email}</p>
        </div>
        <div className={classes.forms}>
          <h2>Created Forms:</h2>
          {user.createdForms.length == 0 ? (
            <div className={classes.forms_empty}>
              <p>No Forms Created</p>
            </div>
          ) : (
            <div className={classes.forms_cards}>
              {user.createdForms.map((form) => (
                <div key={form._id} className={classes.card}>
                  <h3>{form.name}</h3>
                  <p>{form.description}</p>
                  <span>{FromatedDate(form.createdAt)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return <h2>sd</h2>;
};

export default UserDetails;
