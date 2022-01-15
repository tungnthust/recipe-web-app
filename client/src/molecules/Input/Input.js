import React from "react";
import InputField from "../../atoms/InputField/InputField";
import Label from "../../atoms/Label/Label";

const Input = (props) => {
  const { type, value, handleFunction, placeholder, aria_label } = props;
  return (
    <>
      <Label name={placeholder} />
      <InputField
        value={value}
        placeholder={placeholder}
        aria_label={aria_label}
        type={type}
        handleFunction={handleFunction}
      />
    </>
  );
};

export default Input;
