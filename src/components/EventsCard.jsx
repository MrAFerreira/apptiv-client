import React from "react";
import styled from "styled-components";

function EventsCard(props) {
  const { image, title, startDate, price } = props;

  const Cardtag = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    border-radius: 15px;

    .title {
      text-align: center;
    }

    .cardImage {
      object-fit: cover;
    }
  `;

  return (
    <Cardtag>
      <div>
        <img className="cardImage" src={image} />
      </div>
      <div className="date-price-container">
        <span>{startDate}</span> <span>{price} €</span>
        <h3>{title}</h3>
      </div>
    </Cardtag>
  );
}

export default EventsCard;
