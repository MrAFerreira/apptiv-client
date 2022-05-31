import "./App.css";
//Package imports

import { Routes, Route } from "react-router-dom";

//Components and Pages imports
import Appbar from "./components/Appbar";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
      <Appbar />
    </div>
  );
}

export default App;
