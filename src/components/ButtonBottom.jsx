import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.mainOrange || "#EBB220"};
  border-style: none;
  color: ${({ theme }) => theme.colors.white || " #ffffff"};
  width: 100%;
  height: 3rem;
  margin: 1rem;
  border-radius: 8px;
  padding: 80px 20px 80px 20;
  text-align: center;
  font-size: 22px;
`;

function ButtonBottom({ children }) {
  return (
    <div>
      <StyledButton>{children}</StyledButton>
    </div>
  );
}
export default ButtonBottom;
