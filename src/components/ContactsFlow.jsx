import React from "react";
import ContactsCard from "./ContactsCard";
import userSamples from "../usersSample.json";

function ContactsFlow({ nextStep }) {
  return (
    <>
      {userSamples.map((user) => {
        return (
          <ContactsCard
            username={user.username}
            image={user.image}
            email={user.email}
          />
        );
      })}
      <button onClick={nextStep}>END</button>
    </>
  );
}

export default ContactsFlow;
