import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import eventIcon from "../assets/images/add-event.svg";
import bookingIcon from "../assets/images/event_available.svg";
import progressIcon from "../assets/images/timeline.svg";
import communityIcon from "../assets/images/group.svg";

const NavBarBottom = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  background-color: black;

  width: 100%;
  height: 15vh;

  position: fixed;
  bottom: 0;
  left: 0;
  border-radius: 24px 24px 0px 0px;
`;

const SelectedIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 0;
  width: 52px;
  height: 52px;
  &:active {
    background-color: #ebb220;
    border-radius: 52px;
  }
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:hover ${SelectedIcon} {
    background-color: #ebb220;
    border-radius: 52px;
  }
`;

const NavIcons = styled.img`
  margin-bottom: 0;
  -webkit-filter: invert(100%);
`;

const StyledText = styled.p`
  color: white;
  text-align: center;
`;

function Appbar() {
  return (
    <>
      <NavBarBottom>
        <NavLink to="/event-list">
          <SelectedIcon>
            <NavIcons src={eventIcon} />
          </SelectedIcon>
          <StyledText>Events</StyledText>
        </NavLink>
        <NavLink to="/my-bookings">
          <SelectedIcon>
            <NavIcons src={bookingIcon} alt="Booking Icon" />
          </SelectedIcon>
          <StyledText>Bookings</StyledText>
        </NavLink>
        <NavLink to="/your-progress">
          <SelectedIcon>
            <NavIcons src={progressIcon} alt="Progress Icon" />
          </SelectedIcon>
          <StyledText>Progress</StyledText>
        </NavLink>
        <NavLink to="">
          <SelectedIcon>
            <NavIcons src={communityIcon} alt="Community Icon" />
          </SelectedIcon>
          <StyledText>Community</StyledText>
        </NavLink>
      </NavBarBottom>
    </>
  );
}

export default Appbar;
