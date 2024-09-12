import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "../../axios.default";

import classes from "./Invite.module.scss";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import FromatedDate from "@utils/formatDate";
import { Button } from "@ui";
import { toast } from "react-toastify";
import { Input } from "@ui";
import useInput from "@hooks/useInput";

const Invite = () => {
  const { formId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState(null);
  const [email, setEmail] = useInput("");

  useEffect(() => {
    if (!formId) return;
    setIsLoading(true);
    axios.get(`/invite/${formId}`).then((res) => {
      setForm(res.data);
    });
    setIsLoading(false);
  }, [formId]);

  const onDeleteInvite = (id) => {
    axios
      .delete(`/invite/${id}`)
      .then(() => {
        toast.warn("Invite Deleted Succesfully");
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };

  const onInviteResend = (id) => {
    axios
      .get(`/invite/resend/${id}`)
      .then(() => {
        toast("Invite Sent Succesfully");
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/invite/${formId}`, { invites: [email] })
      .then(() => {
        toast("Invite Sent Succesfully");
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
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
                  <Button onClick={onInviteResend.bind(this, item._id)}>
                    Resend Mail
                  </Button>
                  <Button onClick={onDeleteInvite.bind(this, item._id)} danger>
                    Delete Invite
                  </Button>
                </td>
                <td>{item.response}</td>
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
