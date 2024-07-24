import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "react-router";

import { Button } from "@ui";

import axios from "../../axios.default";

import classes from "./SingleForm.module.scss";
import getAnsSchema from "@utils/getAnsSchema";

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

const answerVars = {
  initial: {
    x: 20,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

const SingleForm = ({ byId = false }) => {
  const { formId } = useParams();
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [infoOpen, setInfoOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Runn");
    setIsLoading(true);
    axios
      .get(`/form/${byId ? "id/" : ""}${formId}`)
      .then((res) => {
        console.log(res.data);
        setForm(res.data);
        setAnswers(getAnsSchema(res.data.questions));
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [formId, byId]);

  // Ans Stuff

  const onTypingHandler = (queIndex, { target: { value } }) => {
    let newAns = [...answers];
    newAns[queIndex].data = value;
    setAnswers(newAns);
  };

  const onChoiceSelected = (queIndex, value, radio = false) => {
    let newAns = [...answers];

    const index = newAns[queIndex].data.indexOf(value);
    if (index) {
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
    console.log("Submit");
  };

  const toggleInfo = () => {
    setInfoOpen((p) => !p);
  };

  if (form.questions) {
    console.log(form);
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
                  {form.questions[index].options.map((ans, index) => (
                    <motion.p
                      variants={answerVars}
                      key={index}
                      className={classes.answers_text}
                    >
                      {ans}
                    </motion.p>
                  ))}
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
  }
};

export default SingleForm;
