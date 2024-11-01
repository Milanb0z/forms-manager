import { useEffect, useState } from "react";
import { useParams } from "react-router";
import classes from "./EditForm.module.scss";

import { toast } from "react-toastify";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { Input, Button, Switch, TextArea } from "@ui";

import { useEditFormMutation } from "@store/formSlice";

const EditModal = ({ handleClose, oldData }) => {
  const { formId } = useParams();
  const [editForm, { isLoading }] = useEditFormMutation();

  const [data, setData] = useState({
    name: "",
    description: "",
    customLink: "",
    isOpen: true,
  });

  useEffect(() => {
    if (oldData) {
      const { name, description, customLink, isOpen } = oldData;
      setData({ name, description, customLink, isOpen });
    }
  }, [oldData]);

  const onChangeHandler = ({ target: { name, value } }) => {
    setData((p) => ({ ...p, [name]: value }));
  };

  const onToggle = (e) => {
    setData((p) => ({ ...p, isOpen: e.target.checked }));
  };

  const onFormSubmit = () => {
    editForm({ formId, data })
      .unwrap()
      .then(() => {
        handleClose();
        toast("Form Edited Successfully");
        handleClose();
      })
      .catch(() => {
        handleClose();
        toast.error("Form Not Deleted");
      });
  };

  return (
    <div className={classes.content}>
      {isLoading && (
        <div className={classes.loading}>
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.main}>
        <Input
          label="Form Name"
          name="name"
          placeholder="Form Name"
          value={data.name}
          onChange={onChangeHandler}
        />
        <Input
          label="Custom Link"
          name="customLink"
          placeholder="Custom Link"
          value={data.customLink}
          onChange={onChangeHandler}
        />
        <TextArea
          label="Form Description"
          placeholder="Form Description"
          rows="8"
          name="description"
          value={data.description}
          onChange={onChangeHandler}
        />
        <Switch checked={data.isOpen} onClickHandler={onToggle}>
          Is Public
        </Switch>
      </div>
      <div className={classes.actions}>
        <Button onClick={handleClose} outline>
          Cancel
        </Button>
        <Button onClick={onFormSubmit}>Edit Form</Button>
      </div>
    </div>
  );
};

export default EditModal;
