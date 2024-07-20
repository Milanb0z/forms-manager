import React, { useContext } from "react";
import classes from "./MainDashboard.module.scss";
import { Card } from "@ui";
import { UserContext } from "@context/user.context";
import { Button } from "@ui";
import { Link } from "react-router-dom";

const SurveysCard = ({ forms }) => {
  return (
    <Card>
      <h5>Created Surveys</h5>

      {forms?.length > 0 ? (
        <h2>OFmrs</h2>
      ) : (
        <div className={classes.noForm}>
          <p>No Forms found</p>
          <Link to="/form/new">
            <Button>Create Form</Button>
          </Link>
        </div>
      )}
    </Card>
  );
};

const MainDashboard = () => {
  const [user] = useContext(UserContext);

  console.log(user);
  return (
    <div className={classes.grid}>
      <Card>
        <h5>Lorem ipsum dolor sit.</h5>
      </Card>
      <Card />
      <Card />
      <SurveysCard />
    </div>
  );
};

export default MainDashboard;