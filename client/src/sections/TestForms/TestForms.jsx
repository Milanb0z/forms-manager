import React from "react";
import classes from "./TextForms.module.scss";
import { Button } from "@ui";
import { Link } from "react-router-dom";

const featuredForms = [
  {
    heading: "Job Application Form",
    desc: "Apply for a position with us by completing this application form. We'll review your information and get in touch with you soon.",
    solveLink: "/form/id/first",
  },
  {
    heading: "Customer Feedback Form",
    desc: "We value your feedback! Please take a few minutes to let us know about your experience with our services.",
    solveLink: "/form/id/test1",
  },
];

const TestForms = () => {
  return (
    <div className={classes.wrapper}>
      <section className={classes.forms}>
        <div className={classes.text}>
          <h2>Try Out Our Test Forms </h2>
          <p>
            Explore Formr’s capabilities with our sample forms. Test various
            question types, experience the drag-and-drop builder, and see how
            response tracking works in real-time. Discover how easy and powerful
            form creation can be!
          </p>
        </div>
        <div className={classes.row}>
          {featuredForms.map((card, index) => (
            <div className={classes.card} key={index}>
              <h3>{card.heading}</h3>
              <p>{card.desc}</p>
              <Link to={card.solveLink}>
                <Button>Visit Form</Button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TestForms;
