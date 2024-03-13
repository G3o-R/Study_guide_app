import styled from "styled-components";

export const SignUpPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #F5F7FC;
`;

export const ContainerWrapper = styled.div`
  /* height:100%; */
  padding-top:6rem;
`;

export const SignUpContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items:center;
  flex-grow: 1;
  padding: 40px;
  border: 1px solid #dbdbdb;
  border-radius: 35px;
  width: 350px;
  aspect-ratio: 4/5;
  margin: 0 auto;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  padding-top: 1px;
  padding-bottom: 1px;

  span{
    display:flex;
    flex-direction: row;
    gap:5px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  width: 100%;
  padding-right:15px;
  margin: 0 auto;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  display:flex;
  flex-direction:row;
  align-items:center;
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: #f7f7f7;
  &:focus-within {
    border-color: #324dc7;
    border-radius: 10px;

  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
  background: transparent;
  &:focus{
    outline:none;
  }
`;

export const SignUpButton = styled.button`
  margin-top: 5px;
  width: 100%;
  padding: 10px;
  background-color: #324DC7;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: rgb(25,39,100);
  }
`;

export const LoginLink = styled.p`
  color: #007bff;
  text-decoration: none;
  margin-top: 0;
  cursor: pointer;
`;
export const Error = styled.h4`
  color: red;
  margin:10px;
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