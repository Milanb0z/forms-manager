import React, { useContext } from "react";
import classes from "./MainDashboard.module.scss";
import { Card } from "@ui";
import { UserContext } from "@context/user.context";
import { Button } from "@ui";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SurveysCard = ({ forms }) => {
  console.log(forms);
  return (
    <Card>
      <h5>Created Surveys</h5>

      {forms?.length > 0 ? (
        <div className={classes.list}>
          {forms.map((form) => (
            <Link key={form._id} to={`/dashboard/form/edit/${form._id}`}>
              <div className={classes.list_item}>
                <h4>{form.name}</h4>
                <span>{form.isOpen ? "Active" : "Closed"}</span>
              </div>
            </Link>
          ))}
        </div>
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

const ResultsCard = ({ forms }) => {
  return (
    <Card>
      <h5>Latest Results</h5>

      {forms?.length > 0 ? (
        <div className={classes.list}>
          {forms.map((form) => (
            <Link key={form._id} to={`/dashboard/form/edit/${form._id}`}>
              <div className={classes.list_item}>
                <h4>{form.name}</h4>
                <span>{form.isOpen ? "Active" : "Closed"}</span>
              </div>
            </Link>
          ))}
        </div>
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

  return (
    <div className={classes.grid}>
      <Card>
        <h5>Lorem ipsum dolor sit.</h5>
      </Card>
      <ResultsCard />
      <Card />
      <SurveysCard forms={user.createdForms} />
    </div>
  );
};

export default MainDashboard;
