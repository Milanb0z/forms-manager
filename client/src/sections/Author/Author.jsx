import React from "react";

import classes from "./Author.module.scss";
import { Button } from "@ui";

const AuthorSection = () => {
  return (
    <section className={classes.author}>
      <div className={classes.text}>
        <p>
          <span>About Me</span>
        </p>
        <h2>Your digital revolution starts</h2>
        <p>
          FramerBite gives you the blocks needed to create a truly professional
          website for your SaaS is a long established fact that a reader.
        </p>
        <Button>Visit Portfolio</Button>
      </div>
      <div className={classes.profile}>
        <div className={classes.tags}>
          <div className={classes.tags_item}>
            <img src="/check.svg" alt="" />
            <p>Lorem ipsum dolor sit.</p>
          </div>

          <div className={classes.tags_item}>
            <img src="/check.svg" alt="" />
            <p>Lorem sit.</p>
          </div>

          <div className={classes.tags_item}>
            <img src="/check.svg" alt="" />
            <p>Lorem ipsum dolor.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
