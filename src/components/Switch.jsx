import React from "react";
import styled from "styled-components";

const StyledSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;

  p {
    margin-top: 22px;
  }

  input {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 60px;
    height: 30px;
    background: #d6d6d6;
    border-radius: 50px;
    position: relative;
    transition: background-color 0.2s;
  }

  label span {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 25px;
    height: 25px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }

  input:checked + label span {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  label:active span {
    width: 60px;
  }
`;

const Switch = ({ isOn, handleToggle, onColor }) => {
  return (
    <>
      <StyledSwitch className="switch1">
        <p className="free">Only free events</p>
        <div>
          <input
            checked={isOn}
            onChange={handleToggle}
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
          />
          <label
            style={{ background: isOn && onColor }}
            className="react-switch-label"
            htmlFor={`react-switch-new`}
          >
            <span className={`react-switch-button`} />
          </label>
        </div>
      </StyledSwitch>
    </>
  );
};

export default Switch;
