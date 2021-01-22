import React from 'react';
import Gallery from 'react-grid-gallery';

function CarpetGallery() {

  const IMAGES = [{
    src: '/images/carpet1m.jpg',
    thumbnail: '/images/carpetg2.webp',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: 'Commercial', title: 'Commercial' }],
    caption: 'Academic Chess Academy in Laguna Hills'
  },
  {
    src: '/images/carpet2m.jpg',
    thumbnail: '/images/carpetg3.webp',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: 'Commercial', title: 'Commercial' }],
    caption: 'Academic Chess Academy in Laguna Hills'
  },
  {
    src: '/images/carpet8m.jpg',
    thumbnail: '/images/carpetg1.webp',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: 'Commercial', title: 'Commercial' }],
    caption: 'Academic Chess Academy in Laguna Hills'
  },
  {
    src: '/images/carpet5m.jpg',
    thumbnail: '/images/carpetg5.webp',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: 'Residential', title: 'Residential' }],
    caption: 'Stain Treatment - Before'
  },
  {
    src: '/images/carpet4m.jpg',
    thumbnail: '/images/carpetg6.webp',
    thumbnailWidth: 238,
    thumbnailHeight: 212,
    tags: [{ value: 'Residential', title: 'Residential' }],
    caption: 'Stain Treatment - After'
  },
  {
    src: '/images/carpet7m.jpg',
    thumbnail: '/images/carpetg7.webp',
    thumbnailWidth: 238,
    thumbnailHeight: 212,
    tags: [{ value: 'Residential', title: 'Residential' }],
    caption: 'Family room carpet cleaning'
  },
  {
    src: '/images/carpet9m.jpg',
    thumbnail: '/images/carpetg4.webp',
    thumbnailWidth: 238,
    thumbnailHeight: 212,
    tags: [{ value: 'Residential', title: 'Residential' }],
    caption: 'Stairs cleaning',
    isSelected: false
  }];

  return (
    <>
      <h1 className=" text-font text-dark text-center mt-4 mb-5 pt-5">Carpet Gallery</h1>
      <div className={'d-flex justify-content-center pb-5'}>
        <div style={{
          width: '85%'
        }}>
          < Gallery images={IMAGES} />
        </div>
      </div>
    </>
  );
}

export default CarpetGallery;
