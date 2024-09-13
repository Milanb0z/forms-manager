import React from "react";
import { Card, Button } from "@ui";

import classes from "./InviteTable.module.scss";

import {
  useDeleteInviteMutation,
  useResendInviteMutation,
} from "@store/inviteSlice";

const InviteTable = ({ invites }) => {
  const [deleteInvite, { isLoading }] = useDeleteInviteMutation();
  const [resendInvite] = useResendInviteMutation();

  return (
    <Card>
      <h2>Invites</h2>
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
                <Button onClick={resendInvite.bind(this, item._id)}>
                  Resend Mail
                </Button>
                <Button onClick={deleteInvite.bind(this, item._id)} danger>
                  Delete Invite
                </Button>
              </td>
              <td>{item.response || "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default InviteTable;
