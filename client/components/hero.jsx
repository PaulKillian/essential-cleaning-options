import React from 'react';

function Hero() {
  return (
    <div>
      <h1 id="hero-text" className="text-white col h-75 d-flex justify-content-center align-items-center text-center">VERY LOW MOISTURE<br></br>Carpet Cleaning<br></br>Area Rug Cleaning<br></br>Upholstrey Cleaning</h1>
      <div className="d-flex flex-wrap">
        <img id="water" src="images/waterD.jpg" alt="Water Drop"></img>
        <div id="right-hero"></div>
      </div>
    </div>
  );
}

export default Hero;
