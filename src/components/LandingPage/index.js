import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import ManyDogs from "../../pictures/many-dogs.jpg";
import DogopediaPicture from "../../pictures/dogopedia-logo.png";

export default function LandingPage(props) {
  return (
    <div className="mainDiv">
      <div className="mainHeaderDiv">Welcome to the BEAGL Dog Learner 3000</div>

      <div className="bigFlexBox">
        <div className="flexBoxLeft">
          <div className="dogopediaLeft">
            <Link to="/dogopedia">
              <img id="ManyDogs" src={ManyDogs} alt="Many dogs" />

              <img src={DogopediaPicture} alt="Dogopedia" />
            </Link>
            <h1>Practice your dog knowledge!</h1>
          </div>
        </div>
        <div className="flexBoxRight">
          <div className="gameOneMainDiv">
            <Link to="/game-one">Game 1. </Link>
          </div>
          <div className="gameOneDescriptionDiv">
            Practice finding dogs by their name
          </div>
          <div className="gameTwoMainDiv">
            <Link to="/game-two">Game 2. </Link>
          </div>
          <div className="gameOneDescriptionDiv">
            Practice finding dogs by their picture
          </div>
          <div className="gameThreeMainDiv">
            <Link to="/game-three">Game 3.</Link>
          </div>
          <div className="gameOneDescriptionDiv">
            The ultimate challenge, a mix of both!
          </div>
        </div>
      </div>
      <footer class="footer">&copy; 2019 Beagl &#9825; Codaisseur</footer>
    </div>
  );
}
