import { useState } from "react";
import { TextInput } from "../TextInput/TextInput";
import "../../styles/form.css";

export function Signin(props) {
  const [signinData, setSigninData] = useState({});
  const { onSubmit, ...rest } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(signinData);
  };

  const handleChange = (e) => {
    setSigninData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = (e) => {
    setSigninData({});
  };

  return (
    <form onSubmit={handleSubmit} onChange={handleChange} {...rest}>
      <TextInput name="email" label="Email" isEmail />
      <TextInput name="password" label="Password" isPassword />
      <button type="submit">Submit</button>
    </form>
  );
}
