import React, { useState } from "react";
import { useParams } from "react-router";
import classes from "./InviteModal.module.scss";
import { Input, Button } from "@ui";
import useInput from "@hooks/useInput";
import { useAddInviteMutation } from "@store/inviteSlice";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { toast } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";

const InviteModal = ({ closeModal }) => {
  const { formId } = useParams();

  const [value, setValue, reset] = useInput("");
  const [inviteList, setInviteList] = useState([]);
  const [addInvite, { isLoading }] = useAddInviteMutation();

  const onEmailAdded = () => {
    setInviteList((p) => [...p, value]);
    reset();
  };

  const onFormSubmit = () => {
    if (inviteList.length > 0) {
      addInvite({ formId, body: { invites: inviteList } })
        .unwrap()
        .then((res) => {
          closeModal();
        })
        .catch((e) => {
          {
            console.log(e);
            toast.error("Error");
          }
        });
    }
  };

  const onEmailRemove = (index) => {
    const newInvite = [...inviteList];
    newInvite.splice(index, 1);
    setInviteList(newInvite);
  };

  return (
    <div className={classes.content}>
      {isLoading && (
        <div className={classes.loading}>
          <LoadingSpinner />
        </div>
      )}
      <AnimatePresence>
        {inviteList.length == 0 ? (
          <div className={classes.empty}>
            <p>No Emails Added</p>
          </div>
        ) : (
          <div className={classes.list}>
            {inviteList.map((l, i) => (
              <motion.div initi key={l} className={classes.list_item}>
                <p>{l}</p>
                <Button
                  danger
                  onClick={onEmailRemove.bind(this, i)}
                  iconUrl="/exit_white.svg"
                />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
      <div className={classes.row}>
        <Input
          value={value}
          onChange={setValue}
          type="email"
          placeholder="Enter email"
        />
        <Button
          outline
          disabled={!value}
          onClick={onEmailAdded}
          iconUrl="/add.svg"
        />
        <Button onClick={onFormSubmit} disabled={inviteList.length == 0}>
          Send Invites
        </Button>
      </div>
    </div>
  );
};

export default InviteModal;
