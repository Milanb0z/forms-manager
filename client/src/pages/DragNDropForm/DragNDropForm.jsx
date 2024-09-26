import { useState } from "react";

import axios from "../../axios.default";

import classes from "./DragNDropForm.module.scss";
import PageWrapper from "@hoc/PageWrapper";

import DraggableQuestion from "@components/DraggableQuestion/DraggableQuestion";
import QuestionContainer from "@components/QuestionContainer/QuestionContainer";

//Icons
import FileUploadIcon from "@assets/file-upload-icon.svg";
import ParagraphIcon from "@assets/paragraph-question-icon.svg";
import SingleIcon from "@assets/single-question-icon.svg";
import TextIcon from "@assets/text-question-icon.svg";
import MultipleIcon from "@assets/multiple-question-icon.svg";
import useInput from "@hooks/useInput";
import { Input } from "@ui";

const QUESTION_TYPES = {
  MULTIPLE: "MULTIPLE",
  RADIO: "RADIO",
  UPLOAD: "UPLOAD",
  SHORT: "SHORT",
  PARAGRAPH: "PARAGRAPH",
};

const questionTypes = [
  {
    icon: MultipleIcon,
    label: "Multiple Choice Type",
    data: {
      title: "",
      options: [],
      type: QUESTION_TYPES.MULTIPLE,
    },
  },

  {
    icon: SingleIcon,
    label: "Single Choice Type",
    data: {
      title: "",
      options: [],
      type: QUESTION_TYPES.RADIO,
    },
  },

  {
    icon: TextIcon,
    label: "Short Text Answer",
    data: {
      title: "",
      answer: "",
      type: QUESTION_TYPES.SHORT,
    },
  },

  {
    icon: ParagraphIcon,
    label: "Paragraph Text Answer",
    data: {
      title: "",
      answer: "",
      type: QUESTION_TYPES.PARAGRAPH,
    },
  },

  {
    icon: FileUploadIcon,
    label: "Upload FIle Answer",
    data: {
      title: "",
      answer: "",
      type: QUESTION_TYPES.UPLOAD,
    },
  },
];

const DragNDropForm = () => {
  const [questions, setQuestions] = useState([]);
  const [heading, setHeading] = useInput("");
  const [description, setDescription] = useInput("");
  const [customLink, setCustomLink] = useInput("");

  const onQuestionDelete = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const onTitleEdit = ({ target: { value } }, index) => {
    console.log({ value, index });
    const newQuestions = [...questions];
    newQuestions[index].title = value;
    setQuestions(newQuestions);
  };

  const onDropHandler = (question) => {
    console.log(question);
    setQuestions((prevQuestions) => [...prevQuestions, question]);
  };

  // Choice CRUD
  const onNewChoice = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].options.push("");
    setQuestions(newQuestions);
  };

  const onChoiceEdit = (questionIndex, optionIndex, { target: { value } }) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(newQuestions);
  };

  const onChoiceDelete = (questionIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options.splice(optionIndex, 1);
    setQuestions(newQuestions);
  };
  const onFormSubmit = () => {
    let formSubmitData = { name: heading, description, customLink, questions };
    let token = localStorage.getItem("token");
    axios
      .post("/form/new", formSubmitData, { headers: { token } })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <PageWrapper>
      <div className={classes.content}>
        <QuestionContainer
          questions={questions}
          onDropHandler={onDropHandler}
          onDelete={onQuestionDelete}
          onEdit={onTitleEdit}
          onNewChoice={onNewChoice}
          onChoiceEdit={onChoiceEdit}
          onChoiceDelete={onChoiceDelete}
          onSubmit={onFormSubmit}
        />
        <div className={classes.items}>
          <h2>Main Data</h2>
          <Input
            label="Title"
            value={heading}
            onChange={setHeading}
            placeholder="Title"
          />
          <Input
            label="Description"
            value={description}
            onChange={setDescription}
            placeholder="Description"
          />
          <Input
            label="Custom Link"
            value={customLink}
            onChange={setCustomLink}
            placeholder="Custom Link"
          />
          <h2>Questions </h2>
          <div className={classes.items_grid}>
            {questionTypes.map(({ data, label, icon }) => (
              <DraggableQuestion
                imgUrl={icon}
                onClickHandler={onDropHandler}
                data={data}
                label={label}
                key={label}
              />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default DragNDropForm;
