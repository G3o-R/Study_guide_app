import styled from "styled-components";

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;



export const ContainerWrapper = styled.div`
  height:100%;
  padding-top:6rem;
`;

export const FormContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items:center;
  flex-grow: 1;
  padding: 40px;
  border: 1px solid #dbdbdb;
  border-radius: 35px;
  width: 100%;
  max-width: 350px;
  aspect-ratio: 7/9;
  margin: 0 auto;
`;

export const LoginForm = styled.form`
  max-width: 300px;
  margin: 0 auto;
`;

export const Error = styled.h4`
  color: red;
  justify-self:center;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  display:flex;
  flex-direction:row;
  align-items:center;
  background-color: #f7f7f7;
  border: 2px solid transparent;
  border-radius: 10px;
  &:focus-within {
    border-color: #324dc7;
    border-radius: 10px;

  }
`;

export const ButtonContainer = styled.div`
  width:40px;
  margin-right:15px;

`;

export const ShowButton = styled.button`
  border:none;
  background:transparent;
  padding-right:10px;
  cursor: pointer;
  &:hover{
    opacity:.5;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 3px;
  background:transparent;
  &:focus {
    outline:none;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #324DC7;
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgb(25,39,100);
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  aspect-ratio: 8/1;
  margin-top: auto;
  span{
    display: flex;
    flex-direction:row;
    gap:5px;
  }
`;

export const SignUpLink = styled.p`
  color: #007bff;
  text-decoration: none;
  margin-top:0;
  cursor: pointer;
`;