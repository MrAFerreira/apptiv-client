import React from "react";
import styled from "styled-components";

function FlexRow() {
  const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;
  return <FlexRow />;
}

export default FlexRow;
