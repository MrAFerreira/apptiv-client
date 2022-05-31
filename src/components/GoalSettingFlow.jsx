import React, { useState } from "react";
import styled from "styled-components";

const GoalsTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .goals-intro h1 {
    font-size: 1.5rem;
  }

  .goals-intro p {
    color: grey;
  }

  .changing-count {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .changing-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.2rem solid yellow;
    background-color: transparent;
    border-radius: 50%;
    padding: 1.3rem;
    margin: 1rem;
    width: 20px;
    height: 20px;
  }
`;

function GoalSettingFlow() {
  let [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prevCount) => {
      return (prevCount += 1);
    });
  };

  const minusCount = () => {
    setCount((prevCount) => {
      if (prevCount <= 0) {
        return 0;
      } else {
        return prevCount - 1;
      }
    });
  };

  return (
    <GoalsTag>
      <div className="goals-intro">
        <div>'Steps bar place'</div>
        <h1>Your goals</h1>
        <p>How many activities you want to do every week</p>
      </div>
      <div className="changing-count">
        <button className="changing-buttons" onClick={minusCount}>
          -
        </button>
        <p>{count}</p>
        <button className="changing-buttons" onClick={addCount}>
          +
        </button>
      </div>

      <button>Styled Continue Button</button>
    </GoalsTag>
  );
}

export default GoalSettingFlow;
