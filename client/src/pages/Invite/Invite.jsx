import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "../../axios.default";

import classes from "./Invite.module.scss";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import FromatedDate from "@utils/formatDate";

const Invite = () => {
  const { formId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState(null);

  console.log(formId);

  useEffect(() => {
    if (!formId) return;
    setIsLoading(true);
    axios.get(`/invite/${formId}`).then((res) => {
      console.log(res.data);
      setForm(res.data);
    });
    setIsLoading(false);
  }, [formId]);

  if (isLoading || !form) {
    <div className={classes.content}>
      <LoadingSpinner />
    </div>;
  }

  return (
    <div className={classes.content}>
      <h2>Invites</h2>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Created At</th>
            <th>Is Solved</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Invite;
