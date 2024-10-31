import { memo, useState } from "react";
import { Reorder } from "framer-motion";
import { useDrop } from "react-dnd";

import { Button } from "@ui";

import DroppedQuestion from "@components/DroppedQuestion/DroppedQuestion";

import classes from "./QuestionContainer.module.scss";

const moveItem = (array, to, from) => {
  const item = array[from];
  array.splice(from, 1);
  array.splice(to, 0, item);
  return array;
};

const QuestionContainer = memo(function QuestionContainer({
  questions,
  onDropHandler,
  onDelete,
  onEdit,
  onNewChoice,
  onChoiceEdit,
  onChoiceDelete,
  setQuestions,
  onSubmit,
}) {
  const [acitveCard, setAcitveCard] = useState(null);
  const [, drop] = useDrop(() => ({
    accept: "BOX",
    drop: onDropHandler,
    collect: (monitor) => ({
      isActive: monitor.canDrop() && monitor.isOver(),
    }),
  }));

  const changeActiveCard = (index) => {
    setAcitveCard(index);
  };

  const onReorderHandler = (newOrder) => {
    setQuestions(newOrder);
  };

  return (
    <div ref={drop} data-testid="dustbin" className={classes.form}>
      <Reorder.Group
        onReorder={onReorderHandler}
        axis="y"
        values={questions}
        className={classes.form_main}
      >
        {questions.map((question, index) => (
          <DroppedQuestion
            setActive={changeActiveCard}
            id={question.id}
            index={index}
            question={question}
            onEdit={onEdit}
            key={question.id}
            onDelete={onDelete.bind(this, index)}
            onNewChoice={onNewChoice.bind(this, index)}
            onChoiceEdit={onChoiceEdit}
            onChoiceDelete={onChoiceDelete}
          />
        ))}
      </Reorder.Group>
      <Button disabled={questions.length < 1} onClick={onSubmit}>
        Submit
      </Button>
    </div>
  );
});

export default QuestionContainer;
