import "./App.css";
//Package imports

import { Routes, Route } from "react-router-dom";

//Components and Pages imports
import Appbar from "./components/Appbar";
import WelcomePage from "./pages/WelcomePage";
import GoalSettingFlow from "./components/GoalSettingFlow";

function App() {
  return (
    <div className="App">
      <GoalSettingFlow />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
      <Appbar />
    </div>
  );
}

export default App;
