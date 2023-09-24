import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import PageWrapper from "@hoc/PageWrapper";

import classes from "./SingleForm.module.scss";

import axios from "../../axios.default";
import Question from "@components/Question/Question";
import { Button } from "@ui";
import ProfileCard from "@components/ProfileCard/ProfileCard";
import { UserContext } from "@context/user.context";

const SingleForm = () => {
  const [user] = useContext(UserContext);
  const { formId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    toast
      .promise(axios.get(`/form/${formId}`), {
        pending: "Fetching Forms",
        success: "Fetched Succesfully 👌",
        error: "Error 🤯",
      })
      .then((res) => {
        setForm(res.data);
        let answers = res.data.questions.map((question) => ({
          questionId: question._id,
          optionValue: null,
        }));
        setAnswers(answers);
      })
      .catch(() => {
        toast.error("Something Went Wrong");
      });
  }, [formId, navigate]);

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

  return (
    <PageWrapper>
      {form ? (
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
            {form.questions.map((question, index) => (
              <Question
                key={question._id}
                id={index}
                submitedAnswer={answers[index].optionValue}
                questionText={question.questionText}
                options={question.options}
                onAnswer={handleChange}
              />
            ))}
          </div>
          <div className={classes.form_actions}>
            <Button onClick={handleSubmit}>Submit Form</Button>
            {user?._id === form.createdBy._id ? (
              <Link to={`/form/edit/${formId}`}>
                <Button>Edit Form</Button>
              </Link>
            ) : null}
          </div>
        </div>
      ) : null}
    </PageWrapper>
  );
};

export default SingleForm;
