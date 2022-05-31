import React from "react";
import usersSample from "../usersSample.json";
import styled from "styled-components";

const StyledContacts = styled.div`
  background-color: ${({ theme }) => theme.colors.white || "#ffffff"};
  border-style: none;
  font-size: 22px;
  padding-left: 10px;
  display: flex;
  margin: 10px;

  .contacts-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .avatar-img {
    border-radius: 50%;
    display: inline-block;
    border-style: none;
    height: ${(props) => props.width || "56px"};
    width: ${(props) => props.width || "56px"};
  }
  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 12px;
  }

  .contact-name {
    color: ${({ theme }) => theme.colors.black || " #000000"};
    font-size: 14px;
    margin: 0;
  }
  .contact-email {
    color: ${({ theme }) => theme.colors.lightGrey || "#C8C8C9"};
    font-size: 14px;
    margin: 0;
  }

  .checkbox {
    margin-left: 50px;
  }
`;

function ContactsCard(props) {
  const { username, image, email } = props;

  

  return (
    <StyledContacts>
      <div className="contacts-container">
        <img
          className="avatar-img"
          src={image}
          alt="contactProfilePicture"
        />
        <div className="text-container">
          <p className="contact-name">{username}</p>
          <p className="contact-email">{email}</p>
        </div>
        <input className="checkbox" type="checkbox" name="" id="" />
      </div>
    </StyledContacts>
  );
}

export default ContactsCard;
