import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

import FormatDate from "@utils/FormatDate";

import axios from "../axios.default";
import PageWrapper from "@hoc/PageWrapper";

import classes from "./FormResults.module.scss";
import { Card } from "@ui";

const FormResults = () => {
  const { formId } = useParams();
  const [results, setresults] = useState([]);
  const [form, setForm] = useState(null);

  useEffect(() => {
    axios.get(`/response/${formId}`).then((res) => {
      console.log(res.data);
      setresults(res.data);
    });
    axios.get(`/form/${formId}`).then((res) => {
      setForm(res.data);
    });
  }, [formId]);

  if (!form || !results) {
    return <p>Loadind</p>;
  }
  return (
    <PageWrapper>
      <div className={classes.wrapper}>
        <div className={classes.row}>
          <h2>Results</h2>
          {results.map((result) => (
            <Card key={result._id}>
              <h3>{result.formId.name}</h3>
              {result.formId.questions.map((question, index) => (
                <div key={question._id}>
                  <b>
                    <p>{question.questionText}</p>
                  </b>
                  <p>- {result.response[index].optionValue}</p>
                </div>
              ))}
              <span>
                <b>Submited:</b> {FormatDate(result.createdAt)}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default FormResults;
