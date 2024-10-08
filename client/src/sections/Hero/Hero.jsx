import { Button } from "@ui";
import Header from "@sections/Header/Header";

import classes from "./Hero.module.scss";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className={classes.hero}>
      <section className={classes.content}>
        <Header />
        <div className={classes.main}>
          <div className={classes.text}>
            <h1>Improve your performance using Easy HR.</h1>
            <p>
              Don't let your work be hampered by trivial matters. increase your
              work efficiency with our platform and feel the ease in managing
              employees
            </p>
            <div className={classes.row}>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              <Link to="/form/id/first">
                <Button outline>Demo Form</Button>
              </Link>
            </div>
            <img src="/screen.png" alt="screen" className={classes.screen} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
