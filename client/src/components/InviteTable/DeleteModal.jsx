import React from "react";
import classes from "./DeleteModal.module.scss";
import { useDeleteFormMutation } from "@store/formSlice";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { Input, Button } from "@ui";
import useInput from "@hooks/useInput";

const DeleteModal = ({ deleteKey, handleClose }) => {
  const { formId } = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useInput("");
  const [deleteForm, { isLoading }] = useDeleteFormMutation();

  const onDeleteForm = () => {
    deleteForm(formId)
      .unwrap()
      .then(() => {
        handleClose();
        toast("Form Deleted Successfully");
        navigate("/dashboard");
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
        <p>
          To delete form type: <span>{deleteKey}</span> in input box below
        </p>
        <Input value={value} onChange={setValue} />
      </div>
      <div className={classes.actions}>
        <Button onClick={handleClose} outline>
          Cancel
        </Button>
        <Button onClick={onDeleteForm} disabled={deleteKey !== value} danger>
          Delete Form
        </Button>
      </div>
    </div>
  );
};

export default DeleteModal;
