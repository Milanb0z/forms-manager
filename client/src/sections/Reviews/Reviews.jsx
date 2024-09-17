import React from "react";
import { Button } from "@ui";

import classes from "./Reviews.module.scss";

const WORDS = [0, 1, 2, 3, 4, 5];

const customerReviews = [
  {
    name: "John Smith",
    review:
      "The form builder is super intuitive. I can create custom forms in minutes!",
  },
  {
    name: "Sarah Johnson",
    review:
      "I love the custom URL feature. It makes sharing forms so easy and professional.",
  },
  {
    name: "Emily Davis",
    review:
      "Tracking responses has never been easier. The dashboard is a game changer!",
  },
  {
    name: "Michael Brown",
    review:
      "Inviting users is seamless, and I get notified instantly when they complete the form.",
  },
  {
    name: "Sophia Martinez",
    review:
      "Real-time notifications keep me on top of everything. I can't live without this feature!",
  },
  {
    name: "David Wilson",
    review:
      "The drag-and-drop builder is amazing. I created my first form without any hassle.",
  },
  {
    name: "Olivia Anderson",
    review:
      "Managing form responses is so simple now. I love how organized everything is!",
  },
  {
    name: "James Taylor",
    review:
      "It’s perfect for our team. We’ve streamlined our entire process with this app.",
  },
  {
    name: "Isabella Thomas",
    review:
      "Creating and tracking forms has never been this easy. The custom URLs are a",
  },
];

const ClientCard = ({ title, body }) => {
  return (
    <div className={classes.card}>
      <div className={classes.card_img}></div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

const InfiniteLine = ({ words }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.marquee}>
        <div className={classes.marquee_group}>
          {customerReviews.map((client, index) => (
            <ClientCard key={index} title={client.name} body={client.review} />
          ))}
        </div>
        <div aria-hidden="true" className={classes.marquee_group}>
          {customerReviews.map((client, index) => (
            <ClientCard
              key={`i-${index}`}
              title={client.name}
              body={client.review}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <section className={classes.reviews}>
      <div className={classes.text}>
        <div className={classes.icon}></div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ad
          quae deserunt cupiditate mollitia culpa amet laborum omnis, labore
          aspernatur.
        </p>
        <Button>Get Started</Button>
      </div>
      <div className={classes.cards}>
        <InfiniteLine words={WORDS} />
        <InfiniteLine words={WORDS} />
      </div>
    </section>
  );
};

export default Reviews;
