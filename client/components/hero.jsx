import React, { useEffect } from 'react';
import 'lazysizes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function scroll() {
  const anchor = document.querySelector('#services');
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
      <div className={'paralax d-flex justify-content-around flex-column align-items-center col-12'}>

        {/* <div id="eco" className="row text-white d-flex justify-content-left align-items-center pb-5"> */}

        {/* <div className={'display-1 d-flex col-5 justify-content-center'}> */}
        {/*  <div className={'text-primary col-2 top1'}>E</div> */}
        {/*  <div className={'text-success col-2 top'}>C</div> */}
        {/*  <div className={'text-white col-2'}>O</div> */}
        {/* </div> */}

        <div className={'d-flex flex-column'}>
          <div>
            <div className={'display-2 text-primary text-shadow'}>ESSENTIAL</div>
          </div>
          <div className={'d-flex'}>
            <div className={'display-3 text-success text-shadow'}>CLEANING</div>
            <div className={'display-3 text-white text-shadow'}>OPTIONS</div>
          </div>
        </div>
        {/* </div> */}
        <button className={ 'text-center bg-primary text-white' } onClick={scroll}>SERVICES</button>
      </div>
    </>
  );
}

export default Hero;
