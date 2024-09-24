import { Button } from "@ui";
import Header from "@sections/Header/Header";

import classes from "./Hero.module.scss";

const HeroSection = () => {
  return (
    <div className={classes.hero}>
      <section className={classes.content}>
        <Header />
        <div className={classes.main}>
          <div className={classes.left}>
            <h1>Unlock the Power of Efficient Service Tracking</h1>
            <p>
              Easily build forms with our drag-and-drop builder. Whether it's
              surveys, feedback forms, or event registrations, you can design,
              share, and analyze responses in no time.
            </p>

            <div className={classes.actions}>
              <Button>Create Form</Button>
              <Button outline>Get Demo</Button>
            </div>

            <div className={classes.reviews}>
              <div className={classes.profiles}>
                <div className={classes.profiles_icon}>1</div>
                <div className={classes.profiles_icon}>2</div>
                <div className={classes.profiles_icon}>3</div>
                <div className={classes.profiles_icon}>4</div>
              </div>
              <div className={classes.reviews_text}>
                <div className={classes.row}>
                  <span>4.8</span>
                  <div className={classes.reviews_stars}>
                    <img src="/star.svg" alt="star" />
                    <img src="/star.svg" alt="star" />
                    <img src="/star.svg" alt="star" />
                    <img src="/star.svg" alt="star" />
                    <img src="/star.svg" alt="star" />
                  </div>
                </div>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
          <div className={classes.screen}>
            <img src="/dash.jpg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
