import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

import axios from "../axios.default";
import PageWrapper from "../hoc/PageWrapper";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const FormResults = () => {
  const { formId } = useParams();
  const [answers, setAnswers] = useState([]);
  const [form, setForm] = useState(null);

  useEffect(() => {
    axios.get(`/response/${formId}`).then((res) => {
      setAnswers(res.data.data);
    });
    axios.get(`/form/${formId}`).then((res) => {
      setForm(res.data);
    });
  }, [formId]);

  if (!form || !answers) {
    return <p>Loadind</p>;
  }
  return (
    <PageWrapper>
      <Header>Odgovori</Header>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
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
              Odgovori na formu
            </Typography>

            <Container>
              {form.questions.map((item, index) => (
                <Container key={`qei-${index}`}>
                  <h2>{item.questionText}</h2>
                  {answers.map((ansSet) => (
                    <p key={ansSet._id}>{ansSet.response[index].optionValue}</p>
                  ))}
                </Container>
              ))}
            </Container>
          </Container>
        </Box>
      </main>
    </PageWrapper>
  );
};

export default FormResults;
