import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Button, Input } from "@ui";

import useInput from "@hooks/useInput";
import PageWrapper from "@hoc/PageWrapper";

import axios from "../../axios.default";

import classes from "./EditForm.module.scss";

const EditForm = () => {
  const { formId } = useParams();

  const [heading, setHeading] = useInput("");
  const [description, setDescription] = useInput("");
  const [customLink, setCustomLink] = useInput("");

  const [form, setForm] = useState(null);

  useEffect(() => {
    axios.get(`/form/${formId}`).then((res) => {
      setForm(res.data);
    });
  }, [formId]);

  const onFormSubmit = (e) => {
    let token = localStorage.getItem("token");
    const { name, description } = form;
    axios
      .put(
        `/form/${formId}`,
        { name, description, customLink },
        { headers: { token } }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <PageWrapper title="Edit Form">
      <div className={classes.content}>
        <div className={classes.form}>
          <div className={classes.form_main}>
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
          </div>

          <div className={classes.form_actions}>
            <Button onClick={onFormSubmit}>Save Form</Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default EditForm;
