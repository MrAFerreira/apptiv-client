import React, { useState } from "react";
import styled from "styled-components";
import ButtonBottom from "../components/ButtonBottom";
import CategoriesCreateEvent from "../components/CategoriesCreateEvent";
import SearchAutoComplete from "../components/SearchAutoComplete";
import UploadPictureButton from "../components/UploadPictureButton";

const CreateEventTag = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*   text-align: left; */

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
    align-self: flex-start;
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.mainOrange};
    margin: 0.5rem;
  }

  .end-date p {
    color: grey;
    text-decoration: underline;
  }

  .picture-input {
    border: none;
    background-color: transparent;
  }
`;

function EventCreation() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [latLng, setLatLng] = useState(null);
  const [startDate, setstartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState(0);
  const [picture, setPicture] = useState("");
  const [showEndDate, setShowEndDate] = useState(false);

  const toggleEndDate = () => {
    setShowEndDate(true);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleStartDate = (e) => {
    setstartDate(e.target.value);
  };

  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  };
  const handlePrice = (e) => setPrice(e.target.value);

  const handleCategories = (e) => setCategories(e.target.check);

  const handlePicture = (file) => setPicture(file);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      title,
      description,
      location,
      latLng,
      startDate,
      endDate,
      price,
      categories,
      picture,
    };
  };

  return (
    <CreateEventTag className="create-event-main">
      <h3>Create an event</h3>
      <form
        onSubmit={handleSubmit}
        className="creat-event-form"
        encType="multipart/form-data"
      >
        <label htmlFor="title">Title*</label>
        <input type="text" name="title" id="title" onChange={handleTitle} />

        <label htmlFor="description">Description*</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={handleDescription}
        />

        <label htmlFor="location">Location*</label>
        <SearchAutoComplete setAddress={setLocation} setLatLng={setLatLng} />

        <label htmlFor="start-date">Start date and time*</label>
        <input
          type="datetime-local"
          name="start-date"
          id="start-date"
          onChange={handleStartDate}
        />

        <button className="end-date" onClick={toggleEndDate}>
          {showEndDate === false ? (
            <p>+ End date and time</p>
          ) : (
            <div className="end-date-option">
              <label id="end-date-text-label" htmlFor="end-date">
                End date and time*
              </label>
              <input
                type="datetime-local"
                name="end-date"
                id="end-date"
                onChange={handleEndDate}
              />
            </div>
          )}
        </button>

        <CategoriesCreateEvent handleCategories={handleCategories} />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          placeholder="0,00"
          onChange={handlePrice}
        />

        <UploadPictureButton handlePicture={handlePicture} />
      </form>
      <ButtonBottom className="create-event-button" type="submit">
        Create Event
      </ButtonBottom>
    </CreateEventTag>
  );
}

export default EventCreation;
