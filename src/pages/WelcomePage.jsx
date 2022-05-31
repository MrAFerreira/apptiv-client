//This is a dummy component. There will not be a Homepage (the main page is the events page)
import apptivLogo from "../assets/images/apptiv-logo.svg";
import InterestComponent from "../components/InterestComponent";

function WelcomePage() {
  return (
    <div>
      <img src={apptivLogo} alt="apptiv logo" />
      <InterestComponent />
    </div>
  );
}

export default WelcomePage;
