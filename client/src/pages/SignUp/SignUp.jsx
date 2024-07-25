import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import axios from "../../axios.default";

import { UserContext } from "@context/user.context";

import classes from "./SignUp.module.scss";

import { Button, Card, Input } from "@ui";
import useInput from "@hooks/useInput";
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
  const [username, setUsername] = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .post("/user/signup", { email, password, username })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        setIsLoading(false);
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
        <ToastContainer theme="dark" position="bottom-center" />
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
          <h2>SignUp</h2>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Input label="Username" value={username} onChange={setUsername} />
            <Input
              label="Email"
              placeholder="example@email.com"
              type="email"
              value={email}
              onChange={setEmail}
            />

            <Input
              label="Password"
              type="password"
              value={password}
              onChange={setPassword}
            />
            <p>
              Already have account?{" "}
              <Link to="/login">
                <span>Login Here</span>
              </Link>
            </p>
            <Button disabled={!email && !password && !username} type="submit">
              SignUp
            </Button>
          </form>
        </Card>
      </motion.div>
    </section>
  );
};

export default Login;
