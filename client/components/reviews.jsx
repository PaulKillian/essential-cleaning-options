import React from 'react';

function Review() {
  return (
    <>
      <div className="col-12 scale bottom">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <p className="text-font mt-4 shadowed-text text-white">Testimonials</p>
          <img className="w-25 h-50 mt-3 shadowed" src="/images/reviews.png"></img>
        </div>
      </div>
      <div className="row flex justify-content-center carousel-height text-white ">
        <section className="carousel mt-5 w-50 h-75" aria-label="Gallery">
          <ol className="carousel__viewport align">
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
              <p>I had the pleasure to work with Ken Mendoza for the past two years on many projects including a few residential and multiple commercial jobs. Ken is a very professional individual, always on time, and very knowledgeable about what he does. His carpet cleaning technique is unique and effective. He uses eco/environmental friendly products that doesn’t leave any residue. He provides great services at a very reasonable price. Aside from Carpet cleaning, he helped me with rug cleaning and upholstery cleanings a few times. He always delivered excellent results.
              I highly recommend Ken. I will be happy to be a live or phone reference for his services if necessary.
              <br></br><br></br>Bita Safari - Simply Crystal Clean, Santa Ana CA
              </p>
              <div className="carousel__snapper"></div>
            </li>
            <li id="carousel__slide5"
              className="carousel__slide">
              <p>We have known Ken Mendoza for about eight years of which we started using Ken&apos;s services about five years.  He has cleaned our carpets at least once a year since, he also has cleaned grout between the floor titles and he has detailed one of our cars. He is a one man operation who puts all his energy into his work and and is extremely detailed in his work. Every project he has done for us we have receive more than we asked for. We highly recommend him.
                <br></br><br></br>Wayne &amp; Donna Nash,
              Orange CA
              </p>
              <div className="carousel__snapper"></div>
            </li>
            <li id="carousel__slide6"
              className="carousel__slide">
              <p>Ken Mendoza has worked on my car a few times, and I continue to go back to him because his work is top shelf. He is professional, detailed, and his work is amazing, making my 2007 exterior brilliant and like-new with great attention to detail. Next time, I am definitely going to have him do the full detail, because I know I&apos;ll be as pleased with the interior. I highly recommend Ken to anyone who wants their car restored to a striking condition. This guy knows his stuff!
                <br></br><br></br>Jeff Scattareggia
              </p>
              <div className="carousel__snapper"></div>
            </li>
          </ol>
          <aside className="carousel__navigation shadowed mb-5">
            <ol className="carousel__navigation-list pointer">
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
              <li className="carousel__navigation-item">
                <a href="#carousel__slide5"
                  className="carousel__navigation-button">Go to slide 5</a>
              </li>
              <li className="carousel__navigation-item">
                <a href="#carousel__slide6"
                  className="carousel__navigation-button">Go to slide 6</a>
              </li>
            </ol>
          </aside>
        </section>
      </div>
    </>
  );
}

export default Review;
