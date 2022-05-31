import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
//Package imports

//Components and Pages imports
import Appbar from './components/Appbar';
import Homepage from './pages/Homepage';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <div className="App">
      <h1>Testind</h1>
      <p>or login with</p>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
      <Appbar />
    </div>
  );
}

export default App;
