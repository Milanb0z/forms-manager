import { useState } from "react";

import classes from "./QuestionContainer.module.scss";

//Container
import { useDrop } from "react-dnd";
import { Card } from "@ui";

const QuestionContainer = ({ questions, onDropHandler }) => {
  const [{ isActive }, drop] = useDrop(() => ({
    accept: "BOX",
    drop: onDropHandler,
    collect: (monitor) => ({
      isActive: monitor.canDrop() && monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} data-testid="dustbin" className={classes.form}>
      <h2>Form</h2>
      <div className={classes.form_main}>
        {isActive ? (
          <div className={classes.overlay}>
            <h2>Drop Question</h2>
          </div>
        ) : null}

        {questions.map((question, index) => (
          <Card key={index}>
            <h2>{question.type}</h2>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuestionContainer;
