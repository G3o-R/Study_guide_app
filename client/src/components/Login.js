import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LoginPage,
  LoginWrapper,
  LoginForm,
  Title,
  LoginSubmit,
  CreateAccount,
  SignUpLinkWrapper
} from "../styles/LoginStyles";

export default function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  const { username, password } = loginData;

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setLoginData({ ...loginData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginData);
  }

  return (
    <LoginPage>
      <LoginWrapper>
        <LoginForm onSubmit={handleSubmit}>
          <Title>The Study Guide App</Title>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            placeholder="Username..."
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <LoginSubmit type="submit">Login</LoginSubmit>
        </LoginForm>
        <CreateAccount>
          <SignUpLinkWrapper>
            <p>
              Don't have an account?{" "}
              <span onClick={() => navigate("/sign-up")}>Sign up</span>
            </p>
          </SignUpLinkWrapper>
        </CreateAccount>
      </LoginWrapper>
    </LoginPage>
  );
}