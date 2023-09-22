import { useEffect, useState } from "react";
import axios from "../axios.default";
import { motion } from "framer-motion";

import PageWrapper from "@hoc/PageWrapper";

import { Input } from "@ui";
import FormCard from "@components/FormCard/FormCard";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";

import useInput from "@hooks/useInput";

import classes from "./ExploreForms.module.scss";

const listAnimation = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const ExploreForms = () => {
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
      <div className={classes.content}>
        <Input placeholder="Search Froms" value={search} onChange={setSearch} />
        <h2>Open Forms</h2>
        <motion.div
          variants={listAnimation}
          initial="hidden"
          animate="visible"
          className={classes.row}
        >
          {forms ? (
            searchForm().map((form) => (
              <FormCard
                key={form._id}
                id={form._id}
                name={form.name}
                description={form.description}
                timeCreated={form.createdAt}
              />
            ))
          ) : (
            <LoadingSpinner />
          )}
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default ExploreForms;
