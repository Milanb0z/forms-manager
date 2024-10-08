import {} from "react";

import classes from "./Features.module.scss";

const Tools = [
  {
    iconUrl: "/services_1.svg",
    text: "Employee enrollment percentage clearly",
  },

  {
    iconUrl: "/services_2.svg",
    text: "Employee enrollment percentage clearly",
  },

  {
    iconUrl: "/services_3.svg",
    text: "Employee enrollment percentage clearly",
  },

  {
    iconUrl: "/services_4.svg",
    text: "Employee enrollment percentage clearly",
  },
];

const FeaturesSection = () => {
  return (
    <div id="features" className={classes.wrapper}>
      <section className={classes.features}>
        <h2>
          Convert insight into data that contains information about the progress
          of your company
        </h2>
        <div className={classes.screen}>
          <img src="/screen.png" alt="screen" className={classes.screen} />
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
