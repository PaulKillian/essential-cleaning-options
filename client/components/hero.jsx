import React, { useEffect } from 'react';
import 'lazysizes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function scroll() {
  const anchor = document.querySelector('#cards');
  anchor.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}

function Hero(props) {
  useEffect(() => {
    const main = document.getElementById('main');
    main.classList.remove('position-absolute');
    main.classList.add('position-absolute');
  });
  return (
    <>
      <div className="paralax text-white d-flex justify-content-center align-items-center">
        <img className="sizing mb-5 position-absolute lazyload fadeIn"
          alt="image of logo"
          src="/images/logo-m3.png"
        />
        <div className='position position-relative'>
          <h2>SERVICES</h2>
          <FontAwesomeIcon className={'pointer'} onClick={scroll} icon={faArrowDown} />
        </div>
      </div>
    </>
  );
}

export default Hero;
