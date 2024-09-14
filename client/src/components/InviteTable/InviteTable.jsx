import { useState } from "react";
import { Card, Button } from "@ui";
import FromatedDate from "@utils/formatDate";

import classes from "./InviteTable.module.scss";

import Modal from "../Modal/Modal";

import {
  useDeleteInviteMutation,
  useResendInviteMutation,
} from "@store/inviteSlice";

const InviteTable = ({ invites }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteInvite, { isLoading }] = useDeleteInviteMutation();
  const [resendInvite, { isLoading: isResendLoading }] =
    useResendInviteMutation();

  return (
    <Card className={classes.card} isLoading={isLoading || isResendLoading}>
      <div className={classes.header}>
        <h2>Invites</h2>
        <Button outline iconUrl="/star.svg" />
      </div>

      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        This is Modal Content!
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
                  <Button onClick={resendInvite.bind(this, item._id)}>R</Button>
                  <Button onClick={deleteInvite.bind(this, item._id)} danger>
                    D
                  </Button>
                </td>
                <td>{item.response || "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Card>
  );
};

export default InviteTable;
