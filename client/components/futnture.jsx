import React from 'react';
import AOS from 'aos';

function Furniture() {
  AOS.init();
  return (
    <>
      <div className="d-flex justify-content-center">
        <p className="position-absolute text-font mt-4 text-white">CARPET CLEANING</p>
        <img className="w-100 carpet-h position-relative" src="/images/upholstrey.png"></img>
      </div>
    </>
  );
}

export default Furniture;
