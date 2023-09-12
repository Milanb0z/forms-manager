import { useContext, useEffect, useState } from "react";
import axios from "../axios.default";

import { UserContext } from "../context/user.context";
import PageWrapper from "../hoc/PageWrapper";

import useInput from "../hooks/useInput";

import classes from "./ExploreForms.module.scss";
import { Card } from "@ui";
import { Link } from "react-router-dom";

const ExploreForms = () => {
  const [user] = useContext(UserContext);
  const [search, setSearch] = useInput("");
  const [forms, setForms] = useState([]);

  const searchForm = () => {
    return forms.filter((form) => form.name.toLowerCase().includes(search));
  };

  useEffect(() => {
    axios.get("/form").then((res) => {
      setForms(res.data);
    });
  }, []);

  return (
    <PageWrapper title="Explore Forms">
      <div className={classes.content}>
        <h4>Open Forms</h4>
        <div className={classes.row}>
          {forms.map((form) => (
            <Link key={form._id} to={`/form/${form._id}`}>
              <Card>
                <h2>{form.name}</h2>
                <p>{form.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default ExploreForms;
