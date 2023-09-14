import React from "react";

import { Input, Button } from "@ui";

import classes from "./NewQuestionForm.module.scss";

const NewQuestionForm = ({
  option,
  index,
  onTitleEdit,
  onOptionEdit,
  newAnswer,
}) => {
  console.log(option);
  return (
    <div className={classes.question}>
      <Input
        label="Question Text"
        value={option.questionText}
        onChange={(e) => onTitleEdit(e, index)}
      />
      <div className={classes.answers}>
        <h5>Answers</h5>
        {option.options.map((ans, i) => (
          <div key={`answer-${i}`} className={classes.answer_row}>
            <Input value={ans} onChange={(e) => onOptionEdit(e, index, i)} />
            <Button onClick={() => newAnswer(index)}>+</Button>
          </div>
        ))}
        <Button
          disabled={!option.options[option.options.length - 1]}
          onClick={() => newAnswer(index)}
        >
          Add Answer
        </Button>
      </div>
    </div>
  );
};

export default NewQuestionForm;
