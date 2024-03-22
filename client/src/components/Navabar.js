

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
  MoreTab
} from "../styles/NavBarStyles";
// import { ReactComponent as HomeSVG } from "../images/Home.svg";
// import { ReactComponent as Create } from "../images/Create.svg";
// import { ReactComponent as More } from "../images/Settings.svg";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const [showMore, SetShowMore] = useState(false);
  const moreTabRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (moreTabRef.current && !moreTabRef.current.contains(event.target)) {
        SetShowMore(false);
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

  return (
    <>
      <StyledNavBar>
        <NavLinks>
          <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
            The Desk
          </NavLink>
          <NavLink
            to="/subjects"
            isDisabled="true"
            className={location.pathname === "/subjects" ? "active" : ""}
          >
            Subjects
          </NavLink>
          <NavLink
            to={`/messages`}
            className={
              location.pathname === `/messages` ? "active" : ""
            }
          >
            Messages
          </NavLink>
          <NavLink
            to={`/calendar`}
            className={
              location.pathname === `/calendar` ? "active" : ""
            }
          >
            Calendar
          </NavLink>
          <NavLink
            to={`/account`}
            className={
              location.pathname === `/account` ? "active" : ""
            }
          >
            Account
          </NavLink>
        </NavLinks>
        <MoreContainer onClick={() => SetShowMore(!showMore)} ref={moreTabRef}>
          {/* <More className="more-btn" /> More */}
          <MoreTab className={showMore ? "active" : "inactive"} ref={moreTabRef}>
            <LogoutButton onClick={handleLogOut} className="btns">
              Log Out
            </LogoutButton>
          </MoreTab>
        </MoreContainer>
      </StyledNavBar>
    </>
  );
}