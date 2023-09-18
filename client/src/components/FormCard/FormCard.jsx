import React from "react";
import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";

import { Button, Card } from "@ui";
import { Link } from "react-router-dom";

import classes from "./FormCard.module.scss";

dayjs.extend(relativeTime);

const FormCard = ({ name, description, id, timeCreated }) => {
  return (
    <Card className={classes.card}>
      <h2>{name}</h2>
      <p>{description}</p>
      <span>{dayjs().to(dayjs(timeCreated))}</span>
      <div className={classes.actions}>
        <Link to={`/form/${id}`}>
          <Button>Visit</Button>
        </Link>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    </Card>
  );
};

export default FormCard;
