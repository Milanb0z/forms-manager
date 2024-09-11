import React from "react";
import classes from "./Reviews.module.scss";

const Reviews = () => {
  return (
    <section className={classes.reviews}>
      <div className={classes.heading}>
        <h2>Trusted by leading Startups in tech industry</h2>
        <p>
          FramerBite gives you the blocks needed to create a truly professional
          website.
        </p>
      </div>
      <div className={classes.row}>
        <div className={classes.card}>
          <h3>
            “Using this SaaS has transformed our user BlazeX workflow. We
            couldn't be happier This is SaaS has simplified our data.”
          </h3>
          <p>
            <b>Cameron Williamson,</b> Co-founder, Markar
          </p>
          <hr />
          <div className={classes.rating}>
            <b>4.5 - Excellent</b>
            <div className={classes.stars}>
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
            </div>
          </div>
        </div>

        <div className={classes.card}>
          <h3>
            “Using this SaaS has transformed our user BlazeX workflow. We
            couldn't be happier This is SaaS has simplified our data.”
          </h3>
          <p>
            <b>Cameron Williamson,</b> Co-founder, Markar
          </p>
          <hr />
          <div className={classes.rating}>
            <b>4.5 - Excellent</b>
            <div className={classes.stars}>
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
