import React, { useState } from "react";
import TopicsFlow from "./TopicsFlow";
import GoalSettingFlow from "./GoalSettingFlow";
import ContactsFlow from "./ContactsFlow";

function MutlipageForm() {
  //create steps for the form pages:
  const [step, setStep] = useState(1);

  // topics, goals, contacts:
  const [topics, setTopics] = useState([]); 
  const [goals, setGoals] = useState(0); 
  const [contacts, setContacts] = useState([]);

  /*   const prevStep = () => {
    if (step === 1) return;
    setStep(step - 1);
  };
 */
  const nextStep = () => {
    if (step > 3) return;
    setStep(step + 1);
  };

  const handleSubmit = (input) => (e) => {
    e.preventDefault();
    const body = {
      topics: topics,
      goals: goals,
      contacts: contacts,
    };
  };

  switch (step) {
    case 1:
      return (
        <TopicsFlow
          // prevStep={prevStep}
          nextStep={nextStep}
          setTopics={setTopics}
        />
      );
    case 2:
      return (
        <GoalSettingFlow
          // prevStep={prevStep}
          nextStep={nextStep}
          setGoals={setGoals}
          goals={goals}
        />
      );
    case 3:
      return (
        <ContactsFlow
          // prevStep={prevStep}
          nextStep={nextStep}
          setContacts={setContacts}
          handleSubmit={handleSubmit}
          contacts={contacts}
        />
      );
    default:
      return;
  }
}

export default MutlipageForm;
