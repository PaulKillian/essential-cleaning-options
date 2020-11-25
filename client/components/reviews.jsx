import React from 'react';

function Review() {
  return (
    <>
      <div className="col-12 scale bottom">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <p className="text-font mt-4 shadwed-text text-white">Testimonials</p>
          <img className="w-25 h-50 mt-3 shadowed" src="/images/reviews.png"></img>
        </div>
      </div>
      <div className="row flex justify-content-center text-white">
        <section className="carousel mt-5 w-75 h-50" aria-label="Gallery">
          <ol className="carousel__viewport">
            <li id="carousel__slide1"
              className="carousel__slide">
              <p>Ken has been a vendor for our company for several years. He is prompt, trustworthy and does a thorough and comprehensive job. He also is proactive. If he sees a problem he will point it out and help us resolve it or point us to someone who can. We have been very pleased with his service and his ongoing consistency. You can count on Ken to do what he says in a timely and efficient manner.
                <br></br><br></br>Guy Baker - Wealth Teams Solutions, Irvine CA
              </p>
              <div className="carousel__snapper"></div>
            </li>
            <li id="carousel__slide2"

              className="carousel__slide">
              <p>Ken and his team are amazing with taking care of our carpets at our business.  We have high traffic areas, and Ken always makes sure we are satisfied with each service.  Try Ken and his team out, you won&apos;t be disappointed!
                <br></br><br></br>Triton Investment Group, San Clemente CA.</p>
              <div className="carousel__snapper"></div>
            </li>
            <li id="carousel__slide3"
              className="carousel__slide">
              <p>Ken Mendoza has been cleaning our carpets and servicing our tile for over 5 years and does a fantastic job. He is thorough and will spend the extra time needed to get out the tough stains. He is super flexible and has been fantastic at serving our businesses and keeping our carpet and tile in amazing shape!
                <br></br><br></br>Adam Brody - Academic Chess Academy, Laguna Hills CA
              </p>
              <div className="carousel__snapper"></div>
            </li>
            <li id="carousel__slide4"
              className="carousel__slide">
              <div className="carousel__snapper"></div>
            </li>
          </ol>
          <aside className="carousel__navigation mb-5">
            <ol className="carousel__navigation-list">
              <li className="carousel__navigation-item">
                <a href="#carousel__slide1"
                  className="carousel__navigation-button">Go to slide 1</a>
              </li>
              <li className="carousel__navigation-item">
                <a href="#carousel__slide2"
                  className="carousel__navigation-button">Go to slide 2</a>
              </li>
              <li className="carousel__navigation-item">
                <a href="#carousel__slide3"
                  className="carousel__navigation-button">Go to slide 3</a>
              </li>
              <li className="carousel__navigation-item">
                <a href="#carousel__slide4"
                  className="carousel__navigation-button">Go to slide 4</a>
              </li>
            </ol>
          </aside>
        </section>
      </div>
    </>
  );
}

export default Review;
