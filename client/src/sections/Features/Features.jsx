import {} from "react";

import classes from "./Features.module.scss";

const Tools = [
  {
    iconUrl: "/services_1.svg",
    text: "Drag-and-Drop Interface",
  },

  {
    iconUrl: "/services_2.svg",
    text: "Multiple Question Types",
  },

  {
    iconUrl: "/services_3.svg",
    text: "Custom Link Sharing",
  },

  {
    iconUrl: "/services_4.svg",
    text: "Real-Time Response Tracking",
  },
];

const FeaturesSection = () => {
  return (
    <div id="features" className={classes.wrapper}>
      <section className={classes.features}>
        <h2>
          Unleash the Power of Our Form Builder’s Intuitive Features for
          Seamless Creation!
        </h2>
        <div className={classes.screen}>
          <img
            src="/assets/formbuilder_screen.webp"
            alt="screen"
            className={classes.screen}
          />
          {Tools.map((card, index) => (
            <div key={index} className={classes.tooltip}>
              <div className={classes.tooltip_icon}>
                <img src={card.iconUrl} alt={card.iconUrl} />
              </div>
              <span>{card.text}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
