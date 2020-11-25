import React from 'react';
import AOS from 'aos';

function Auto() {
  AOS.init();
  return (
    <>
      <div className="col-12 mb-5 scale bottom">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <p className="text-font mt-4 shadowed-text text-white">AUTO DETAILING</p>
          <img className="w-50 h-75 mt-3 shadowed" src="/images/auto-detailing.png"></img>
        </div>
      </div>
      <div className="flex row mx-3 my-4 shadowed justify-content-around">
        <img className="mt-4 col-3" src="images/rich1.jpg"></img>
        <img className="mt-4 col-3" src="images/rich2.jpg"></img>
        <img className="mt-4 col-3" src="images/rich3.jpg"></img>
        <img className="mt-4 col-3" src="images/rich4.jpg"></img>
      </div>
      <div className="flex row mx-3 shadowed my-4 justify-content-around">
        <img className="mt-4 col-3" src="images/guy1.jpg"></img>
        <img className="mt-4 col-3" src="images/guy2.jpg"></img>
        <img className="mt-4 col-3" src="images/guy3.jpg"></img>
        <img className="mt-4 col-3" src="images/guy4.jpg"></img>
      </div>
    </>
  );
}

export default Auto;
