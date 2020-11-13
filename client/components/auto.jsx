import React from 'react';
import AOS from 'aos';

function Auto() {
  AOS.init();
  return (
    <>
      <div className="col-12 mb-5 scale bottom">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <p className=" text-font mt-4 shadowed-text text-dark">AUTO DETAILING</p>
          <img className="w-50 h-75 mt-3 shadowed" src="/images/auto-detailing.png"></img>
        </div>
      </div>
    </>
  );
}

export default Auto;
