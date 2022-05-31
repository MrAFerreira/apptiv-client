import React from "react";
import styled from "styled-components";
import SearchLogo from "../assets/images/search.svg";

const handleSubmit = (e) => {
  e.preventDefault();
};

const FormTag = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  input {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 8px;
    height: 46px;
    border: 0px;
    width: 223px;
    padding-left: 35px;
  }
  img {
    position: absolute;
    top: 12px;
    left: 10px;
    pointer-events: none;
  }
`;

function SearchBar() {
  return (
    <FormTag>
      <form submit={handleSubmit} className="form">
        <input type="text" placeholder="Search" />
        <img src={SearchLogo} alt="search logo" />
      </form>
    </FormTag>
  );
}

export default SearchBar;
