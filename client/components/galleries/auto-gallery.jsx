import React, { useEffect } from 'react';
import AOS from 'aos';

AOS.init();

function AutoGallery() {
  useEffect(() => {
    const main = document.getElementById('main');
    main.classList.remove('position-absolute');
    main.classList.add('position-absolute');
  });
  return (
    <>
      <div className="col-12 mb-5 top scale bottom position-relative">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <p className="text-font mt-4 shadowed-text text-white">AUTO DETAILING</p>
          <img className="w-50 h-75 mt-3 shadowed" src="/images/auto-detailing2.webp" alt="image of steering wheel"></img>
        </div>
      </div>
      <div data-aos="flip-up" data-aos-duration="2000"
        className="d-flex row mx-3 justify-content-center">
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12" src="images/richa.webp" alt="image of car detail"></img>
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12" src="images/richb.webp" alt="image of car detail"></img>
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12" src="images/richc.webp" alt="image of car detail"></img>
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12" src="images/richd.webp" alt="image of car detail"></img>
      </div>
      <div data-aos="flip-up" data-aos-duration="2000"
        className="d-flex row mx-3 pb-4 my-3 justify-content-center">
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12" src="images/guya.webp" alt="image of car detail"></img>
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12" src="images/guyb.webp" alt="image of car detail"></img>
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12" src="images/guyc.webp" alt="image of car detail"></img>
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12" src="images/guyd.webp" alt="image of car detail"></img>
      </div>
    </>
  );
}

export default AutoGallery;
