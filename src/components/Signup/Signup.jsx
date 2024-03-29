import { TextInput } from "../TextInput/TextInput";
import { useState } from "react";
import "../../styles/form.css";

export function Signup(props) {
  const [signupData, setSignupData] = useState({});
  const [gender, setGender] = useState("");
  const { onSubmit, ...rest } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(signupData);
  };

  const handleChange = (e) => {
    setSignupData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = (e) => {
    setSignupData({});
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} onChange={handleChange} {...rest}>
      <TextInput name="name" label="Name" placeholder="Enter your name"/>
      <TextInput name="nickname" label="Nickname" placeholder="Enter your nickname" icon="@"/>
      <TextInput name="email" isEmail label="Email" placeholder="Enter your email"/>
      <fieldset>
        <legend>Gender:</legend>
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            id="gender-male"
            checked={gender === "male"}
            onChange={handleGender}
          />
          <label htmlFor="gender-male">male</label>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="female"
            id="gender-female"
            checked={gender === "female"}
            onChange={handleGender}
          />
          <label htmlFor="gender-female">female</label>
        </div>
      </fieldset>
      <TextInput name="password" isPassword label="Password" placeholder="Enter your password"/>
      <TextInput name="repeatPassword" isPassword label="Repeat Password" placeholder="Repeat your password"/>
      <button type="submit">Submit</button>
    </form>
  );
}
