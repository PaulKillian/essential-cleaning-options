import React, { useEffect } from 'react';
import 'lazysizes';

function scroll() {
  const anchor = document.querySelector('#services');
  anchor.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}

function Hero(props) {
  const x = window.matchMedia('(max-width: 768px)');
  if (x.matches) {
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
              <div className={'display-2 text-white text-shadow'}>ESSENTIAL</div>
              <div className={'display-3 text-white'}>CLEANING OPTIONS</div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </>
    );
  } else {
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
            <div className={'display-2 text-white'}>ESSENTIAL</div>
            <div className={'display-3 text-white'}>CLEANING OPTIONS</div>
          </div>
          {/* </div> */}
          <button className={'text-center bg-primary text-white'} onClick={scroll}>SERVICES</button>
        </div>
      </>
    );
  }
}

export default Hero;
