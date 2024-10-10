import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import classes from "./Invite.module.scss";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";

import { useFetchFormQuery } from "@store/inviteSlice";
import { Card, Button } from "@ui";

import InviteTable from "@components/InviteTable/InviteTable";
import FromatedDate from "@utils/formatDate";

import Modal from "@components/Modal/Modal";
import DeleteModal from "@components/InviteTable/DeleteModal";

const ResponsesCard = ({ response }) => {
  console.log(response);
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
  const [isDelete, setIsDelete] = useState(false);
  const { data, error, isLoading: isFetching } = useFetchFormQuery(formId);

  if (isFetching) {
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
        {isDelete && (
          <Modal
            title="Form Will Delete"
            handleClose={() => setIsDelete(false)}
            isOpen={isDelete}
          >
            <DeleteModal
              handleClose={() => setIsDelete(false)}
              deleteKey={data.form.name}
            />
          </Modal>
        )}
        <InviteTable invites={data.form.invites} />
        <ResponsesCard response={data.form.responses} />
        <CompleteCard invites={data.form.invites} />
        <Card>
          <Button onClick={() => setIsDelete(true)} danger>
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
