import { React,useState } from "react";
import {Button} from "@material-ui/core";
import './index.css';
import axios from 'axios';

const API = "http://localhost:4000";

const SignInWithEmail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (user) => {
    user.preventDefault();
    try {
      const res = await axios.post(API + "/users/login", {
        username: email,
        password: password,
      });
      let resData = res.data;
      if (res.data != null) {
        if (res.status === 200) {
          localStorage.setItem("token", resData["token"]);
          localStorage.setItem("email", email);
          window.location.reload();
        }
      }
      return resData;
    } catch (err) {
      window.alert("Email or Password not correct!");
    }
  };
  return (
    <section className="login">
      <form className="formContainer" onSubmit={(e) => handleLogin(e)}>
        <h1>Sign In With Email</h1>
        <label>Email</label>
        <input
          type="email"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
export default SignInWithEmail;