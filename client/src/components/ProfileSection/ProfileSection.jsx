import React from "react";

import FormCard from "@components/FormCard/FormCard";

import classes from "./ProfileSection.module.scss";

const ProfileSection = ({ username, email, createdForms }) => {
  return (
    <div className={classes.profile}>
      <h2>{username}</h2>
      <p>{email}</p>
      <h3>Created Forms:</h3>
      <div className={classes.row}>
        {createdForms.length > 0 ? (
          createdForms.map((form) => (
            <FormCard
              key={form._id}
              id={form._id}
              name={form.name}
              description={form.description}
              timeCreated={form.createdAt}
            />
          ))
        ) : (
          <p>No forms created</p>
        )}
      </div>
    </div>
  );
};

export default ProfileSection;
