import { useEffect, useState } from "react";
import PageWrapper from "../hoc/PageWrapper";
import Header from "../components/Header";
import axios from "../axios.default";
import { useParams } from "react-router";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

const EditForm = () => {
  const { formId } = useParams();
  const [form, setForm] = useState(null);

  useEffect(() => {
    axios.get(`/form/${formId}`).then((res) => {
      setForm(res.data);
    });
  }, [formId]);

  const onFormSubmit = (e) => {
    let token = localStorage.getItem("token");
    const { name, description } = form;
    axios
      .put(`/form/${formId}`, { name, description }, { headers: { token } })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onChangeHandler = ({ target: { name, value } }) => {
    setForm((prevFrom) => ({ ...prevFrom, [name]: value }));
  };

  if (!form) {
    return <p>loading</p>;
  }

  return (
    <PageWrapper>
      <Header>Edit Form</Header>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
            px: 4,
          }}
        >
          <div>
            <TextField
              margin="normal"
              id="outlined-basic"
              value={form.name}
              onChange={onChangeHandler}
              name="name"
              label="name"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              margin="normal"
              id="outlined-basic"
              name="description"
              value={form.description}
              onChange={onChangeHandler}
              label="Description"
              variant="outlined"
            />
          </div>

          <Button variant="contained" onClick={onFormSubmit}>
            Submit Edit
          </Button>
        </Box>
      </main>
    </PageWrapper>
  );
};

export default EditForm;
