import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import axios from "../../axios.default";

import classes from "./Login.module.scss";

import { Button, Card, Input } from "@ui";
import useInput from "@hooks/useInput";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import InfoSide from "@components/InfoSide/InfoSide";
import { useLoginMutation } from "@store/authSlice";

const modelVariants = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const Login = () => {
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginMutation();

  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();

    loginUser({ email, password })
      .unwrap()
      .then((res) => {
        console.log(res);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className={classes.login}>
      <InfoSide />

      <motion.div
        variants={modelVariants}
        initial="initial"
        animate="animate"
        className={classes.right}
      >
        <Card className={classes.modal}>
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={classes.loading}
              >
                <LoadingSpinner />
              </motion.div>
            )}
          </AnimatePresence>
          <h2>Login</h2>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Input
              label="Email"
              placeholder="email"
              type="email"
              value={email}
              onChange={setEmail}
            />
            <Input
              label="Password"
              placeholder="password"
              type="password"
              value={password}
              onChange={setPassword}
            />
            <p>
              Don't have account?{" "}
              <Link to="/signup">
                <span>SignUp Here</span>
              </Link>
            </p>
            <Button disabled={!email || !password} type="submit">
              Login
            </Button>
          </form>
        </Card>
      </motion.div>
    </section>
  );
};

export default Login;
