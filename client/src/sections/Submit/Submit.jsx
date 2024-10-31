import React from "react";

import classes from "./Submit.module.scss";
import { Input } from "@ui";
import { Button } from "@ui";
import { TextArea } from "@ui";

const Submit = () => {
  return (
    <div className={classes.wrapper}>
      <section className={classes.submit}>
        <div className={classes.text}>
          <h2>Have an Idea for a Feature? Let Us Know!</h2>
          <p>
            We’re constantly improving our app, and your input can make it even
            better. Submit your feature suggestions, and help shape the future
            of our platform!
          </p>
        </div>
        <div className={classes.form}>
          <h3>Submit Your Feature Request</h3>
          <div className={classes.form_body}>
            <Input placeholder="Your Name" />
            <Input placeholder="Email" />

            <TextArea
              rows="10"
              placeholder="Describe the feature you'd like to see and how it would improve your experience."
            />
          </div>
          <Button>Submit Feature</Button>
        </div>
      </section>
    </div>
  );
};

export default Submit;
