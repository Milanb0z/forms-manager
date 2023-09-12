import React from "react";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

import axios from "../axios.default";

const defaultTheme = createTheme();

const SingleForm = () => {
  const { formId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios.get(`/form/${formId}`).then((res) => {
      setForm(res.data);
      console.log(res.data);
      let answers = res.data.questions.map((question) => ({
        questionId: question._id,
        optionValue: null,
      }));
      setAnswers(answers);
    });
  }, [formId]);

  const handleChange = (e, questionIndex, val) => {
    let newAnswers = [...answers];
    newAnswers[questionIndex].optionValue = val;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const submitData = { response: answers };
    axios.post(`/response/${formId}`, submitData).then((res) => {
      console.log(res);
      navigate("/form");
    });
  };

  if (!form) {
    return <p>loading</p>;
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {form.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 2 }} maxWidth="md">
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                {form.name}
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                {form.description}
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              ></Stack>
            </Container>

            {form.questions.map((question, index) => (
              <FormControl
                key={index}
                sx={{ m: 3 }}
                component="fieldset"
                variant="standard"
              >
                <FormLabel component="h1">{question.questionText}</FormLabel>
                <FormGroup>
                  {question.options.map((opt, ansIndex) => (
                    <FormControlLabel
                      key={opt._id}
                      control={
                        <Checkbox
                          checked={
                            answers[index].optionValue === opt ? true : false
                          }
                          onChange={(e) => handleChange(e, index, opt)}
                          name="gilad"
                        />
                      }
                      label={opt}
                    />
                  ))}
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
              </FormControl>
            ))}
          </Box>
          <Button onClick={handleSubmit} variant="contained">
            Pošalji
          </Button>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default SingleForm;
