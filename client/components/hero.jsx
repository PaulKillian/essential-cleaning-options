import React from 'react';
import 'lazysizes';

function Hero(props) {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="bg-off-white">
        <div className="d-flex justify-content-center">
          <img className="position-absolute mt-5 pt-5 text lazyload"
            alt="image of logo"
            data-src="/images/logo8.webp"
            data-srcset="/images/logo8.webp 300w,
            /images/logo8.webp 600w,
            /images/logo8.webp 900w" />
        </div>
        <div className="paralax"></div>
      </div>

    </>
  );
}

export default Hero;
