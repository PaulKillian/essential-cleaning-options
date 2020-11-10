import React from 'react';
import AOS from 'aos';

AOS.init();

class Footer extends React.Component {
  render() {
    return (
      <>
        <img data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" className="position-absolute footer-color" src="/images/foot.png"></img>
        <div data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" className="col-12 pl-5 text-white position-relative mb-5">
          <div className="pt-4">
            <div>
              <img className="mb-2 ml-4 icon-size" src="/images/telephone.png"></img>
              <div>555-234-2938</div>
            </div>
            <div className="left-footer-image mt-5 mb-5">
              <img src="/images/ken.jpg"></img>
            </div>
            <div>
              <img className="ml-4 icon-size" src="/images/mail.png"></img>
              <div>essentialcleaningoptions@gmail.com</div>
            </div>
          </div>
          <div className="text-center pb-2">Copyright 2020 Ken Mendoza</div>
        </div>
      </>
    );
  }
}

export default Footer;
