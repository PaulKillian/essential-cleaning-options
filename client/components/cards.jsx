import React from 'react';
import Gallery from 'react-grid-gallery';

function carpetGallery() {
  const IMAGES =
    [{
      src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
      thumbnail: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      isSelected: true
    },
    {
      src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
      thumbnail: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      isSelected: true
    }];

  return (
    <Gallery images={IMAGES} />
  );
}

function Cards() {
  return (
    <>
      <div className="d-flex justify-content-center display-4 mt-5">
        <div data-aos="fade-up" data-aos-duration="2000" className="mr-5 text-white simple shadowed col-5 carpet-s containTL center-card-text">Carpet
          <div className="overlayL">
            <div onClick={carpetGallery()} className="text shadowed">Carpet</div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="text-white simple shadowed col-5 upholstrey-s containTR center-card-text">Furniture/Upholstrey
          <div className="overlayR">
            <div className="text shadowed-text">Furniture/Upholstrey</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center display-4 mt-5">
        <div data-aos="fade-bottom" data-aos-duration="2000" className="mr-5 text-white simple shadowed col-5 area-s containBL center-card-text">Area Rug
          <div className="overlayL">
            <div className="text">Area Rug</div>
          </div>
        </div>
        <div data-aos="fade-bottom" data-aos-duration="2000" className="text-white simple col-5 shadowed grout-s containBR center-card-text">Tile/Grout
          <div className="overlayR">
            <div className="text">Tile/Grout</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
