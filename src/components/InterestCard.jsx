import React from "react";
import styled from "styled-components";

const InterestCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 104px;
  gap: 4px;
  margin: 0.5rem auto;

  .logo-container {
    width: 104px;
    height: 104px;
    border: 1px solid #bfbfbf;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
    size: 70%;
  }
  .title {
    text-transform: capitalize;
    margin: 0;
  }
`;

function Interestcard(props) {
  const { interest, handleCheck } = props;

  

  return (
    <InterestCard>
      <div className="logo-container" onClick={handleCheck}>
        <img className="logo" src={interest.icon} alt="Icon" />
      </div>
      <h4 className="title">{interest.label}</h4>
    </InterestCard>
  );
}

export default Interestcard;
