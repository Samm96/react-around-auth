import React from "react";
import UserForm from "./UserForm";
import auth from "../utils/auth";
import { useHistory } from "react-router-dom";

function Register({ onRegister, route }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
        email,
        password,
    };
    onRegister(userData);
  }

  return (
    <UserForm
      buttonText="Sign Up"
      title="Sign up"
      text="Already a member? Log in"
      route={route}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="user-form__input"
        id="email"
        name="email"
        placeholder="Email"
        minLength="2"
        maxLength="40"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        className="user-form__input"
        id="password"
        name="password"
        placeholder="Password"
        minLength="2"
        maxLength="40"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </UserForm>
  );
}

export default Register;
