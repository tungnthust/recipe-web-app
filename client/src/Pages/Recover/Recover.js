import { React, useState } from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../molecules/Input/Input";
import "./index.css";
import axios from "axios";
const Recover = () => {
  const [email, setEmail] = useState("");

  const handleRecover = async (Event) => {
    Event.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/users/resetpass",
        {
          email: email,
        }
      );
      let resData = res.data;
      if (resData !== null) {
        window.alert("Check new password in your email!");
      }
    } catch {
      window.alert("Email not found!");
    }
  };
  return (
    <section className="login">
      <form className="formContainer" onSubmit={(e) => handleRecover(e)}>
        <h1>Recover</h1>
        <Input
          value={email}
          placeholder="Email"
          aria_label="Email"
          type="text"
          handleFunction={(e) => setEmail(e.target.value)}
        />
        <div className="btnContainer">
          <Button
            type="button_submit"
            name="Recover"
            handleFunction={handleRecover}
          />
        </div>
      </form>
    </section>
  );
};
export default Recover;
