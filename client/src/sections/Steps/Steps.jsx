import React from "react";
import classes from "./Steps.module.scss";

const STEPS = [1, 2, 3, 4];

const Steps = () => {
  return (
    <section id="steps" className={classes.steps}>
      <div className={classes.row}>
        {STEPS.map((i) => (
          <div className={classes.step} key={i}>
            <div className={classes.step_text}>
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                quidem?
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate eveniet quia laborum culpa, facilis atque architecto
                deleniti error fuga porro maiores exercitationem, qui explicabo
                ad doloremque omnis nam esse quod.
              </p>
            </div>
            <div className={classes.step_img}>
              <div className={classes.step_light}>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
