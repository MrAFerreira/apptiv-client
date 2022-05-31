import './App.css';
//Package imports

import { Routes, Route } from 'react-router-dom';

//Components and Pages imports
import Appbar from './components/Appbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Appbar />
    </div>
  );
}

export default App;
