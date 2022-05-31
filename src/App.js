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
<<<<<<< HEAD
import ErrorPage from './pages/ErrorPage';
=======
import ErrorPage from "./pages/ErrorPage";
>>>>>>> 19952f8d7621bb9b8eba9e616f4c5f046ae69cda

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 19952f8d7621bb9b8eba9e616f4c5f046ae69cda
      <main>
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
      </main>
<<<<<<< HEAD
=======
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
>>>>>>> 8757bc43a82dfb47abc00347d681a9079a6a28a9
=======
>>>>>>> 19952f8d7621bb9b8eba9e616f4c5f046ae69cda
      <Appbar />
    </div>
  );
}

export default App;
