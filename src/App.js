import "./App.css";
import { Routes, Route } from "react-router-dom";
//Package imports
import EventsCard from "./components/EventsCard";

//Components and Pages imports
import Appbar from "./components/Appbar";
import Header from "./components/Header";
/* Welcome/initialize pages */
import WelcomePage from "./pages/WelcomePage";
import SplashScreenPage from "./pages/SplashScreenPage";
import AboutPage from "./pages/AboutPage";
/* Auth pages */
import SignUpFormPage from "./pages/SignUpFormPage";
import SignUpOnBoardingPage from "./pages/SignUpOnBoardingPage";
import LoginPage from "./pages/LoginPage";
/* Events pages */
import EventListPage from "./pages/EventListPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import EventCreationPage from "./pages/EventCreationPage";
import BookingsPage from "./pages/BookingsPage";
import ButtonBottom from "./components/ButtonBottom";
/* Statistic pages */
import ProgressPage from "./pages/ProgressPage";
/* Error page */
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
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
      <Appbar />
    </div>
  );
}

export default App;
