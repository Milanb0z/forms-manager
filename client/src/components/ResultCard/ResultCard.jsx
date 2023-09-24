import FormatDate from "@utils/FormatDate";

import { Card } from "@ui";

import classes from "./ResultCard.module.scss";

const ResultCard = ({ result }) => {
  return (
    <Card className={classes.card}>
      <h3>{result.formId.name}</h3>
      <div className={classes.list}>
        {result.formId.questions.map((question, index) => (
          <div key={question._id}>
            <b>
              <p>{question.questionText}</p>
            </b>
            <p>- {result.response[index].optionValue}</p>
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
