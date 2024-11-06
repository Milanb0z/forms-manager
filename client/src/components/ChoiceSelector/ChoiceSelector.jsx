import { Input, Button } from "@ui";

import classes from "./ChoiceSelector.module.scss";

const ChoiceSelector = ({
  id,
  options,
  onNewChoice,
  onChoiceEdit,
  onChoiceDelete,
  index: queIndex,
}) => {
  return (
    <div className={classes.selector}>
      {options.length > 0 ? (
        options.map((singleVal, index) => (
          <div key={index} className={classes.selector_item}>
            <Input
              placeholder="Enter Option Text"
              onChange={(e) => onChoiceEdit(queIndex, index, e)}
              value={singleVal}
            />
            <Button
              iconUrl="/icons/exit.svg"
              onClick={onChoiceDelete.bind(this, queIndex, index)}
            />
          </div>
        ))
      ) : (
        <p>No Choices</p>
      )}
      <Button
        disabled={!options[options.length - 1] && options.length > 0}
        onClick={onNewChoice.bind(this, id)}
      >
        Add Choice
      </Button>
    </div>
  );
};

export default ChoiceSelector;
