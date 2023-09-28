import React, { useState } from "react";
import classes from "./DragNDropForm.module.scss";
import PageWrapper from "@hoc/PageWrapper";

//
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

//Container
import { useDrop } from "react-dnd";
import { Card } from "@ui";

const QUESTION_TYPES = {
  MULTIPLE: "MULTIPLE",
  RADIO: "RADIO",
  UPLOAD: "UPLOAD",
  SHORT: "SHORT",
  PARAGRAPH: "PARAGRAPH",
};

const questionTypes = [
  {
    label: "Multiple Choice Type",
    data: {
      title: "",
      options: [],
      type: QUESTION_TYPES.MULTIPLE,
    },
  },

  {
    label: "Single Choice Type",
    data: {
      title: "",
      options: [],
      type: QUESTION_TYPES.RADIO,
    },
  },

  {
    label: "Short Text Answer",
    data: {
      title: "",
      answer: "",
      type: QUESTION_TYPES.SHORT,
    },
  },

  {
    label: "Paragraph Text Answer",
    data: {
      title: "",
      answer: "",
      type: QUESTION_TYPES.PARAGRAPH,
    },
  },

  {
    label: "Upload FIle Answer",
    data: {
      title: "",
      answer: "",
      type: QUESTION_TYPES.UPLOAD,
    },
  },
];

//Multiple, single, upload, short answer, paragraph

const DraggableCard = ({ label, data, onClickHandler }) => {
  const [{ transform }, dragRef] = useDrag(
    () => ({
      type: "BOX",
      item: data,
      collect: (monitor) => ({
        transform: monitor.isDragging() ? "skew(1em)" : "none",
      }),
    }),
    []
  );

  return (
    <div
      onClick={() => onClickHandler(data)}
      ref={dragRef}
      style={{ transform }}
      className={classes.items_grid_item}
    >
      {label}
    </div>
  );
};

const DragNDropForm = () => {
  const [questions, setQuestions] = useState([]);
  const onDropHandler = (question) => {
    console.log(question);
    setQuestions((prevQuestions) => [...prevQuestions, question]);
  };

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "BOX",
    drop: onDropHandler,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  return (
    <PageWrapper>
      <div className={classes.content}>
        <div
          ref={drop}
          style={{ backgroundColor }}
          data-testid="dustbin"
          className={classes.form}
        >
          <h2>Form</h2>
          <div className={classes.form_main}>
            {questions.map((question) => (
              <Card>
                <h2>{question.type}</h2>
              </Card>
            ))}
          </div>
        </div>
        <div className={classes.items}>
          <h2>Questions </h2>
          <div className={classes.items_grid}>
            {questionTypes.map(({ data, label }) => (
              <DraggableCard
                onClickHandler={onDropHandler}
                data={data}
                label={label}
                key={label}
              />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default DragNDropForm;
