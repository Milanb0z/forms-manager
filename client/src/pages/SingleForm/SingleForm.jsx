import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "react-router";
import { toast } from "react-toastify";

import { Button, Input, TextArea } from "@ui";

import axios from "../../axios.default";

import classes from "./SingleForm.module.scss";
import getAnsSchema from "@utils/getAnsSchema";
import QUESTION_TYPES from "@utils/questionTypes";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";

const questionVars = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -20,
    opacity: 0,
  },
};

const SingleAnswer = ({
  options,
  type,
  answer,
  onTypingHandler,
  onChoiceSelect,
  index,
}) => {
  let content = null;

  switch (type) {
    case QUESTION_TYPES.MULTIPLE:
      content = options.map((ans) => (
        <p
          className={
            answer.find((opt) => opt === ans) ? classes.answers_checked : ""
          }
          key={ans}
          onClick={onChoiceSelect.bind(this, index, ans, false)}
        >
          {ans}
        </p>
      ));
      break;

    case QUESTION_TYPES.RADIO:
      content = options.map((ans, i) => (
        <p
          key={ans}
          className={
            answer.find((opt) => opt === ans) ? classes.answers_checked : ""
          }
          onClick={onChoiceSelect.bind(this, index, ans, true)}
        >
          {ans}
        </p>
      ));
      break;

    case QUESTION_TYPES.SHORT:
      content = (
        <Input
          placeholder="Enter Your Answer Here"
          value={answer}
          onChange={(e) => onTypingHandler(index, e)}
        />
      );
      break;
    case QUESTION_TYPES.PARAGRAPH:
      content = (
        <TextArea
          placeholder="Enter Your Answer Here"
          value={answer}
          onChange={(e) => onTypingHandler(index, e)}
        />
      );
      break;

    default:
      content = "";
      break;
  }

  return <div className={classes.answers}>{content}</div>;
};

const SingleForm = ({ byId, inviteMode }) => {
  const { formId, inviteId } = useParams();
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [infoOpen, setInfoOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const urlStir = inviteMode
      ? `/invite/solve/${inviteId}`
      : `/form/${byId ? "id/" : ""}${formId}`;
    axios
      .get(urlStir)
      .then((res) => {
        console.log(res.data);
        setForm(res.data);
        setAnswers(getAnsSchema(res.data.questions));
        setIsLoading(false);
        setInfoOpen(true);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [formId, byId]);

  // Ans Stuff

  const onTypingHandler = (queIndex, { target: { value } }) => {
    let newAns = [...answers];
    newAns[queIndex].data = value;
    console.log(newAns);
    setAnswers(newAns);
  };

  const onChoiceSelected = (queIndex, value, radio) => {
    let newAns = [...answers];

    const index = newAns[queIndex].data.indexOf(value);
    if (index >= 0) {
      newAns[queIndex].data.splice(index, 1);
    } else {
      if (radio) {
        newAns[queIndex].data = [value];
      } else {
        newAns[queIndex].data.push(value);
      }
    }
    setAnswers(newAns);
  };

  // Toolbar Stuff
  const onNextQuestion = () => {
    setIndex((p) => p + 1);
  };

  const onPrevQuestion = () => {
    setIndex((p) => p - 1);
  };

  const submitForm = () => {
    console.log(answers);
    const submitData = { response: answers };
    const submitUrl = inviteMode
      ? `/invite/end/${inviteId}`
      : `/response/${form._id}`;
    axios
      .post(submitUrl, submitData)
      .then((res) => {
        console.log(res);
        toast("Submited Succesfully");
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };

  const toggleInfo = () => {
    setInfoOpen((p) => !p);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (form.questions?.length > 0) {
    return (
      <div className={classes.wrapper}>
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: infoOpen ? 0 : "100%" }}
          transition={{ ease: "easeInOut" }}
          className={classes.info}
        >
          <div className={classes.info_header}>
            <Button onClick={toggleInfo} iconUrl="/exit.svg" />
          </div>
          <div className={classes.info_text}>
            <h1>{form.name}</h1>
            <p>{form.description}</p>
            <p>
              Created By: <span>{form.createdBy.username}</span>{" "}
            </p>
          </div>
        </motion.div>
        <div className={classes.content}>
          <div className={classes.question}>
            <AnimatePresence mode="wait">
              <motion.div
                variants={questionVars}
                transition={{ staggerChildren: 0.15 }}
                initial="initial"
                animate="animate"
                exit="exit"
                key={index}
                className={classes.question}
              >
                <h2 className={classes.question_text}>
                  {form.questions[index].title}
                </h2>
                <div className={classes.answers}>
                  <SingleAnswer
                    index={index}
                    answer={answers[index].data}
                    onChoiceSelect={onChoiceSelected}
                    onTypingHandler={onTypingHandler}
                    type={form.questions[index].type}
                    options={form.questions[index].options}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className={classes.indicatior}>
          <p>
            {index + 1} of {form.questions.length}
          </p>
          <div className={classes.indicatior_line}>
            <motion.div
              animate={{
                width: (100 / form.questions.length) * (index + 1) + "%",
              }}
              className={classes.indicatior_line_fill}
            ></motion.div>
          </div>
        </div>
        <div className={classes.actions}>
          <Button disabled={index == 0} onClick={onPrevQuestion}>
            Prev Question
          </Button>

          {index + 1 === form.questions.length ? (
            <Button onClick={submitForm}>Submit Form</Button>
          ) : (
            <Button onClick={onNextQuestion}>Next Question</Button>
          )}
          <Button iconUrl="/options.svg" onClick={toggleInfo} />
        </div>
      </div>
    );
  } else {
    return <h2>Form Not Found</h2>;
  }
};

export default SingleForm;
