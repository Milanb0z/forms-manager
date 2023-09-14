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
  const [username, setUsername] = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/user/signup", { email, password, username })
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
          <Button disabled={!email && !password && !username} type="submit">
            SignUp
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default Login;
