import React from 'react';
import AOS from 'aos';

function AreaRug() {
  AOS.init();
  return (
    <>
      <div className="col-11 mb-5 scale">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <p className=" text-font mt-4 shadowed-text text-dark">AREA RUG CLEANING</p>
          <img className="w-50 h-75 mt-3 shadowed" src="/images/carpet1.png"></img>
        </div>
      </div>
    </>
  );
}

export default AreaRug;
