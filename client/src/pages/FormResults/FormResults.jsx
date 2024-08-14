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

  if (!form || !results) {
    return <LoadingSpinner />;
  }
  return (
    <div className={classes.wrapper}>
      <h2>Results</h2>
      {results.length > 0 ? (
        <div className={classes.row}>
          {results.map((result) => (
            <ResultCard key={result._id} form={form} result={result} />
          ))}
        </div>
      ) : (
        <p>No Responses</p>
      )}
    </div>
  );
};
export default FormResults;
