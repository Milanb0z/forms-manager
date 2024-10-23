import React from "react";
import classes from "./TextForms.module.scss";

const TestForms = () => {
  return (
    <div className={classes.wrapper}>
      <section className={classes.forms}>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore sit
          suscipit molestiae veritatis quidem delectus saepe iusto voluptatum
          explicabo modi.
        </p>
        <div className={classes.row}>
          <div className={classes.card}>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              iste deleniti voluptatem distinctio, fugit recusandae quasi omnis
              velit ipsum vitae?
            </p>
          </div>

          <div className={classes.card}>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              iste deleniti voluptatem distinctio, fugit recusandae quasi omnis
              velit ipsum vitae?
            </p>
          </div>

          <div className={classes.card}>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              iste deleniti voluptatem distinctio, fugit recusandae quasi omnis
              velit ipsum vitae?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestForms;
