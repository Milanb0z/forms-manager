import { useContext, useEffect, useState } from "react";
import axios from "../axios.default";

import { UserContext } from "@context/user.context";
import PageWrapper from "@hoc/PageWrapper";

import useInput from "@hooks/useInput";

import classes from "./ExploreForms.module.scss";
import { Input } from "@ui";

import FormCard from "@components/FormCard/FormCard";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";

const ExploreForms = () => {
  const [user] = useContext(UserContext);
  const [search, setSearch] = useInput("");
  const [forms, setForms] = useState(null);

  const searchForm = () => {
    return forms.filter((form) => form.name.toLowerCase().includes(search));
  };

  useEffect(() => {
    axios.get("/form").then((res) => {
      setForms(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <PageWrapper title="Explore Forms">
      {forms ? (
        <div className={classes.content}>
          <Input
            placeholder="Search Froms"
            value={search}
            onChange={setSearch}
          />
          <h4>Open Forms</h4>
          <div className={classes.row}>
            {searchForm().map((form) => (
              <FormCard
                key={form._id}
                id={form._id}
                name={form.name}
                description={form.description}
                timeCreated={form.createdAt}
              />
            ))}
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </PageWrapper>
  );
};

export default ExploreForms;
