import { useEffect, useState } from "react";
import { useParams } from "react-router";

import axios from "../../axios.default";
import PageWrapper from "@hoc/PageWrapper";

import classes from "./FormResults.module.scss";

import ResultCard from "@components/ResultCard/ResultCard";

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
        <h2>Results</h2>
        <div className={classes.row}>
          {results.map((result) => (
            <ResultCard key={result._id} result={result} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default FormResults;
