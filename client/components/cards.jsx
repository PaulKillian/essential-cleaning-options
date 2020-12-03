import React from 'react';
import { NavLink } from 'react-router-dom';

function Cards() {
  return (
    <>
      <div className="d-flex justify-content-center display-4 mt-5">
        <div data-aos="fade-up" data-aos-duration="2000" className="mr-5 text-white simple shadowed col-5 carpet-s containTL center-card-text">Carpet
          <div className="overlayL">
              <div className="blur">
              <p className="lead p-5 text-justify" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <NavLink to="/carpet-gallery" className="nav-link text-white text-center">Photos</NavLink>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="text-white simple shadowed col-5 upholstrey-s containTR center-card-text">Furniture/Upholstery
          <div className="overlayR">
            <div className="blur">
              <p className="lead p-5 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <NavLink to="/upholstrey-gallery" className="nav-link text-white text-center">Photos</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center display-4 mt-5">
        <div data-aos="fade-bottom" data-aos-duration="2000" className="mr-5 text-white simple shadowed col-5 area-s containBL center-card-text">Area Rug
          <div className="overlayL">
            <div className="blur">
              <p className="lead p-5 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <NavLink to="/upholstrey-gallery" className="nav-link text-white text-center">Photos</NavLink>
            </div>
          </div>
        </div>
        <div data-aos="fade-bottom" data-aos-duration="2000" className="text-white simple col-5 shadowed grout-s containBR center-card-text">Tile/Grout
          <div className="overlayR">
              <div className="blur">
              <p className="lead p-5 text-justify" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <NavLink to="/upholstrey-gallery" className="nav-link text-white text-center">Photos</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
