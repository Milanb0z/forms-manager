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
import { useParams } from "react-router";
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
  const [form, setForm] = useState({});

  useEffect(() => {
    axios.get(`/form/${formId}`).then((res) => {
      console.log(res.data);
      setForm(res.data);
    });
  }, [formId]);

  const handleChange = (e) => {
    console.log(e.target);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Form Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
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
                {question.options.map((opt) => (
                  <FormControlLabel
                    key={opt._id}
                    control={
                      <Checkbox
                        checked={false}
                        onChange={handleChange}
                        name="gilad"
                      />
                    }
                    label={opt.optionText}
                  />
                ))}
              </FormGroup>
              <FormHelperText>Be careful</FormHelperText>
            </FormControl>
          ))}
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md"></Container>
      </main>
    </ThemeProvider>
  );
};

export default SingleForm;
