import React from 'react';
import AOS from 'aos';

function Grout() {
  AOS.init();
  return (
    <>
      <div className="col-12 mb-5 scale bottom">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <p className=" text-font mt-4 shadowed-text text-dark">TILE/GROUT CLEANING</p>
          <img className="w-50 h-75 mt-3 shadowed" src="/images/tileg.jpg"></img>
        </div>
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

export default Grout;
