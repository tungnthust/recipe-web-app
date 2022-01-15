import { React, useState } from "react";
import Button from "../../atoms/Button/Button";
import "./index.css";
import axios from "axios";
import Input from "../../molecules/Input/Input";

const API = "http://localhost:4000/api";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (user) => {
    user.preventDefault();
    try {
      const res = await axios.post(API + "/users/login", {
        username: username,
        password: password,
      });
      let resData = res.data;
      if (res.data != null) {
        if (res.status === 200) {
          localStorage.setItem("token", resData["token"]);
          localStorage.setItem("username", resData["user"]["username"]);
          localStorage.setItem("name", resData["user"]["name"]);
          localStorage.setItem("id", resData["user"]["_id"]);
          window.location.reload();
        }
      }
    } catch (err) {
      window.alert("Username or Password not correct!");
    }
  };
  return (
    <section className="login">
      <form className="formContainer" onSubmit={(e) => handleLogin(e)}>
        <h1>Sign In</h1>
        <Input
          value={username}
          placeholder="Username"
          aria_label="Username"
          type="text"
          handleFunction={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          handleFunction={(e) => setPassword(e.target.value)}
          placeholder="Password"
          aria_label="Password"
        />
        <a href="/signup">Don't have an account?</a>
        <a href="/recover">Forget your password?</a>
        <div className="btnContainer">
          <Button
            type="button_submit"
            name="Sign In"
            handleFunction={handleLogin}
          />
        </div>
      </form>
    </section>
  );
};
export default SignIn;
