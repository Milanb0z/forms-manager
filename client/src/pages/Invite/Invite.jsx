import { useParams } from "react-router";

import classes from "./Invite.module.scss";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import FromatedDate from "@utils/formatDate";
import { Button } from "@ui";

import { Input } from "@ui";
import useInput from "@hooks/useInput";
import {
  useDeleteInviteMutation,
  useFetchFormQuery,
  useResendInviteMutation,
  useAddInviteMutation,
} from "@store/inviteSlice";

const Invite = () => {
  const { formId } = useParams();

  const [email, setEmail] = useInput("");
  const [deleteInvite, { isLoading }] = useDeleteInviteMutation();
  const { data: form } = useFetchFormQuery(formId);
  const [resendInvite] = useResendInviteMutation();
  const [newInvite] = useAddInviteMutation();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const body = { invites: [email] };
    newInvite({ formId, body });
  };

  if (isLoading || !form) {
    return (
      <div className={classes.content}>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className={classes.content}>
      <h2>Form Data</h2>
      <p>
        Form Name: <span>{form?.name}</span>
      </p>

      <p>
        Desctiption: <span>{form?.description}</span>
      </p>

      <p>
        Status:{" "}
        <span
          style={{
            color: form?.isOpen ? "var(--color-green)" : "var(--color-red)",
          }}
        >
          {form?.isOpen ? "Active" : "inActive"}
        </span>
      </p>

      <h2>Invites</h2>
      {form.invites.length == 0 ? (
        <p>No Invites Sent</p>
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
            {form?.invites.map((item) => (
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
      )}

      <h3>Drop CSV file Send Invites</h3>
      <form onSubmit={onFormSubmit} className={classes.row}>
        <Input value={email} onChange={setEmail} placeholder="Email" />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default Invite;
