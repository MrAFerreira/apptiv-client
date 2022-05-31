import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.mainOrange || "#EBB220"};
  border-style: none;
  color: ${({ theme }) => theme.colors.white || " #ffffff"};
  width: 100%;
  margin: 1rem;
  border-radius: 8px;
  padding: 12px 64px 12px 64;
  text-align: center;
`;

function ButtonBottom({ children }) {
  return (
    <div>
      <StyledButton>{children}</StyledButton>
    </div>
  );
}
export default ButtonBottom;
