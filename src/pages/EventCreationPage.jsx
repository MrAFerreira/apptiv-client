import React from "react";

function EventCreation() {
  return (
    <section className="create-event-main">
      <h3>Create an event</h3>
      <form>
        <label htmlFor="title">Title*</label>
        <input type="text" name="title" id="title" />

        <label htmlFor="description">Description*</label>
        <input type="text" name="description" id="description" />

        <label htmlFor="location">Location*</label>
        <input type="" name="location" id="location" />

        <label htmlFor="start-date">Start date and time*</label>
        <input type="datetime-local" name="start-date" id="start-date" />
      </form>
    </section>
  );
}

export default EventCreation;
