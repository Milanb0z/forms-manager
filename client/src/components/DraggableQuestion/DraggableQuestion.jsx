import React from "react";
import { useDrag } from "react-dnd";

import classes from "./DraggableQuestion.module.scss";

const DraggableQuestion = ({ label, data, onClickHandler }) => {
  const [{ isDragged }, dragRef] = useDrag(
    () => ({
      type: "BOX",
      item: data,
      collect: (monitor) => ({
        isDragged: monitor.isDragging(),
      }),
    }),
    []
  );

  return (
    <div
      onClick={() => onClickHandler(data)}
      ref={dragRef}
      className={`${classes.card} ${isDragged ? classes.drag : ""}`}
    >
      <h4>{label}</h4>
    </div>
  );
};

export default DraggableQuestion;
