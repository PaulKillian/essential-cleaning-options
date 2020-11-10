import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faFighterJet, faTintSlash } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';

AOS.init();

function Cards() {
  return (
    <>
      <div className="bg-off-white mb-5">
        <div data-aos="fade-up" data-aos-easing="linear"
          data-aos-duration="500" className="d-flex justify-content-center mt-5">
          <div className="col-12 bar-color shadow-sm">
            <h3 className="text-center mt-2">VERY LOW MOISTURE...DRIES FAST...ECO FRIENDLY</h3>
          </div>
        </div>
        <div data-aos="flip-up" data-aos-easing="linear"
          data-aos-duration="500" className="row d-flex justify-content-center mt-5 box text-dark">
          <div data-aos="flip-up" data-aos-easing="linear"
            data-aos-duration="500" className="card w-25 mr-3 shadow-sm border border-white">
            <div className="card-body">
              <div className="d-flex">
                <h5 id="moisture" className="card-title mr-3">Very Low Moisture</h5>
                <FontAwesomeIcon icon={faTintSlash} size="2x" className="font-color" />
              </div>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the.</p>
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
          <div data-aos="flip-up" data-aos-easing="linear"
            data-aos-duration="500" className="card w-25 mr-3 shadow-sm border border-white">
            <div className="card-body">
              <div className="d-flex">
                <h5 className="card-title mr-3">Dries Fast</h5>
                <FontAwesomeIcon icon={faFighterJet} size="2x" className="font-color" />
              </div>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the.</p>
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
          <div data-aos="flip-up" data-aos-easing="linear"
            data-aos-duration="500" className="card w-25 shadow-sm border border-white">
            <div className="card-body">
              <div className="d-flex">
                <h5 className="card-title mr-3">Eco Friendly</h5>
                <FontAwesomeIcon icon={faLeaf} size="2x" className="font-color" transform={{ rotate: 42 }} />
              </div>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the.</p>
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
