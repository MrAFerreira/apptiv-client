import "./App.css";
//Package imports
import EventsCard from "./components/EventsCard";

import { Routes, Route } from "react-router-dom";

//Components and Pages imports
import Appbar from "./components/Appbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Appbar />
      <EventsCard
        title="yoga"
        startDate="24. May 2022"
        price="3"
        image="https://images.unsplash.com/photo-1639333586638-fb4e185084b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
      />
    </div>
  );
}

export default App;
