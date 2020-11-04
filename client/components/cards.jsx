import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faFighterJet, faTintSlash } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';

AOS.init();

function Cards() {
  return (
    <>
      <h3 className="text-center mt-5">VERY LOW MOISTUE...DRIES FAST...ECO FRIENDLY</h3>
      <div className="row d-flex justify-content-center mt-3">
        <div data-aos="fade-up" className="card w-25 mr-2">
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
        <div data-aos="fade-up" className="card w-25 mr-2">
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
        <div data-aos="fade-up" className="card w-25">
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
    </>
  );
}

export default Cards;
