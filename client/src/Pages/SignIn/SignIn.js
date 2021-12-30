import { React,useState } from "react";
import {Button} from "@material-ui/core";
import './index.css';
import axios from 'axios';

const API = "http://localhost:4000";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (user) => {
    user.preventDefault();
    console.log(username);
    console.log(password);
    try {
      const res = await axios.post(API + "/users/login", {
        username: username,
        password: password,
      });
      let resData = res.data;
      if (res.data != null) {
        if (res.status === 200) {
          localStorage.setItem("token", resData["token"]);
          localStorage.setItem("username", username);
        }
      }
      return resData;
    } catch (err) {
      window.alert("username or Password not correct!");
    }
  };
  return (
    <section className="login">
      <form className="formContainer" onSubmit={(e) => handleLogin(e)}>
        <h1>Sign In</h1>
        <label>Username</label>
        <input
          type="username"
          autoFocus
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          autoFocus
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="/signup">Don't have an account?</a>
        <a href="/recover">Forget your password?</a>
        <div className="btnContainer">
          <Button type="submit" variant="contained" color="primary">
            Sign In
          </Button>
        </div>
      </form>
    </section>
  );
};
export default SignIn;