import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LoginPage,
  ContainerWrapper,
  FormContainer,
  LoginForm,
  Title,
  FormGroup,
  ShowButton,
  ButtonContainer,
  Input,
  SubmitButton,
  SignUpContainer,
  SignUpLink,
  // Error
} from "../styles/LoginStyles";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginData;

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    console.log(loginData)
  }

  function navigateToSignUp() {
    navigate("/sign-up")
  }

  const showButton = (
    <ButtonContainer>
      {password.length > 0 ? (
        <ShowButton type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"}
        </ShowButton>
      ) : null}
    </ButtonContainer>
  );

  return (
    <LoginPage>
      <ContainerWrapper>
        <FormContainer>
          <LoginForm onSubmit={handleLoginSubmit}>
            <Title>The Study Guide App</Title>
            <FormGroup>
              <Input
                type="text"
                id="username"
                name="username"
                value={username}
                placeholder="Username..."
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                placeholder="Password..."
                autoComplete="false"
                onChange={handleChange}
              />
              {showButton}
            </FormGroup>
            <SubmitButton type="submit">Log in</SubmitButton>
          </LoginForm>
          {/* {errors.map((error) => (
            <Error key={error}>{error}</Error>
          ))} */}
        <SignUpContainer>
          <span>
            Don't have an account?
            <SignUpLink onClick={(e)=>navigateToSignUp(e)}>Sign up</SignUpLink>
          </span>
        </SignUpContainer>
        </FormContainer>
      </ContainerWrapper>
    </LoginPage>
  );
}