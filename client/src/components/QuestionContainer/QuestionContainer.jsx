import { useState } from "react";
import { useDrop } from "react-dnd";

import { Card } from "@ui";
import DroppedQuestion from "@components/DroppedQuestion/DroppedQuestion";

import classes from "./QuestionContainer.module.scss";

const QuestionContainer = ({
  questions,
  onDropHandler,
  onDelete,
  onEdit,
  onNewChoice,
  onChoiceEdit,
  onChoiceDelete,
}) => {
  const [{ isActive }, drop] = useDrop(() => ({
    accept: "BOX",
    drop: onDropHandler,
    collect: (monitor) => ({
      isActive: monitor.canDrop() && monitor.isOver(),
    }),
  }));

  console.log(questions);

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
          <DroppedQuestion
            id={index}
            question={question}
            onEdit={onEdit}
            key={index}
            onDelete={() => onDelete(index)}
            onNewChoice={() => onNewChoice(index)}
            onChoiceEdit={onChoiceEdit}
            onChoiceDelete={onChoiceDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionContainer;
