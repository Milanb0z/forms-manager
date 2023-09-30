import React from "react";

import { Input, Button, TextArea, FileDropzone } from "@ui";

import classes from "./DroppedQuestion.module.scss";

import ChoiceSelector from "@components/ChoiceSelector/ChoiceSelector";

const QUESTION_TYPES = {
  MULTIPLE: "MULTIPLE",
  RADIO: "RADIO",
  UPLOAD: "UPLOAD",
  SHORT: "SHORT",
  PARAGRAPH: "PARAGRAPH",
};

const DroppedQuestion = ({ id, title, type, onEdit, onDelete }) => {
  let content = null;

  switch (type) {
    case QUESTION_TYPES.MULTIPLE:
      content = <ChoiceSelector />;
      break;
    case QUESTION_TYPES.PARAGRAPH:
      content = <TextArea placeholder="Answer" disabled />;
      break;
    case QUESTION_TYPES.RADIO:
      content = <ChoiceSelector />;
      break;

    case QUESTION_TYPES.SHORT:
      content = <Input placeholder="Answer" disabled />;
      break;
    case QUESTION_TYPES.UPLOAD:
      content = <FileDropzone />;
      break;

    default:
      break;
  }
  return (
    <div className={classes.card}>
      <div className={classes.card_header}>
        <p>
          Type: <span>{type}</span>
        </p>
        <Button onClick={onDelete}>X</Button>
      </div>
      <Input
        onChange={(e) => onEdit(e, id)}
        value={title}
        placeholder="Enter Question Title"
      />
      {content}
    </div>
  );
};

export default DroppedQuestion;
