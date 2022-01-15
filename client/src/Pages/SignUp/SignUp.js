import { React, useState } from "react";
import Button from "../../atoms/Button/Button";
import "./index.css";
import axios from "axios";
import Input from '../../molecules/Input/Input';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/users", {
        email: email,
        name: name,
        username: username,
        password: password,
      });
      let resData = res.data;
      if (resData !== null) {
        window.location.assign("/signin");
      }
    } catch (err) {
      const errorMsg = err.response.data["message"];
      window.alert(errorMsg);
    }
  };

  return (
    <section className="login">
      <form className="formContainer" onSubmit={(e) => handleSignUp(e)}>
        <h1>Sign Up</h1>
        <Input
          type="text"
          value={name}
          handleFunction={(e) => setName(e.target.value)}
          aria_label="name"
          placeholder="Name"
        />
        <Input
          type="text"
          value={email}
          handleFunction={(e) => setEmail(e.target.value)}
          aria_label="email"
          placeholder="Email"
        />
        <Input
          type="text"
          value={username}
          handleFunction={(e) => setUsername(e.target.value)}
          aria_label="username"
          placeholder="Username"
        />
        <Input
          type="password"
          value={password}
          handleFunction={(e) => setPassword(e.target.value)}
          aria_label="password"
          placeholder="Password"
        />
        <div className="btnContainer">
          <Button
            type="button_submit"
            name="Sign Up"
            handleFunction={handleSignUp}
          />
        </div>
      </form>
    </section>
  );
};

export default SignUp;
