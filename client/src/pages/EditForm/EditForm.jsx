import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { Button, Input, Radio } from "@ui";

import classes from "./EditForm.module.scss";
import { useEditFormMutation, useGetFormByIdQuery } from "@store/formSlice";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";

const EditForm = () => {
  const navigate = useNavigate();
  const { formId } = useParams();
  const { data, isLoading } = useGetFormByIdQuery(formId);
  const [updateForm, { isLoading: isEditLoading }] = useEditFormMutation();

  const [form, setForm] = useState(null);

  useEffect(() => {
    setForm(data);
  }, [data]);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onCheckHandler = () => {
    setForm((p) => ({ ...p, isOpen: !p.isOpen }));
  };

  const onFormSubmit = () => {
    updateForm({ formId, body: form })
      .unwrap()
      .then(() => {
        toast("Form Updated Successfully");
        navigate("/dashboard");
      })
      .catch(() => {
        toast.error("Error");
      });
  };

  if (isLoading || isEditLoading) {
    return <LoadingSpinner />;
  }

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
          <Button onClick={onFormSubmit}>Save Changes</Button>
        </div>
      </div>
    );
};

export default EditForm;
