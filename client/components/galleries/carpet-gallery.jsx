import React, { useEffect } from 'react';
import Gallery from 'react-grid-gallery';

function CarpetGallery() {
  useEffect(() => {
    document.title = 'Essential Cleaning Options: Carpet cleaning photos, Orange County';
  });
  const IMAGES = [{
    src: '/images/carpet1m.jpg',
    thumbnail: '/images/carpetg2.webp',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: 'Commercial-Before', title: 'Commercial' }],
    caption: 'Academic Chess Academy in Laguna Hills'
  },
  {
    src: '/images/carpet2m.jpg',
    thumbnail: '/images/carpetg3.webp',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: 'Commercial-After', title: 'Commercial' }],
    caption: 'Academic Chess Academy in Laguna Hills'
  },
  {
    src: '/images/carpet8m.jpg',
    thumbnail: '/images/carpetg1.webp',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: 'Commercial-After', title: 'Commercial' }],
    caption: 'Academic Chess Academy in Laguna Hills'
  },
  {
    src: '/images/carpet5m.jpg',
    thumbnail: '/images/carpetg5.webp',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: 'Residential-Before', title: 'Residential' }],
    caption: 'Stain Treatment-Before'
  },
  {
    src: '/images/carpet4m.jpg',
    thumbnail: '/images/carpetg6.webp',
    thumbnailWidth: 238,
    thumbnailHeight: 212,
    tags: [{ value: 'Residential-After', title: 'Residentiall' }],
    caption: 'Stain Treatment-After'
  },
  {
    src: '/images/carpet7m.jpg',
    thumbnail: '/images/carpetg7.webp',
    thumbnailWidth: 238,
    thumbnailHeight: 212,
    tags: [{ value: 'Residential-After', title: 'Residential' }],
    caption: 'Family room carpet cleaning'
  },
  {
    src: '/images/carpet9m.jpg',
    thumbnail: '/images/carpetg4.webp',
    thumbnailWidth: 238,
    thumbnailHeight: 212,
    tags: [{ value: 'Residential-After', title: 'Residential' }],
    caption: 'Stair Cleaning',
    isSelected: false
  },
  {
    src: '/images/Commercial1.jpg',
    thumbnail: '/images/Commercial1.jpg',
    thumbnailWidth: 238,
    thumbnailHeight: 212,
    tags: [{ value: 'Commercial-After', title: 'Commercial' }],
    caption: 'Commercial',
    isSelected: false
  },
  {
    src: '/images/Commercial2.jpg',
    thumbnail: '/images/Commercial2.jpg',
    thumbnailWidth: 238,
    thumbnailHeight: 212,
    tags: [{ value: 'Commercial-After', title: 'Commercial' }],
    caption: 'Commercial',
    isSelected: false
  },
  {
    src: '/images/Commercial3.jpg',
    thumbnail: '/images/Commercial3.jpg',
    thumbnailWidth: 238,
    thumbnailHeight: 212,
    tags: [{ value: 'Commercial-After', title: 'Commercial' }],
    caption: 'Commercial',
    isSelected: false
  },
  {
    src: '/images/Commercial4.jpg',
    thumbnail: '/images/Commercial4.jpg',
    thumbnailWidth: 238,
    thumbnailHeight: 212,
    tags: [{ value: 'Commercial-After', title: 'Commercial' }],
    caption: 'Commercial',
    isSelected: false
  },
  {
    src: '/images/Commercial5.jpg',
    thumbnail: '/images/Commercial5.jpg',
    thumbnailWidth: 238,
    thumbnailHeight: 212,
    tags: [{ value: 'Commercial-After', title: 'Commercial' }],
    caption: 'Commercial',
    isSelected: false
  },
  {
    src: '/images/Commercial6.jpg',
    thumbnail: '/images/Commercial6.jpg',
    thumbnailWidth: 238,
    thumbnailHeight: 212,
    tags: [{ value: 'Commercial-After', title: 'Commercial' }],
    caption: 'Commercial',
    isSelected: false
  }, {
    src: '/images/Residential1.jpg',
    thumbnail: '/images/Residential1.jpg',
    thumbnailWidth: 238,
    thumbnailHeight: 212,
    tags: [{ value: 'Residential-Before', title: 'Residential' }],
    caption: 'Residential',
    isSelected: false
  }, {
    src: '/images/Residential2.jpg',
    thumbnail: '/images/Residential2.jpg',
    thumbnailWidth: 238,
    thumbnailHeight: 212,
    tags: [{ value: 'Residential-After', title: 'Residential' }],
    caption: 'Residential',
    isSelected: false
  }];

  return (
    <>
      <h1 className="text-font text-dark text-center mt-4 mb-5 pt-5">Carpet Cleaning</h1>
      <div className={'d-flex justify-content-center col-md-12 pb-5'}>
        <div style={{
          width: '87%'
        }}>
          < Gallery images={IMAGES} />
        </div>
      </div>
    </>
  );
}

export default CarpetGallery;
