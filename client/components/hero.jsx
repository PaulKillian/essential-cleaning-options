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
      <div className="paralax text-white  pb-5">
        <div className={'d-flex'}>
          <div className={'display-1'}><span className={'text-primary'}>E</span>
            <span className={'text-success'}>C</span><span className={'text-white'}>O</span>
          </div>
          <div className={'flex justify-content-center align-items-center'}>
            <div>
              <div className={'display-2 text-primary'}>ESSENTIAL</div>
            </div>
            <div className={'d-flex'}>
              <div className={'display-2 text-success'}>CLEANING</div>
              <div className={'display-2 text-white'}>OPTIONS</div>
            </div>
          </div>
        </div>
      </div>
        <div className={ 'text-center' }>
          <h4>SERVICES</h4>
          <FontAwesomeIcon className={'text-center pointer fa-2x'} onClick={scroll} icon={faArrowDown} />
        </div>
    </>
  );
}

export default Hero;
