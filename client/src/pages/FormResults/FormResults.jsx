import { useEffect, useState } from "react";
import { useParams } from "react-router";

import axios from "../../axios.default";
import PageWrapper from "@hoc/PageWrapper";

import classes from "./FormResults.module.scss";

import ResultCard from "@components/ResultCard/ResultCard";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";

const FormResults = () => {
  const { formId } = useParams();
  const [results, setresults] = useState([]);
  const [form, setForm] = useState(null);

  useEffect(() => {
    axios.get(`/response/${formId}`).then((res) => {
      setresults(res.data);
    });
    axios.get(`/form/${formId}`).then((res) => {
      setForm(res.data);
    });
  }, [formId]);

  console.log(form);

  if (!form || !results) {
    return <LoadingSpinner />;
  }
  return (
    <PageWrapper>
      <div className={classes.wrapper}>
        <h2>Results</h2>
        <div className={classes.row}>
          {form.questions.map((que) => (
            <div key={que._id} className={classes.question}>
              <h5>{que.title}</h5>
              {que.options.map((ans) => (
                <p key={ans}>{ans}</p>
              ))}
            </div>
          ))}
          {results.map((result) => (
            <ResultCard key={result._id} result={result} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};
export default FormResults;
