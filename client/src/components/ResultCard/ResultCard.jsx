import FormatDate from "@utils/formatDate";

import { Card } from "@ui";

import classes from "./ResultCard.module.scss";

const ResultCard = ({ result, form }) => {
  console.log(result);
  console.log(form);
  return (
    <Card className={classes.card}>
      <h3>{result.formId.name}</h3>
      <div className={classes.list}>
        {result.response.map((question, index) => (
          <div key={question._id}>
            <b>
              <p>{form.questions[index].title}</p>
            </b>
            <p>- {question.data.join(", ")}</p>
          </div>
        ))}
      </div>
      <span>
        <b>Submited:</b> {FormatDate(result.createdAt)}
      </span>
    </Card>
  );
};

export default ResultCard;
