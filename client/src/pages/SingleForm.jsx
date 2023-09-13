import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import PageWrapper from "@hoc/PageWrapper";

import classes from "./SingleForm.module.scss";

import axios from "../axios.default";
import Question from "@components/Question/Question";
import { Button } from "@ui";
import ProfileCard from "@components/ProfileCard/ProfileCard";

const SingleForm = () => {
  const { formId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios
      .get(`/form/${formId}`)
      .then((res) => {
        console.log(res.data);
        setForm(res.data);
        let answers = res.data.questions.map((question) => ({
          questionId: question._id,
          optionValue: null,
        }));
        setAnswers(answers);
      })
      .catch(() => {
        navigate("/form");
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
    <PageWrapper title={form.name}>
      <div className={classes.form}>
        <div className={classes.form_header}>
          <h1>{form.name}</h1>
          <p>{form.description}</p>
        </div>
        <ProfileCard
          username={form.createdBy.username}
          email={form.createdBy.email}
        />
        <div className={classes.form_questions}>
          {form.questions.map((question) => (
            <Question
              key={question._id}
              questionText={question.questionText}
              options={question.options}
            />
          ))}
        </div>
        <div className={classes.form_actions}>
          <Button>Submit Form</Button>
          <Button>Other Action</Button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default SingleForm;
