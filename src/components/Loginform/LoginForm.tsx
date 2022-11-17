import React, { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { UserCredentials } from "../../types/types";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const emptyFormData = {
    username: "",
    password: "",
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

    const submitData: UserCredentials = {
      username: formData.username,
      password: formData.password,
    };
    loginUser(submitData);
  };

  return (
    <>
      <LoginFormStyled>
        <div className="loginData">
          <h1 className="loginData__title">Please login ...</h1>
          <form onSubmit={(event) => submitForm(event)}>
            <div>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="name surname"
                className="loginData__field"
                aria-label="username-input"
                onChange={formDataChange}
                autoComplete="off"
                required
              />
              <label className="loginData__label" htmlFor="username"></label>
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="loginData__field"
                aria-label="password-input"
                onChange={formDataChange}
                autoComplete="off"
                required
              />
              <label className="loginData__label" htmlFor="password"></label>
            </div>
            <button>Login</button>
          </form>
          <span>Create an account</span>
          <Link to="/register">Register</Link>
        </div>
      </LoginFormStyled>
    </>
  );
};

export default LoginForm;
