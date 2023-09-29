import { useState } from "react";
import { Input, Button } from "@ui";

import classes from "./ChoiceSelector.module.scss";

const ChoiceSelector = () => {
  const [values, setValues] = useState([]);

  const onNewChoice = () => {
    setValues((prevValues) => [...prevValues, ""]);
  };

  const onChoiceEdit = (index, { target: { value } }) => {
    let prevVals = [...values];
    prevVals[index] = value;
    setValues(prevVals);
  };
  const onChoiceDelete = (index) => {
    const prevVals = [...values];
    prevVals.splice(index, 1);
    setValues(prevVals);
  };

  return (
    <div className={classes.selector}>
      {values.length > 0 ? (
        values.map((singleVal, index) => (
          <div key={index} className={classes.selector_item}>
            <Input
              placeholder="Enter Option Text"
              onChange={onChoiceEdit.bind(this, index)}
              value={singleVal}
            />
            <button
              onClick={() => onChoiceDelete(index)}
              className={classes.selector_btn}
            >
              X
            </button>
          </div>
        ))
      ) : (
        <p>No Choices</p>
      )}
      <Button
        disabled={!values[values.length - 1] && values.length > 0}
        onClick={onNewChoice}
      >
        Add Choice
      </Button>
    </div>
  );
};

export default ChoiceSelector;
