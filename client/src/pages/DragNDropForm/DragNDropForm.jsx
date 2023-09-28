import { useState } from "react";
import classes from "./DragNDropForm.module.scss";
import PageWrapper from "@hoc/PageWrapper";

import DraggableQuestion from "@components/DraggableQuestion/DraggableQuestion";
import QuestionContainer from "@components/QuestionContainer/QuestionContainer";

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

const DragNDropForm = () => {
  const [questions, setQuestions] = useState([]);

  const onDropHandler = (question) => {
    console.log(question);
    setQuestions((prevQuestions) => [...prevQuestions, question]);
  };

  return (
    <PageWrapper>
      <div className={classes.content}>
        <QuestionContainer
          questions={questions}
          onDropHandler={onDropHandler}
        />
        <div className={classes.items}>
          <h2>Questions </h2>
          <div className={classes.items_grid}>
            {questionTypes.map(({ data, label }) => (
              <DraggableQuestion
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
