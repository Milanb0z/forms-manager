import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import axios from "../axios.default";

import { Box, Button } from "@mui/material";

import useInput from "../hooks/useInput";

const defaultTheme = createTheme();

const NewForm = () => {
  const [heading, setHeading] = useInput("");
  const [description, setDescription] = useInput("");

  const [questions, setQuestions] = useState([]);

  const addNewQuestion = () => {
    setQuestions((prevQuestion) => [
      { questionText: "", options: [] },
      ...prevQuestion,
    ]);
  };

  const addAnswer = (questionId) => {
    let prevQuestions = [...questions];
    prevQuestions[questionId].options.push({ optionText: "" });
    console.log(prevQuestions[questionId]);
    setQuestions([...prevQuestions]);
  };

  const onQuestionTitleChange = ({ target }, index) => {
    console.log(target.value);
    let prevQuestion = [...questions];
    prevQuestion[index].questionText = target.value;
    console.log(prevQuestion);
    setQuestions([...prevQuestion]);
  };

  const onOptionTextChange = ({ target }, questionId, optionId) => {
    console.log(target.value);
    let prevQuestion = [...questions];
    prevQuestion[questionId].options[optionId].optionText = target.value;
    console.log(prevQuestion);
    setQuestions([...prevQuestion]);
  };

  const onFormSubmit = (e) => {
    let formSubmitData = { name: heading, description, questions };
    console.log(formSubmitData);
    axios
      .post("/form/new", formSubmitData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Create Form
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box>
          <div>
            <TextField
              id="outlined-basic"
              value={heading}
              onChange={setHeading}
              label="Title"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              value={description}
              onChange={setDescription}
              label="Description"
              variant="outlined"
            />
          </div>
          <div>
            {questions.map((opt, index) => (
              <div key={index}>
                <TextField
                  id="outlined-basic"
                  label="Question Title"
                  variant="outlined"
                  value={opt.questionText}
                  onChange={(e) => onQuestionTitleChange(e, index)}
                />
                <div>
                  {opt.options.map((ans, i) => (
                    <TextField
                      key={`answer-${i}`}
                      id="outlined-basic"
                      label="answer"
                      variant="outlined"
                      value={ans.optionText}
                      onChange={(e) => onOptionTextChange(e, index, i)}
                    />
                  ))}

                  <Button variant="contained" onClick={() => addAnswer(index)}>
                    Add Answer
                  </Button>
                </div>
              </div>
            ))}
            <Button variant="contained" onClick={addNewQuestion}>
              Add New
            </Button>

            <Button variant="contained" onClick={onFormSubmit}>
              Submit Form
            </Button>
          </div>
        </Box>
      </main>
    </ThemeProvider>
  );
};

export default NewForm;
