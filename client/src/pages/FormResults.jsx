import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import axios from "../axios.default";

const FormResults = () => {
  const { formId } = useParams();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios.get(`/response/${formId}`).then((res) => {
      console.log(res.data.data);
      setAnswers(res.data.data);
    });
  }, [formId]);

  if (!answers) {
    return <p>loading</p>;
  }

  return (
    <div>
      <h2>Odgovori</h2>

      <div>
        {answers.map((ans, index) => {
          return (
            <div key={index}>
              <h2>{new Date(ans.createdAt).toDateString()}</h2>
              {ans.response.map((option) => (
                <p>{option.optionValue}</p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormResults;
