import { useState } from "react";
import {
  ContainerWrapper,
  SignUpPage,
  SignUpContainer,
  Title,
  Form,
  InputField,
  SignUpButton,
  LoginLink,
  LoginContainer,
  Error,
  FormGroup,
  ButtonContainer,
  ShowButton
} from "../styles/SignUpStyles.js";

import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const [signUpData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const { username, email, password, password_confirmation } = signUpData;

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setSignupData({ ...signUpData, [name]: value });
  }

  function handleSignUpSubmit(e) {
    e.preventDefault();
    console.log(signUpData)
  }

  function navigateToLogin(){
    navigate("/")
  }

  const showButton = (
    <ButtonContainer>
      {password.length > 0 || password_confirmation.length > 0 ?
      <ShowButton type="button" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? "Hide": "Show"}</ShowButton>
    : null}
    </ButtonContainer>
  )

  return (
    <SignUpPage>
      <ContainerWrapper>
        <SignUpContainer>
          <Title>Create An Account</Title>
          <Form onSubmit={handleSignUpSubmit}>
            <FormGroup>
            <InputField
              type="text"
              name="username"
              value={username}
              placeholder="Username"
              onChange={handleChange}
              />
              </FormGroup>
            <FormGroup>
            <InputField
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
              />
              </FormGroup>
              <FormGroup>
            <InputField
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Password"
              autoComplete="false"
              onChange={handleChange}
              />
              {showButton}
              </FormGroup>
            <FormGroup>
            <InputField
              type={showPassword ? "text" : "password"}
              name="password_confirmation"
              value={password_confirmation}
              placeholder="Confirm Password"
              autoComplete="false"
              onChange={handleChange}
              />
              {showButton}
              </FormGroup>
            <SignUpButton type="submit">Sign Up</SignUpButton>
          </Form>

        <LoginContainer>
          <span>
            Already have an account? <LoginLink onClick={navigateToLogin}>Log In</LoginLink>
          </span>
        </LoginContainer>
        </SignUpContainer>
      </ContainerWrapper>
    </SignUpPage>
  );
}

export default SignUp;