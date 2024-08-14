import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Button, Input, Radio } from "@ui";

import axios from "../../axios.default";

import classes from "./EditForm.module.scss";
import { Link } from "react-router-dom";

const EditForm = () => {
  const { formId } = useParams();

  const [form, setForm] = useState(null);

  useEffect(() => {
    axios.get(`/form/${formId}`).then((res) => {
      setForm(res.data);
    });
  }, [formId]);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onCheckHandler = () => {
    setForm((prevForm) => ({
      ...prevForm,
      isOpen: !prevForm.isOpen,
    }));
  };

  const onFormSubmit = (e) => {
    let token = localStorage.getItem("token");
    const { name, description, customLink, isOpen } = form;
    axios
      .put(
        `/form/${formId}`,
        { name, description, customLink, isOpen },
        { headers: { token } }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  if (form)
    return (
      <div className={classes.content}>
        <div className={classes.content_main}>
          <Input
            label="Title"
            name="name"
            value={form.name}
            onChange={onChangeHandler}
            placeholder="Title"
          />
          <Input
            name="description"
            label="Description"
            value={form.description}
            onChange={onChangeHandler}
            placeholder="Description"
          />

          <Input
            name="customLink"
            label="Custom Link"
            value={form.customLink}
            onChange={onChangeHandler}
            placeholder="Custom Link"
          />
          <Radio onClick={onCheckHandler} checked={form.isOpen}>
            Is Active
          </Radio>
        </div>
        <div className={classes.actions}>
          <Link to={`/dashboard/results/${formId}`}>
            <Button outline>Results</Button>
          </Link>
          <Button danger>Reject Changes</Button>
          <Button onChange={onFormSubmit}>Save Changes</Button>
        </div>
      </div>
    );
};

export default EditForm;
