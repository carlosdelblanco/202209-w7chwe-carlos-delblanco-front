import React, { useState } from "react";
import useUser from "../../hooks/useUser";
import { UserRegister } from "../../types/types";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  const { registerUser } = useUser();
  const emptyFormData = {
    username: "",
    password: "",
    email: "",
  };

  const [formData, setFormData] = useState(emptyFormData);
  const formDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const submitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const submitData: UserRegister = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };
    registerUser(submitData);
  };

  return (
    <>
      <RegisterFormStyled>
        <h2>Your social network</h2>
        <div className="loginData">
          <form onSubmit={(event) => submitForm(event)}>
            <label htmlFor="username">Username</label>
            <input
              onChange={formDataChange}
              type="text"
              id="username"
              placeholder="name surname"
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={formDataChange}
              type="password"
              id="password"
              placeholder="!P@ssword22"
            />
            <label htmlFor="email">email</label>
            <input
              onChange={formDataChange}
              type="text"
              id="email"
              placeholder="example@example.com"
            />
            <button>Register</button>
          </form>
        </div>
      </RegisterFormStyled>
    </>
  );
};

export default RegisterForm;
