import { useContext } from "react";
import { useNavigate } from "react-router";

import axios from "../axios.default";

import { UserContext } from "../context/user.context";

import classes from "./Login.module.scss";

import { toast } from "react-toast";
import { Button, Card, Input } from "@ui";
import useInput from "@hooks/useInput";

// TODO remove, this demo shouldn't need to reset the theme.

const Login = () => {
  const [, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/user/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        navigate("/form");
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };

  return (
    <section className={classes.login}>
      <Card className={classes.modal}>
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
          <Button type="submit">Login</Button>
        </form>
      </Card>
    </section>
  );
};

export default Login;
