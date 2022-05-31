import React from "react";
import styled from "styled-components";

function EventsCard(props) {
  const { image, title, startDate, price } = props;

  const Cardtag = styled.div`
    margin: 2rem;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 3.5px;
    .img-container {
      padding-bottom: 3.5px;
    }
    .date-price-container {
      display: flex;
      justify-content: space-between;
    }
    .title {
      text-align: left;

      font-weight: 700;
      font-size: 17px;
      line-height: 20px;
      letter-spacing: -0.24px;
      margin: 0;
      color: #282828;
    }

    .cardImage {
      object-fit: cover;
      width: 300px;
      border-radius: 10px;
    }
    .date {
      color: ${({ theme }) => theme.colors.mainOrange};
      font-weight: 600;
      font-size: 15px;
      line-height: 18px;
      text-transform: uppercase;
      letter-spacing: -0.24px;
    }

    .price {
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.24px;
      padding: 0.5rem 0.6rem;
      border-radius: 20px;
    }
  `;

  return (
    <Cardtag>
      <div className="img-container">
        <img className="cardImage" src={image} alt="event" />
      </div>
      <div className="date-price-container">
        <span className="date">{startDate}</span>
        <span class="price">{price} €</span>
      </div>
      <h3 className="title">{title}</h3>
    </Cardtag>
  );
}

export default EventsCard;
