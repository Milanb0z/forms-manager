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
    console.log(index);
    setValues((prevVals) => {
      prevVals.splice(index, 1);
      return prevVals;
    });
  };

  return (
    <div className={classes.selector}>
      {values.length > 0 ? (
        values.map((value, index) => (
          <div key={`${value}_${index}`} className={classes.selector_item}>
            <Input onChange={onChoiceEdit.bind(this, index)} value={value} />
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
