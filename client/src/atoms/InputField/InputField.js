import React from "react";

const InputField = (props) => {
  const { type, value, handleFunction, placeholder, aria_label } = props;
  return (
    <input
      type={type}
      required
      className="form-control"
      placeholder={placeholder}
      aria-label={aria_label}
      aria-describedby="basic-addon1"
      value={value}
      onChange={handleFunction}
    ></input>
  );
};

export default InputField;
