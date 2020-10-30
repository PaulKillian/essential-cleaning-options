import React from 'react';

function Hero() {
  return (
    <>
      <div className="bg-hero"></div>
      <div id="hero-text" className="col-12 position-absolute d-flex justify-content-around">
        <div>
          <h1 className="mt-5">VERY LOW MOISTURE</h1>
          <h1 className="mt-5">CARPET CLEANING</h1>
          <h1 className="mt-5">AREA RUG CLEANING</h1>
        </div>
        <div>
          <h1 className="ml-5 mt-5">VERY LOW MOISTURE</h1>
          <h1 className="ml-5 mt-5">CARPET CLEANING</h1>
          <h1 className="ml-5 mt-5">AREA RUG CLEANING</h1>
        </div>
      </div>
      <img id="water" className="position-relative"
        src="https://anima-uploads.s3.amazonaws.com/projects/5f9b77ac2a9b34eeacd2ed63/releases/5f9c1a870009f876421d958d/img/rectangle-22@1x.png" />
    </>
  );
}

export default Hero;
