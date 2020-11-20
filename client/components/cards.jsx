import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLeaf, faFighterJet, faTintSlash } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';

AOS.init();

function Cards() {
  return (
    <>
      <div className="d-flex col-12 justify-content-center display-4 mt-5">
        <div data-aos="fade-up" data-aos-duration="2000"
          className="mr-3 border text-white border-dark shadowed col-5 bg-success carpet-s containTL center-card-text">Carpet
          <div className="overlayL">
            <div className="text">Carpet</div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000"
          className="ml-3 border text-white border-dark shadowed col-5 bg-primary upholstrey-s containTR center-card-text">Furniture/Upholstrey
          <div className="overlayR">
            <div className="text">Furniture/Upholstrey</div>
          </div>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="2000"
        className="d-flex col-12 justify-content-center display-4 mt-5">
        <div className="mr-3 border text-white border-dark shadowed col-5 area-s containBL center-card-text">Area Rug
          <div className="overlayL">
            <div className="text">Area Rug</div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="3000"
          className="ml-3 border text-white border-dark shadowed col-5 grout-s containBR center-card-text">Tile/Grout
          <div className="overlayR">
            <div className="text">Tile/Grout</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
