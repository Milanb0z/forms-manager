import { useParams } from "react-router";
import { motion } from "framer-motion";

import classes from "./Invite.module.scss";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";

import { useFetchFormQuery } from "@store/inviteSlice";
import { useDeleteFormMutation } from "@store/formSlice";
import { Card } from "@ui";

import InviteTable from "@components/InviteTable/InviteTable";
import FromatedDate from "@utils/formatDate";
import { Button } from "@ui";
import { Link } from "react-router-dom";

const ResponsesCard = ({ response }) => {
  return (
    <Card className={classes.responses}>
      <h2>Responses:</h2>
      {response.length == 0 ? (
        <div className={classes.responses_message}>
          <p>No Responses</p>
        </div>
      ) : (
        <div className={classes.column}>
          {response.map((item) => (
            <Link key={item._id} to={`/dashboard/results/${item._id}`}>
              <div className={classes.column_item}>
                <p>Submited: </p>
                <span> {FromatedDate(item.createdAt)}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </Card>
  );
};

const CompleteCard = ({ invites }) => {
  return (
    <Card className={classes.chartCard}>
      <h2>Invites:</h2>
      <div className={classes.row}>
        <div className={classes.row_item}>
          <h2>{invites.length}</h2>
          <p>Total </p>
        </div>
        <div className={classes.row_item}>
          <h2>{invites.filter((d) => d.isSolved).length}</h2>
          <p>Answered</p>
        </div>
      </div>
    </Card>
  );
};

const itemVars = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Invite = () => {
  const { formId } = useParams();
  const { data, error, isLoading: isFetching } = useFetchFormQuery(formId);

  const [deleteForm, { isLoading }] = useDeleteFormMutation();

  if (isLoading || isFetching) {
    return (
      <motion.div
        animate="animate"
        initial="initial"
        variants={itemVars}
        className={classes.content}
      >
        <LoadingSpinner />
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        animate="animate"
        initial="initial"
        variants={itemVars}
        className={classes.content}
      >
        <h1>{error.status}</h1>
        <h2>{error.data.error}</h2>
      </motion.div>
    );
  }

  if (data) {
    return (
      <div className={classes.grid}>
        <InviteTable invites={data.form.invites} />
        <ResponsesCard response={data.response} />
        <CompleteCard invites={data.form.invites} />
        <CompleteCard invites={data.form.invites} />
        <Card>
          <Button onClick={deleteForm.bind(this, formId)} danger>
            DeleteForm
          </Button>
          <Link to={`/dashboard/form/edit/${formId}`}>
            <Button outline>Edit Form</Button>
          </Link>
        </Card>
      </div>
    );
  }
};

export default Invite;

/**
 * 
 * 
 *   <div className={classes.content}>
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
 */
