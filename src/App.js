import './App.css';
//Package imports

import { Routes, Route } from 'react-router-dom';

//Components and Pages imports
import Appbar from './components/Appbar';
import Homepage from './pages/Homepage';
import EventDetailsPage from './pages/EventDetailsPage';



const eventSample = {
  id: "627a225cfd5a526ce58b23ec",
  title: "Yoga @ Heden Sta. Apolónia",
  description: "1 hour yoga class at Heden Sta. Apolónia",
  location: {
    address: "Praceta do Mar nº52 2775-780 Lisboa",
    geo: {
      lat: -34.397,
      lng: 150.644
    }
  },
  category: "Health & Wellbeing",
  price: 0,
  startDate: "2022-06-10T08:29:16.506+00:00",
  image: "https://images.unsplash.com/photo-1639333586638-fb4e185084b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
  attendees: [
    "627a1e9db189e86c144d6986",
    "627a1e9db189e86c144d6985",
    "627a1e9db189e86c144d6987"
  ]
}

function App() {
  return (
    <div className="App">
    <EventDetailsPage event={eventSample}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Appbar />
    </div>
  );
}

export default App;
