import React from "react";

import { Card, Input, TextArea, FileDropzone } from "@ui";

import classes from "./DroppedQuestion.module.scss";

import ChoiceSelector from "@components/ChoiceSelector/ChoiceSelector";

const QUESTION_TYPES = {
  MULTIPLE: "MULTIPLE",
  RADIO: "RADIO",
  UPLOAD: "UPLOAD",
  SHORT: "SHORT",
  PARAGRAPH: "PARAGRAPH",
};

const DroppedQuestion = ({ title, type }) => {
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
    <Card>
      <p>
        Type: <span>{type}</span>
      </p>
      <Input placeholder="Enter Question Title" value={title} />
      {content}
    </Card>
  );
};

export default DroppedQuestion;
