import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";

const NewQuestionForm = ({
  option,
  index,
  onTitleEdit,
  onOptionEdit,
  newAnswer,
}) => {
  return (
    <div>
      <TextField
        margin="dense"
        id="outlined-basic"
        label="Question Title"
        variant="outlined"
        value={option.questionText}
        onChange={(e) => onTitleEdit(e, index)}
      />
      <Box
        sx={{
          ml: 8,
          my: 2,
        }}
      >
        {option.options.map((ans, i) => (
          <TextField
            margin="normal"
            key={`answer-${i}`}
            id="outlined-basic"
            label="answer"
            variant="outlined"
            value={ans.optionText}
            onChange={(e) => onOptionEdit(e, index, i)}
          />
        ))}
        <br />
        <Button variant="contained" onClick={() => newAnswer(index)}>
          Add Answer
        </Button>
      </Box>
    </div>
  );
};

export default NewQuestionForm;
