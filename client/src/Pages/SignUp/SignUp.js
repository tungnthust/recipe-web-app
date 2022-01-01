import { React, useState } from "react";
import { Button } from "@material-ui/core";
import "./index.css";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/users", {
        email: email,
        name: name,
        username: username,
        password: password,
      });
      let resData = res.data;
      if(resData!==null){
          window.alert('Register successful');
      }
      window.location.assign("/signin");
    } catch (err) {
      const errorMsg= err.response.data["message"]
      window.alert(errorMsg);
    }
  };

  return (
    <section className="login">
      <form className="formContainer" onSubmit={(e) => handleSignUp(e)}>
        <h1>Sign Up</h1>
        <label>Your Name</label>
        <input
          type="name"
          autoFocus
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
        <div className="btnContainer">
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
