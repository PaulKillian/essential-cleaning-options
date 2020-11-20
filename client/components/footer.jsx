import React from 'react';
import AOS from 'aos';

AOS.init();

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="d-flex justify-content-around text-white pt-3 mt-5">
          <div className="">
            <div>
              <img className="mb-2 ml-4 icon-size" src="/images/telephone.png"></img>
              <div>555-234-2938</div>
            </div>
          </div>
          <div className="mt-5 mb-5">
            <img src="/images/ken.jpg"></img>
          </div>
          <div className="">
            <img className="ml-4 icon-size" src="/images/mail.png"></img>
            <div>essentialcleaningoptions@gmail.com</div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
