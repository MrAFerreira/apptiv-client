import './App.css';
import { Routes, Route } from 'react-router-dom';
//Package imports
import EventsCard from './components/EventsCard';

//Components and Pages imports
import Appbar from './components/Appbar';
import Header from './components/Header';
import MutlipageForm from './components/MutlipageForm';
/* Welcome/initialize pages */
import WelcomePage from './pages/WelcomePage';
import SplashScreenPage from './pages/SplashScreenPage';
import AboutPage from './pages/AboutPage';
/* Auth pages */
import SignUpFormPage from './pages/SignUpFormPage';
import SignUpOnBoardingPage from './pages/SignUpOnBoardingPage';
import LoginPage from './pages/LoginPage';
/* Events pages */
import EventListPage from './pages/EventListPage';
import EventDetailsPage from './pages/EventDetailsPage';
import EventCreationPage from './pages/EventCreationPage';
import BookingsPage from './pages/BookingsPage';
/* Statistic pages */
import ProgressPage from './pages/ProgressPage';
/* Error page */
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <h1>Testind</h1>
      <p>or login with</p>
      <MutlipageForm />

      <Header />
      <Routes>
        <Route path="/" element={<SplashScreenPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignUpFormPage />} />
        <Route path="/onboarding-signup" element={<SignUpOnBoardingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/event-list" element={<EventListPage />} />
        <Route path="/event-details/:id" element={<EventDetailsPage />} />
        <Route path="/create-event" element={<EventCreationPage />} />
        <Route path="/my-bookings" element={<BookingsPage />} />
        <Route path="/your-progress" element={<ProgressPage />} />
        <Route path="*" element={<ErrorPage />} />
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
