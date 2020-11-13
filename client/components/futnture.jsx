import React from 'react';
import AOS from 'aos';

function Furniture() {
  AOS.init();
  return (
    <>
      <div className="col-12 mb-5 scale bottom">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <p className=" text-font mt-4 shadowed-text text-dark">UPHOLSTREY/FURNITURE CLEANING</p>
          <img className="w-50 h-75 mt-3 shadowed" src="/images/upholstrey2.png"></img>
        </div>
      </div>
    </>
  );
}

export default Furniture;
