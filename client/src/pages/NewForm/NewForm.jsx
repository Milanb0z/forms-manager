import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { v4 } from "uuid";

import useInput from "@hooks/useInput";
import { TextArea, Input, Button } from "@ui";

import classes from "./NewForm.module.scss";

import DraggableQuestion from "@components/DraggableQuestion/DraggableQuestion";
import QuestionContainer from "@components/QuestionContainer/QuestionContainer";
import { useCreateFormMutation } from "@store/formSlice";
import { questionTypes } from "@utils/questionTypes";
import SideModal from "@components/SideModal/SideModal";

const NewForm = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [heading, setHeading] = useInput("");
  const [description, setDescription] = useInput("");
  const [customLink, setCustomLink] = useInput("");
  const [openDrawer, setOpenDrawer] = useState(false);

  const [createForm] = useCreateFormMutation();

  const onQuestionDelete = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const toggleDrawer = () => {
    setOpenDrawer((p) => !p);
  };

  const onTitleEdit = ({ target: { value } }, index) => {
    const newQuestions = [...questions];
    newQuestions[index].title = value;
    setQuestions(newQuestions);
  };

  const onDropHandler = (question) => {
    const newQuestion = JSON.parse(JSON.stringify(question));
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      { ...newQuestion, id: v4() },
    ]);
  };

  // Choice CRUD
  const onNewChoice = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].options.push("");
    setQuestions(newQuestions);
  };

  const onChoiceEdit = (questionIndex, optionIndex, { target: { value } }) => {
    console.log({ questionIndex, optionIndex });
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(newQuestions);
  };

  const onChoiceDelete = (questionIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options.splice(optionIndex, 1);
    setQuestions(newQuestions);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    let formSubmitData = {
      name: heading,
      description,
      customLink,
      questions: questions.map(({ id, ...otherProps }) => ({ ...otherProps })),
    };

    createForm(formSubmitData)
      .unwrap()
      .then(() => {
        toast("Form Created");
        navigate("/dashboard");
      })
      .catch(() => {
        toast.error("Error Occured");
      });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={classes.wrapper}>
        <QuestionContainer
          setQuestions={setQuestions}
          questions={questions}
          onDropHandler={onDropHandler}
          onDelete={onQuestionDelete}
          onEdit={onTitleEdit}
          onNewChoice={onNewChoice}
          onChoiceEdit={onChoiceEdit}
          onChoiceDelete={onChoiceDelete}
          onSubmit={onFormSubmit}
          toggleDrawer={toggleDrawer}
        />

        <SideModal
          title="Edit"
          isOpen={openDrawer}
          handleClose={() => setOpenDrawer(false)}
        >
          <Input
            label="Title"
            value={heading}
            onChange={setHeading}
            placeholder="Title"
          />
          <Input
            label="Custom Link"
            value={customLink}
            onChange={setCustomLink}
            placeholder="Custom Link"
          />
          <TextArea
            label="Description"
            value={description}
            onChange={setDescription}
            placeholder="Description"
          />

          <h3>Question Types</h3>
          <div className={classes.question}>
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
        </SideModal>

        <div className={classes.info}>
          <div className={classes.mobile}>
            <Button onClick={toggleDrawer}>Open</Button>
          </div>
          <Input
            label="Title"
            value={heading}
            onChange={setHeading}
            placeholder="Title"
          />
          <Input
            label="Custom Link"
            value={customLink}
            onChange={setCustomLink}
            placeholder="Custom Link"
          />
          <TextArea
            label="Description"
            value={description}
            onChange={setDescription}
            placeholder="Description"
          />

          <h3>Question Types</h3>
          <div className={classes.question}>
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
    </DndProvider>
  );
};

export default NewForm;
