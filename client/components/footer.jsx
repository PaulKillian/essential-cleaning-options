import React from 'react';
import AOS from 'aos';

AOS.init();

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="pt-3 m-4">
          <div className=" foot1 shadowed">
            <div className="mt-4 pt-3 ml-3 mb-3 col-2">
              <img src="/images/ken.jpg"></img>
            </div>
            <div className="flex justify-content-start pl-3">
              <div className="col-2">
                <img className="mb-2 ml-4 mt-1 icon-size" src="/images/telephone.png"></img>
                <div>555-234-2938</div>
              </div>
              <div className="pt-3 pb-2 col-2">
                <img className="ml-4 icon-size" src="/images/mail.png"></img>
                <div>essentialcleaningoptions@gmail.com</div>
              </div>
              <div className="d-flex mt-5 pt-5 justify-content-end">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gDUOQQSSbl0"
                  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                picture-in-picture" allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
