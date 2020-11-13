import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLeaf, faFighterJet, faTintSlash } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';

AOS.init();

function Cards() {
  return (
    <>
      <div className="bg-off-white mb-5">
        <div data-aos="fade-up" data-aos-easing="linear"
          data-aos-duration="500" className="d-flex justify-content-center mt-5">
          <div className="col-12 bar-color shadow-sm">
            <h3 className="text-center text-white mt-2">VERY LOW MOISTURE...DRIES FAST...ECO FRIENDLY</h3>
          </div>
        </div>
        <div>
          <div className="bg-off-white mb-5 d-flex">
            <div data-aos="flip-up" data-aos-easing="linear"
              data-aos-duration="500" className="row d-flex justify-content-center mt-5 box text-dark">
              <div className="d-flex justify-content-center mt-2">
                <div className="card">
                  <img className="card-img-top w-100 shadowed" src="images/leafw.png" alt="Card image cap"></img>
                  <div className="card-body">
                    <h4 className="card-title"><strong>REMOTE SUPPORT</strong></h4>
                    <h5 className="blue-text pb-2"><strong>From Anywhere</strong></h5>
                    <p className="card-text">Need assistance to a problem that wont go away. Try our Remote support option to save time and money</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="flip-up" data-aos-easing="linear"
              data-aos-duration="500" className="row d-flex justify-content-center mt-5 box text-dark">
              <div className="d-flex justify-content-center mt-2">
                <div className="card">
                  <img className="card-img-top w-100 shadowed" src="images/fast.png" alt="Card image cap"></img>
                  <div className="card-body">
                    <h4 className="card-title"><strong>REMOTE SUPPORT</strong></h4>
                    <h5 className="blue-text pb-2"><strong>From Anywhere</strong></h5>
                    <p className="card-text">Need assistance to a problem that wont go away. Try our Remote support option to save time and money</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="flip-up" data-aos-easing="linear"
              data-aos-duration="500" className="row d-flex justify-content-center mt-5 box text-dark">
              <div className="d-flex justify-content-center mt-2">
                <div className="card">
                  <img className="card-img-top w-100 shadowed" src="images/leafw.png" alt="Card image cap"></img>
                  <div className="card-body">
                    <h4 className="card-title"><strong>REMOTE SUPPORT</strong></h4>
                    <h5 className="blue-text pb-2"><strong>From Anywhere</strong></h5>
                    <p className="card-text">Need assistance to a problem that wont go away. Try our Remote support option to save time and money</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
