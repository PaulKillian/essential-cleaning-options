import React from 'react';
import { NavLink } from 'react-router-dom';

function Cards() {
  return (
    <>
      <div className="mt-5 container">
        <div className="row d-flex justify-content-around">
          <div id="cards" data-aos="fade-up" data-aos-duration="2000" className="col-lg-3 col-md-10 mb-3
            text-white shadowed carpet-s containTL center-card-text">
            <h1 className="shadowed text-white">Carpet Cleaning</h1>
            <div className="overlayR">
              <div className="blur">
                <p className="lead p-5 text-center">I provide low moisture carpet cleaning with the use of
                  a rotary and or Orbital machine and provide a plant
                  based low moisture encapsulating green cleaner for all
                  types of carpets.<br></br><br></br>The carpets are pre
                  sprayed with the encapsulation cleaner, with detailed
                  attention to moisture control and then agitated with a
                  either a soft brush or carpet fiber pad followed by a
                  cotton or microfiber pad for dirt and soil removal from
                  the carpet fibers.</p>
                <NavLink to="/carpet-gallery" className="nav-link text-white text-center">Photos</NavLink>
              </div>
            </div>
          </div>
          <div id="cards" data-aos="fade-up" data-aos-duration="2000" className="col-lg-3 col-md-10 mb-3
            shadowed upholstrey-s containTR center-card-text text-white">
            <h1 className="text-white shadowed">Furniture Upholstery</h1>
            <div className="overlayR">
              <div className="blur">
                <p className="lead p-5 text-center">I provide low moisture carpet cleaning with the use of
                a rotary and or Orbital machine and provide a plant
                based low moisture encapsulating green cleaner for all
                types of carpets. The carpets are pre
                sprayed with the encapsulation cleaner, with detailed
                attention to moisture control and then agitated with a
                either a soft brush or carpet fiber pad followed by a
                cotton or microfiber pad for dirt and soil removal from
                the carpet fibers.</p>
                <NavLink to="/upholstrey-gallery" className="nav-link text-white text-center">Photos</NavLink>
              </div>
            </div>
          </div>
          <div id="cards" data-aos="fade-up" data-aos-duration="2000" className="col-lg-3 col-md-10 mb-3
            shadowed grout-s containBR center-card-text text-white">
            <h1 className="text-white shadowed">Appliance Cleaning</h1>
            <div className="overlayR">
              <div className="blur">
                <p className="lead p-5 text-center">Providing cleaning with a chemical free cleaner
                and sanitizing with steam for refrigerators and freezers. For ovens and stove tops
                 I use a non toxic bio degradable cleaner/degreaser  followed up with steam for a
                 complete sanitization. </p>
                <NavLink to="/upholstrey-gallery" className="nav-link text-white text-center">Photos</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
