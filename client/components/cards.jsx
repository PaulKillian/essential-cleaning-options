import React from 'react';
import { NavLink } from 'react-router-dom';

function Cards() {
  return (
    <>
      <div className="d-flex justify-content-center display-4 mt-5">
        <div className="row">
          <div data-aos="fade-up" data-aos-duration="2000" className="mr-5 text-white simple shadowed
            container carpet-s containTL center-card-text">VLM Carpet
            <div className="overlayL">
              <div className="blur">
                <p className="lead p-5 text-justify">I provide low moisture carpet cleaning with the use of
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
          <div data-aos="fade-up" data-aos-duration="2000" className="text-white simple shadowed
            upholstrey-s containTR center-card-text">Furniture/Upholstery
            <div className="overlayR">
              <div className="blur">
                <p className="lead p-5 text-justify">I provide low moisture carpet cleaning with the use of
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
        </div>
      </div>
    </>
  );
}

export default Cards;
