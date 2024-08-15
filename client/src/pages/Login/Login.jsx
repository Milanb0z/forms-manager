import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

import { AnimatePresence, motion } from "framer-motion";

import axios from "../../axios.default";

import { UserContext } from "../../context/user.context";

import classes from "./Login.module.scss";

import { Button, Card, Input } from "@ui";
import useInput from "@hooks/useInput";
import { Link } from "react-router-dom";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import InfoSide from "@components/InfoSide/InfoSide";

const modelVariants = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const Login = () => {
  const [, setUser] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .post("/user/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        toast.done("Logged In Succesfully");
        setIsLoading(false);
        setUser(res.data.user);
        navigate("/dashboard");
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(err.response.data.error);
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
