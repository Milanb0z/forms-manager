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
import NewQuestionForm from "../components/NewQuestionForm";
import Header from "../components/Header";

const defaultTheme = createTheme();

const NewForm = () => {
  const [heading, setHeading] = useInput("");
  const [description, setDescription] = useInput("");

  const [questions, setQuestions] = useState([]);

  const addNewQuestion = () => {
    setQuestions((prevQuestion) => [
      ...prevQuestion,
      { questionText: "", options: [] },
    ]);
  };

  const addAnswer = (questionId) => {
    let prevQuestions = [...questions];
    prevQuestions[questionId].options.push({ optionText: "" });
    console.log(prevQuestions[questionId]);
    setQuestions([...prevQuestions]);
  };

  const onQuestionTitleChange = ({ target }, index) => {
    let prevQuestion = [...questions];
    prevQuestion[index].questionText = target.value;
    setQuestions([...prevQuestion]);
  };

  const onOptionTextChange = ({ target }, questionId, optionId) => {
    let prevQuestion = [...questions];
    prevQuestion[questionId].options[optionId].optionText = target.value;
    setQuestions([...prevQuestion]);
  };

  const onFormSubmit = (e) => {
    let formSubmitData = { name: heading, description, questions };
    let token = localStorage.getItem("token");
    axios
      .post("/form/new", formSubmitData, { headers: { token } })
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
      <Header>Nova Forma</Header>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
            px: 4,
          }}
        >
          <div>
            <TextField
              margin="normal"
              id="outlined-basic"
              value={heading}
              onChange={setHeading}
              label="Title"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              margin="normal"
              id="outlined-basic"
              value={description}
              onChange={setDescription}
              label="Description"
              variant="outlined"
            />
          </div>
          <div>
            {questions.map((opt, index) => (
              <NewQuestionForm
                key={index}
                option={opt}
                index={index}
                onTitleEdit={onQuestionTitleChange}
                onOptionEdit={onOptionTextChange}
                newAnswer={addAnswer}
              />
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
