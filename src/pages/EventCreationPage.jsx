import React, { useState } from "react";
import styled from "styled-components";
import ButtonBottom from "../components/ButtonBottom";
import CategoriesCreateEvent from "../components/CategoriesCreateEvent";
import FontStyles from "../styles/fontStyles";

const CreateEventTag = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;

  h3 {
    font-size: 2.3rem;
  }

  .creat-event-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  label {
    align-self: flex-start;
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.mainOrange};
    margin: 0.5rem;
  }

  input,
  select {
    font-family: "Avenir";
    padding-left: 1rem;
    border: 0.05rem solid grey;
    height: 5vh;
    width: 80vw;
    border-radius: 10px;
  }

  select {
    width: 85vw;
  }

  .end-date {
    background-color: transparent;
    border: none;
  }

  .end-date-option {
    margin: 0.8rem;
  }

  .end-date-option label {
    font-size: 1rem;
  }

  .end-date p {
    color: grey;
    text-decoration: underline;
  }
`;

function EventCreation() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setstartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState(0);
  const [showEndDate, setShowEndDate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleEndDate = () => {
    setShowEndDate(true);
  };

  return (
    <CreateEventTag className="create-event-main">
      <h3>Create an event</h3>
      <form onSubmit={handleSubmit} className="creat-event-form">
        <label htmlFor="title">Title*</label>
        <input type="text" name="title" id="title" />

        <label htmlFor="description">Description*</label>
        <input type="text" name="description" id="description" />

        <label htmlFor="location">Location*</label>
        <select id="location" name="location">
          <option value="Choose location" selected>
            Choose location
          </option>
        </select>

        <label htmlFor="start-date">Start date and time*</label>
        <input type="datetime-local" name="start-date" id="start-date" />

        <button className="end-date" onClick={toggleEndDate}>
          {showEndDate === false ? (
            <p>+ End date and time</p>
          ) : (
            <div className="end-date-option">
              <label id="end-date-text-label" htmlFor="end-date">
                End date and time*
              </label>
              <input type="datetime-local" name="end-date" id="end-date" />
            </div>
          )}
        </button>

        <CategoriesCreateEvent />

        <label htmlFor="price">Price</label>
        <input type="number" name="price" id="price" placeholder="0,00" />
      </form>
      <ButtonBottom type="submit">Create Event</ButtonBottom>
    </CreateEventTag>
  );
}

export default EventCreation;
