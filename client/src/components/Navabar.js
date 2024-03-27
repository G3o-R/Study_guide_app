import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { logOutUser } from "../redux/features/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import {
  StyledNavBar,
  NavLinks,
  NavLink,
  LogoutButton,
  AppName,
  MoreContainer,
  MoreTab,
  SubjectsTabContainer,
  ShowSubjectsTab,
  SubjectsList,
  LineBreak
} from "../styles/NavBarStyles";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const [showSubjects, setShowSubjects] = useState(false)
  const moreTabRef = useRef(null);
  const subjectsTabRef = useRef(null)
  // console.log(user)

  useEffect(() => {
    function handleOutsideClick(event) {
      if (subjectsTabRef.current && !subjectsTabRef.current.contains(event.target)) {
        setShowSubjects(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  function handleLogOut() {
    // dispatch(logOutUser());
    navigate("/login");
  }

  function handleSubjectClick(e){
    e.preventDefault()
    setShowSubjects(!showSubjects)

  }

  const subjectsToDisplayInTab = user.folders.map((folder)=>(
    <li onClick={()=>navigate(`/subjects/${folder.subject_name}`)}>{folder.subject_name}</li>
  ))

  return (
    <>
      <StyledNavBar>
        <NavLinks>
          <NavLink to="/" className={location.pathname === "/" && !showSubjects ? "active" : ""}>
            The Desk
          </NavLink>
          <NavLink
            onClick={handleSubjectClick}
            className={showSubjects ? "active" : ""}
            ref={subjectsTabRef}
          >
            Subjects
          </NavLink>
          <NavLink
            to={`/messages`}
            className={
              location.pathname === `/messages` && !showSubjects ? "active" : ""
            }
          >
            Messages
          </NavLink>
          <NavLink
            to={`/calendar`}
            className={
              location.pathname === `/calendar` && !showSubjects ? "active" : ""
            }
          >
            Calendar
          </NavLink>
          <NavLink
            to={`/account`}
            className={
              location.pathname === `/account` && !showSubjects ? "active" : ""
            }
          >
            Account
          </NavLink>
        </NavLinks>
      </StyledNavBar>
      {/* I'll worry about styling the SubjectsTab later */}
      <SubjectsTabContainer ref={subjectsTabRef}>
      <ShowSubjectsTab className={!showSubjects ? "inactive" : ""}>
        <h4>Subjects</h4>
        <LineBreak />
        <h5 onClick={(e)=> navigate("/subjects")}>All Folders</h5>
        <LineBreak />
        <SubjectsList>
          {subjectsToDisplayInTab}
        </SubjectsList>
        </ShowSubjectsTab>
      </SubjectsTabContainer>
    </>
  );
}