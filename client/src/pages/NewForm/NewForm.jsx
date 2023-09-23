import { useState } from "react";

import axios from "../../axios.default";

import { Button, Input } from "@ui";

import useInput from "@hooks/useInput";
import PageWrapper from "@hoc/PageWrapper";
import NewQuestionForm from "@components/NewQuestionForm/NewQuestionForm";

import classes from "./NewForm.module.scss";

const NewForm = () => {
  const [heading, setHeading] = useInput("");
  const [description, setDescription] = useInput("");

  const [questions, setQuestions] = useState([]);

  const addNewQuestion = () => {
    setQuestions((prevQuestion) => [
      ...prevQuestion,
      { questionText: "", options: [""] },
    ]);
  };

  const addAnswer = (questionId) => {
    let prevQuestions = [...questions];
    prevQuestions[questionId].options.push("");
    setQuestions([...prevQuestions]);
  };

  const onQuestionTitleChange = ({ target }, index) => {
    let prevQuestion = [...questions];
    prevQuestion[index].questionText = target.value;
    setQuestions([...prevQuestion]);
  };

  const onOptionTextChange = ({ target }, questionId, optionId) => {
    let prevQuestion = [...questions];
    prevQuestion[questionId].options[optionId] = target.value;
    setQuestions([...prevQuestion]);
  };

  const onFormSubmit = () => {
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
    <PageWrapper title="Create Form">
      <div className={classes.content}>
        <div className={classes.form}>
          <div className={classes.form_main}>
            <Input
              label="Title"
              value={heading}
              onChange={setHeading}
              placeholder="Title"
            />
            <Input
              label="Description"
              value={description}
              onChange={setDescription}
              placeholder="Description"
            />
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
          </div>

          <div className={classes.form_actions}>
            <Button onClick={addNewQuestion}>Add Question</Button>
            <Button onClick={onFormSubmit}>Submit Form</Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default NewForm;
