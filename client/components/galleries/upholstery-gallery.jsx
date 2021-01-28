import React from 'react';
import Gallery from 'react-grid-gallery';

function UpholsteryGallery() {

  const IMAGES = [{
    src: '/images/up1.jpg',
    thumbnail: '/images/carpetg2.webp',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: 'Commercial', title: 'Commercial' }],
    caption: 'Academic Chess Academy in Laguna Hills'
  },
  {
    src: '/images/up2.jpg',
    thumbnail: '/images/carpetg3.webp',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: 'Commercial', title: 'Commercial' }],
    caption: 'Academic Chess Academy in Laguna Hills'
  },
  {
    src: '/images/up3.jpg',
    thumbnail: '/images/carpetg1.webp',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: 'Commercial', title: 'Commercial' }],
    caption: 'Academic Chess Academy in Laguna Hills'
  },
  {
    src: '/images/up4.jpg',
    thumbnail: '/images/carpetg5.webp',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: 'Residential', title: 'Residential' }],
    caption: 'Stain Treatment - Before'
  }];

  return (
    <>
      <div className="text-white text-center mt-4 mb-5 display-4">Furniture Gallery</div>
      <div style={{
        height: '520px'
      }}>
        <div style={{
          left: '11rem',
          position: 'relative',
          top: '2rem',
          width: '80%'
        }}>
          < Gallery images={IMAGES} />
        </div>
      </div>
    </>
  );
}

export default UpholsteryGallery;
