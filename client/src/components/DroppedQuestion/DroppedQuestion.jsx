import React from "react";

import { Input, Button, TextArea, FileDropzone } from "@ui";

import classes from "./DroppedQuestion.module.scss";

import ChoiceSelector from "@components/ChoiceSelector/ChoiceSelector";
import { Reorder } from "framer-motion";

const QUESTION_TYPES = {
  MULTIPLE: "MULTIPLE",
  RADIO: "RADIO",
  UPLOAD: "UPLOAD",
  SHORT: "SHORT",
  PARAGRAPH: "PARAGRAPH",
};

const DroppedQuestion = ({
  id,
  question,
  onEdit,
  onDelete,
  onNewChoice,
  onChoiceEdit,
  onChoiceDelete,
}) => {
  let content = null;

  switch (question.type) {
    case QUESTION_TYPES.MULTIPLE:
      content = (
        <ChoiceSelector
          options={question.options}
          id={id}
          onNewChoice={onNewChoice}
          onChoiceEdit={onChoiceEdit}
          onChoiceDelete={onChoiceDelete}
        />
      );
      break;

    case QUESTION_TYPES.RADIO:
      content = (
        <ChoiceSelector
          id={id}
          options={question.options}
          onNewChoice={onNewChoice}
          onChoiceEdit={onChoiceEdit}
          onChoiceDelete={onChoiceDelete}
        />
      );
      break;
    case QUESTION_TYPES.PARAGRAPH:
    case QUESTION_TYPES.SHORT:
      content = null;
      break;
    case QUESTION_TYPES.UPLOAD:
      content = <FileDropzone />;
      break;
  }

  return (
    <Reorder.Item id={question} value={question} className={classes.card}>
      <div className={classes.card_header}>
        <p>
          Type: <span>{question.type}</span>
        </p>
        <Button danger iconUrl="/exit_white.svg" onClick={onDelete} />
      </div>
      <Input
        onChange={(e) => onEdit(e, id)}
        value={question.title}
        placeholder="Enter Question Title"
      />
      {content}
    </Reorder.Item>
  );
};

export default DroppedQuestion;
