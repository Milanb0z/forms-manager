import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import classes from "./FormCard.module.scss";

import { Button, Card } from "@ui";
import FormatDate from "@utils/formatDate";

const childAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const FormCard = ({ name, description, id, timeCreated }) => {
  return (
    <motion.div variants={childAnimation}>
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
    </motion.div>
  );
};

export default FormCard;
