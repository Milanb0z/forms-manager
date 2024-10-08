import {} from "react";

import classes from "./Features.module.scss";

const features = [
  {
    iconUrl: "/drag.svg",
    header: "Drag-and-Drop Form Builder",
    body: "Easily create forms by dragging and dropping fields. No coding required—just a seamless, intuitive experience.",
  },
  {
    iconUrl: "/custom_url.svg",
    header: "Custom URLs for Forms",
    body: "Give your forms a personal touch with custom URLs. Share links that match your brand or make them memorable.",
  },
  {
    iconUrl: "/view.svg",
    header: "Easy Results View",
    body: "Track responses with ease. View, filter, and export your form results all from one simple dashboard.",
  },
  {
    iconUrl: "/user.svg",
    header: "Invite Users Effortlessly",
    body: "Send personalized invitations directly from your app. Get more responses with just a few clicks.",
  },
  {
    iconUrl: "/track.svg",
    header: "Track Respondents",
    body: "Keep track of who’s responded. Monitor progress and follow up with those who haven’t completed the form yet.",
  },
  {
    iconUrl: "/track.svg",
    header: "Real-Time Notifications",
    body: "Get notified as soon as someone submits a form. Stay updated in real-time with instant alerts.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className={classes.features}>
      <div className={classes.header}>
        <span>Featues</span>
        <h2>Powerful Features, Simple to Use</h2>
        <p>
          Our intuitive drag-and-drop interface lets you create forms with
          multiple question types, customizable designs, and seamless data
          collection. Get insights fast with real-time response tracking and
          analytics.
        </p>
      </div>
      <div className={classes.grid}>
        <div className={classes.grid_glow}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {features.map((feature, index) => (
          <div key={index} className={classes.card}>
            <img
              src={feature.iconUrl}
              alt="favorits"
              className={classes.card_img}
            />

            <div className={classes.card_text}>
              <h5>{feature.header}</h5>
              <p>{feature.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
