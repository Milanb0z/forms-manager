import React from "react";

import classes from "./Question.module.scss";
import { Radio } from "@ui";

const Question = ({ questionText, options, onAnswer, id }) => {
  return (
    <div className={classes.question}>
      <h3>{questionText}</h3>
      <div className={classes.options}>
        {options.map((opt) => (
          <Radio
            key={opt}
            onChange={(e) => onAnswer(e, id, opt)}
            name={questionText}
            isChecked={opt}
            value={opt}
          >
            {opt}
          </Radio>
        ))}
      </div>
    </div>
  );
};

export default Question;
