import React, { useState } from "react";
import ButtonBottom from "./ButtonBottom";
import styled from "styled-components";
import InterestCard from "./InterestCard";
import InterestComponent from "./InterestComponent";
import sportsIcon from "../assets/images/sports.svg";
import socialIcon from "../assets/images/fluent_people-team-16-regular.svg";
import healthIcon from "../assets/images/spa.svg";
import travelIcon from "../assets/images/fontisto_world-o.svg";
import familyIcon from "../assets/images/carbon_pedestrian-family.svg";
import brunchIcon from "../assets/images/brunch_dining.svg";
import spiritualityIcon from "../assets/images/self_improvement.svg";
import danceIcon from "../assets/images/mdi_human-female-dance.svg";
import questionIcon from "../assets/images/bi_question-lg.svg";

const interestsMatrix = [
  { icon: sportsIcon, label: "sports" },
  { icon: socialIcon, label: "social" },
  { icon: healthIcon, label: "health" },
  { icon: travelIcon, label: "travel" },
  { icon: familyIcon, label: "family" },
  { icon: brunchIcon, label: "brunch" },
  { icon: spiritualityIcon, label: "spirituality" },
  { icon: danceIcon, label: "dance" },
  { icon: questionIcon, label: "other" },
];

const InterestContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
`;

function TopicsFlow({ nextStep, topics, setTopics }) {
  const [interests, setInterests] = useState([]);

  const handleCheck = (item) => {
    setInterests([...interests, item]);
  };

  const handleClick = (e) => {
    e.preventDefault()
    setTopics(interests);
    nextStep();
  };

  return (
    <InterestContainer>
      {interestsMatrix.map((item) => {
        return (
          <InterestCard
            handleCheck={() => handleCheck(item.label)}
            interest={item}
          />
        );
      })}
      <button onClick={handleClick}>Continue</button>
    </InterestContainer>
  );
}

export default TopicsFlow;
