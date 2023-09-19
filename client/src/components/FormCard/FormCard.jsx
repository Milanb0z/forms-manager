import { Button, Card } from "@ui";
import { Link } from "react-router-dom";

import classes from "./FormCard.module.scss";

import FormatDate from "@utils/formatDate";

const FormCard = ({ name, description, id, timeCreated }) => {
  return (
    <Card className={classes.card}>
      <h2>{name}</h2>
      <p>{description}</p>
      <span>{FormatDate(timeCreated)}</span>
      <div className={classes.actions}>
        <Link to={`/form/${id}`}>
          <Button>Visit</Button>
        </Link>

        <Link to={`/form/edit/${id}`}>
          <Button>Edit</Button>
        </Link>

        <Link to={`/results/${id}`}>
          <Button>Results</Button>
        </Link>
      </div>
    </Card>
  );
};

export default FormCard;
