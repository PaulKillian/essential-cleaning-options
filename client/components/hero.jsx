import React from 'react';
import 'lazysizes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Hero(props) {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="paralax text-white d-flex justify-content-center align-items-center top">
        <img className="sizing position-absolute lazyload"
          alt="image of logo"
          data-src="/images/logo-m3.png"
        />
        <div className='position position-relative'>
          <h2>SERVICES</h2>
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      </div>
    </>
  );
}

export default Hero;
