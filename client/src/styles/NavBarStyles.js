import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavBar = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #030416;
  color: white;
  width: 7rem;
  z-index:10;
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 30px;
  height: 100%;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  display:flex;
  justify-content:center;
  align-items:center;
  aspect-ratio:2/1;
  width:100%;
  
  &.active {
    font-weight: bold;
    background-color:white;
    color: black;
  }
`;

export const LogoutButton = styled.div`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin: 0;
`;

export const AppName = styled.div`
  font-size: 30px;
  padding-top:15px;
  margin-bottom: 10px;
`;

export const SubjectsTabContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index:1;
  .inactive{
    display:none
    }
`;

export const ShowSubjectsTab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  width: 350px;
  padding: 20px;
  background-color: #ffffff;
  padding-left: 7rem;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  margin: 0px 0px 0px 15px;
  z-index: ${(props) => (props.className === "inactive" ? "-1" : "10")};

  h5 {
    cursor: pointer;
    color: grey;
    position: relative;
    width: fit-content;
    margin-left:40px;


    &::before {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background-color: currentColor;
      transition: width 0.3s ease;
    }

    &:hover::before {
      width: 100%;
    }
  }
`;

export const SubjectsList = styled.ul`
  list-style-type: none;
  display:flex;
  flex-direction: column;
  gap: 10px;

  li {
    text-align: left;
    position: relative;
    width: fit-content;
    font-weight: 500;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: black;
      transition: width 0.3s ease;
    }

    &:hover::before {
      width: 100%;
    }

    &:hover {
      text-decoration: none;
    }
  }
`;

export const LineBreak = styled.hr`
    margin: 20px 0;
    border: 0;
    border-top: 1px solid #c7cdd1;
    border-bottom: none;
`;