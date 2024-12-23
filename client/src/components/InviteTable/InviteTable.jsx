import { useState } from "react";
import { Card, Button } from "@ui";
import FromatedDate from "@utils/formatDate";

import classes from "./InviteTable.module.scss";

import Modal from "../Modal/Modal";

import {
  useDeleteInviteMutation,
  useResendInviteMutation,
} from "@store/inviteSlice";
import InviteModal from "./InviteModal";

const InviteTable = ({ invites }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteInvite, { isLoading }] = useDeleteInviteMutation();
  const [resendInvite, { isLoading: isResendLoading }] =
    useResendInviteMutation();

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Card className={classes.card} isLoading={isLoading || isResendLoading}>
      <div className={classes.header}>
        <h2>Invites</h2>
        <Button
          onClick={() => setIsOpen(true)}
          outline
          iconUrl="/icons/add.svg"
        />
      </div>

      <Modal
        title="Send Invite"
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
      >
        <InviteModal closeModal={onCloseModal} />
      </Modal>

      {invites.length == 0 ? (
        <div className={classes.content}>
          <p>No Invites</p>
          <Button onClick={() => setIsOpen(true)}>Send Invite</Button>
        </div>
      ) : (
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Email</th>
              <th>Created At</th>
              <th>Is Solved</th>
              <th>Actions</th>
              <th>Answers</th>
            </tr>
          </thead>
          <tbody>
            {invites.map((item) => (
              <tr key={item._id}>
                <td>{item.email}</td>
                <td>{FromatedDate(item.createdAt)}</td>
                <td
                  style={{
                    color: item.isSolved
                      ? "var(--color-green)"
                      : "var(--color-red)",
                  }}
                >
                  {item.isSolved ? "Yes" : "No"}
                </td>

                <td className={classes.table_action}>
                  <abbr title="Resend Mail">
                    <Button
                      iconUrl="/icons/resend.svg"
                      onClick={resendInvite.bind(this, item._id)}
                    />
                  </abbr>
                  <abbr title="Delete Invite">
                    <Button
                      iconUrl="/icons/delete.svg"
                      onClick={deleteInvite.bind(this, item._id)}
                      danger
                    />
                  </abbr>
                </td>
                <td>{item.response || "Unavailable"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Card>
  );
};

export default InviteTable;
