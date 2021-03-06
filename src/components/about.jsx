import React from "react";
import './about.css';
import AboutWorld from "../img/about-world.png";

const About = () => (
  <div
    className="section about-body-background"
  >
    <div className="row about-body">
      <div className="col s12 m6 l6">
        <h3 className="about-header">An isolated mind sets fire to new ideas, a group of such minds is a bonfire</h3>
        <p
          className="white-text flow-text"
        >
          <p>IsoHack is an effort at draining young minds looking for a challenge at solving problems with innovation and yes some programming too.</p>
		  <p>Orgainzed by a team of devout individuals of Acropolis Technical Campus Indore, IsoHack promises to be your best experience at hacking.</p>
		  <p>Pickup the challenge and get to be a part of something remarkable happening in the cleanest city and the heart of central India -INDORE!</p>
		  <br/><br/>
        </p>
      </div>
      <div className="col s12 m6 l6 hide-on-small-and-down">
          <img className={"about-world"} src={AboutWorld} alt="world" />
      </div>
    </div>
  </div>
);

export default About;
