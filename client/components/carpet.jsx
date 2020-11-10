import React from 'react';
import AOS from 'aos';

function Carpet() {
  AOS.init();
  return (
    <>
      <div className="d-flex justify-content-center">
        <p className="position-absolute text-font mt-4 text-white">CARPET CLEANING</p>
        <img className="w-100 carpet-h position-relative" src="/images/bcarpet.jpg"></img>
      </div>
      <div className="row d-flex mt-5 justify-content-center">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gDUOQQSSbl0"
          frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
        picture-in-picture" allowFullscreen>
        </iframe>
      </div>
    </>
  );
}

export default Carpet;
