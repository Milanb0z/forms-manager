import { useParams } from "react-router";

import classes from "./FormResults.module.scss";

import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { useGetResultQuery } from "@store/resultSlice";
import FromatedDate from "@utils/formatDate";

const FormResults = () => {
  const { formId } = useParams();
  const { data, isLoading } = useGetResultQuery(formId);

  const findQuestion = (id) => {
    const { title } = data.formId.questions.find((que) => que._id === id);
    return title;
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className={classes.wrapper}>
      <h1>{data.formId.name}</h1>

      <p>
        Submited:
        <span> {FromatedDate(data.createdAt)}</span>
      </p>
      <h2>Results:</h2>
      <div className={classes.answers}>
        {data.response.map((ans) => (
          <div className={classes.answers_item} key={ans._id}>
            <h4> {findQuestion(ans.questionId)}</h4>
            <p>
              <span>- {ans.data.join(",")}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FormResults;
