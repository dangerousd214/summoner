import React from "react";
import Img from '../assests/summoner-team2.png';

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={Img}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About Us</h1>
            <p>
              Coming Soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;