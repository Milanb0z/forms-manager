import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import PageWrapper from "@hoc/PageWrapper";

import axios from "../axios.default";

const SingleForm = () => {
  const { formId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios
      .get(`/form/${formId}`)
      .then((res) => {
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
  return <PageWrapper title={form.name}></PageWrapper>;
};

export default SingleForm;
