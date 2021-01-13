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
      <div className="paralax text-white d-flex justify-content-center align-items-end pb-5">
        <div className={ 'text-center' }>
          <h4>SERVICES</h4>
          <FontAwesomeIcon className={'text-center pointer fa-2x'} onClick={scroll} icon={faArrowDown} />
        </div>
        <img id='main' className="mb-5 dimensions position-absolute lazyload fadeIn"
          alt="image of logo"
          src="/images/logo-m3.png"
        />
      </div>
    </>
  );
}

export default Hero;
