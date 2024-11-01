import { Reorder, useDragControls } from "framer-motion";
import { Input, Button, FileDropzone } from "@ui";

import classes from "./DroppedQuestion.module.scss";

import ChoiceSelector from "@components/ChoiceSelector/ChoiceSelector";

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
  setActive,
  index,
}) => {
  let content = null;
  const controls = useDragControls();

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
    <Reorder.Item
      id={question.id}
      dragListener={false}
      dragControls={controls}
      value={question}
      onDragStart={() => {
        setActive(index);
      }}
      className={classes.card}
    >
      <div className={classes.card_header}>
        <p>
          Type: <span>{question.type}</span>
        </p>
        <div
          onPointerDown={(e) => controls.start(e)}
          className={classes.controle}
        >
          <img src="/icons/drag.svg" />
        </div>
        <Button danger iconUrl="/icons/exit_white.svg" onClick={onDelete} />
      </div>
      <Input
        onChange={(e) => onEdit(e, index)}
        value={question.title}
        placeholder="Enter Question Title"
      />
      {content}
    </Reorder.Item>
  );
};

export default DroppedQuestion;
