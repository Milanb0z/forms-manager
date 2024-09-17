import React from "react";

import classes from "./Features.module.scss";

const features = [
  {
    header: "Drag-and-Drop Form Builder",
    body: "Easily create forms by dragging and dropping fields. No coding required—just a seamless, intuitive experience.",
  },
  {
    header: "Custom URLs for Forms",
    body: "Give your forms a personal touch with custom URLs. Share links that match your brand or make them memorable.",
  },
  {
    header: "Easy Results View",
    body: "Track responses with ease. View, filter, and export your form results all from one simple dashboard.",
  },
  {
    header: "Invite Users Effortlessly",
    body: "Send personalized invitations directly from your app. Get more responses with just a few clicks.",
  },
  {
    header: "Track Respondents",
    body: "Keep track of who’s responded. Monitor progress and follow up with those who haven’t completed the form yet.",
  },
  {
    header: "Real-Time Notifications",
    body: "Get notified as soon as someone submits a form. Stay updated in real-time with instant alerts.",
  },
];

const FeaturesSection = () => {
  return (
    <section className={classes.features}>
      <div className={classes.header}>
        <span>Featues</span>
        <h2>Designed to Make Form Building Effortless</h2>
        <p>
          Our app provides powerful tools like drag-and-drop form creation,
          custom URLs, and easy tracking features. Whether you're inviting users
          or analyzing results, we’ve got everything you need to simplify the
          process
        </p>
      </div>
      <div className={classes.grid}>
        {features.map((feature, index) => (
          <div key={index} className={classes.card}>
            <div className={classes.card_img}></div>
            <div className={classes.card_text}>
              <h3>{feature.header}</h3>
              <p>{feature.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
