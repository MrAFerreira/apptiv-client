//This is a dummy component. There will not be a Homepage (the main page is the events page)
//import apptivLogo from "../assets/images/apptiv-logo.svg";
import ButtonBottom from "../components/ButtonBottom";
import SportsScore from "../assets/images/sports_score.svg";
import TablerView from "../assets/images/tabler_viewfinder.svg";
import Run from "../assets/images/bx_run.svg";
import styled from "styled-components";


const StyledWelcome = styled.div`
  h1 {
    margin: 50px 0 50px 0;
  }

  .tabler-view {
    display: flex;
    justify-content: space-around;
    margin: 0 115px;
  }

  .tabler-view1 {
    display: flex;
    justify-content: space-around;
    margin: 0 105px;
  }

  .tabler-view2 {
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
  }

  .active {
    margin-left: 100px;
    margin-top: 8px;
  }

  .active1 {
    margin-right: 145px;
  }

  h4 {
    margin-bottom: 90px;
  }
`;

function WelcomePage() {
  return (
    <StyledWelcome className="welcome1">
      {/* <img src={apptivLogo} alt="apptiv logo" /> */}

      <h1>Welcome!</h1>
      <div className="tabler-view">
        <img src={SportsScore} alt="apptiv logo" />
        <p>Set your goals</p>
      </div>
      <div className="tabler-view1">
        <img src={TablerView} alt="apptiv logo" />
        <p>Discover events</p>
      </div>
      <div className="tabler-view2">
        <span className="active">
          <img src={Run} alt="apptiv logo" />
        </span>
        <span className="active1">
          <p>Be active</p>
        </span>
      </div>
      <p>But most importantly...</p>

  
      <h4>HAVE FUN!</h4>
      <ButtonBottom> Let's go </ButtonBottom>
    </StyledWelcome>
  );
}

export default WelcomePage;
