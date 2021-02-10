import React, { useEffect } from 'react';

function AutoGallery() {
  useEffect(() => {
    const main = document.getElementById('main');
    main.classList.remove('position-absolute');
    main.classList.add('position-absolute');
    document.title = 'Essential Cleaning Options: Auto detailing photos, Orange County';
  });
  return (
    <>
      <div className="col-12 mb-5 top bottom position-relative">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h1 className="text-font mt-4 text-dark pt-5">Auto Detailing</h1>
        </div>
      </div>
      <h2 className="mt-4 text-dark text-center pt-5 pb-2">Tesla: Clay Polish & Sealant</h2>
      <div className="d-flex row mx-3justify-content-center">
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/richa.webp" alt="image of car detail"></img>
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/richb.webp" alt="image of car detail"></img>
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/richc.webp" alt="image of car detail"></img>
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/richd.webp" alt="image of car detail"></img>
      </div>
      <h2 className="mt-4 text-dark text-center pt-5">Lexus: Clay Sealant & Wax</h2>
      <div className="d-flex row mx-3 pb-4 my-3 justify-content-center">
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/guya.webp" alt="image of car detail"></img>
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/guyb.webp" alt="image of car detail"></img>
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/guyc.webp" alt="image of car detail"></img>
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/guyd.webp" alt="image of car detail"></img>
      </div>
      <h2 className="mt-4 text-dark text-center pt-5">2008 Camry: Paint Polish & Seal</h2>
      <div className="d-flex row mx-3 pb-4 my-3 justify-content-center">
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/cam.jpg" alt="image of car detail"></img>
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/cam1.jpg" alt="image of car detail"></img>
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/cam3.jpg" alt="image of car detail"></img>
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/cam4.jpg" alt="image of car detail"></img>
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/cam5.jpg" alt="image of car detail"></img>
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/cam6.jpg" alt="image of car detail"></img>
        <img className="mt-1 simple col-lg-3 col-md-6 col-sm-12 price-shadow" src="images/cam7.jpg" alt="image of car detail"></img>
      </div>
    </>
  );
}

export default AutoGallery;
