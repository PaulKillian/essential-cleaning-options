import React from 'react';
import AOS from 'aos';

function Carpet() {
  AOS.init();
  return (
    <>
      <div className="col-11 mb-5 scale">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <p className=" text-font mt-4 shadowed-text text-dark">CARPET CLEANING</p>
          <img className="w-50 h-75 mt-3 shadowed" src="/images/carpet3.png"></img>
        </div>
      </div>
      <div className="col d-flex justify-content-betweeen">
        <div className="row d-flex mt-5 pt-5 justify-content-center">
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gDUOQQSSbl0"
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
          picture-in-picture" allowFullScreen>
          </iframe>
        </div>
        <img src="/images/nanomaxx.jpg"></img>
      </div>

    </>
  );
}

export default Carpet;
