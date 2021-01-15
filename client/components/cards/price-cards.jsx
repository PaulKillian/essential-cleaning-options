import React from 'react';

function PriceCards() {
  return (
    <div className={'container mt-5 mb-5'}>
      <div className={'row d-flex justify-content-between'}>
        <div id={'price-card'} className={'mt-2 rounded text-dark col-6-sm col-lg-5 col-md-12 shadowed'}>
          <div className={'bg-white'}>
            <h4 className={'p-2 text-center rounded'}>Basic Interior Cleaning</h4>
          </div>
          <ul className={'pb-2 pr-2 bg-white'}>
            <li>Thorough dusting &amp; vacuuming</li>
            <li>Vacuum Trunk area (optional)</li>
            <li>Wiping down all interior surfaces with interior detailer or</li>
            <li>APC - All purpose cleaner or detail cleaning product.
              (Depending on level of soil on surfaces)</li>
            <li>Cleaning interior glass and windows</li>
            <li>This is a basic or maintenance cleaning of the interior. I only offer this
              service to vehicles that do not need a deep thorough cleaning. If the
              vehicle requires a deeper cleaning? I can provide a higher level more
              detailed interior service</li>
          </ul>
        </div>
        <div className={'d-flex justify-content-around col-lg-7 align-items-center'}>
          <div className={'bg-white rounded price1 text-center p-2'}>
            <h4 className={'bg-primary p-5'}>Small</h4>
            <p><span className={'text-info h3'}>$40 - $50</span><br></br>Approximate Time:<br></br>1 hour 30 minutes</p>
          </div>
          <div className={'bg-white rounded price2 text-center p-2'}>
            <h4 className={'bg-success p-5'}>Medium</h4>
            <p><span className={'text-info h3'}>$50 - $60</span><br></br>Approximate Time:<br></br>1 hour 45 minutes</p>
          </div>
          <div className={'bg-white rounded price3 text-center p-2'}>
            <h4 className={'bg-warning p-5'}>Large</h4>
            <p><span className={'text-info h3'}>$60 - $65</span><br></br>Approximate Time:<br></br>2 hours</p>
          </div>
        </div>
      </div>
      <div className={'row d-flex justify-content-between'}>
        <div id={'price-card'} className={'mt-2 rounded text-dark col-6-sm col-lg-5 col-md-12 shadowed'}>
          <div className={'bg-white'}>
            <h4 className={'p-2 text-center rounded'}>Deep Interior Cleaning</h4>
          </div>
          <ul className={'pb-2 pr-2 bg-white'}>
            <li>Thorough dusting &amp; vacuuming</li>
            <li>Vacuum Trunk area (optional)</li>
            <li>Clean and Steam all plastic side panels, door panels and center console</li>
            <li>Dust and clean dashboard, steering wheel &amp; column, all instrument
              panels, glove box, rear view mirror, visors, vents, and headliner</li>
            <li>Clean all fabric surfaces (seats, carpets, mats)</li>
            <li>Clean and condition leather surfaces</li>
            <li>Clean &amp; Steam Gas and Brake pedals</li>
            <li>Apply a UV protective coating to all plastic and vinyl surfaces.
              (Dash, Door panels, Console, Steering column area, side panels, and all
              other trim.)</li>
          </ul>
        </div>
        <div className={'d-flex justify-content-around col-lg-7 align-items-center'}>
          <div className={'bg-white rounded price1 text-center p-2'}>
            <h4 className={'bg-primary p-5'}>Small</h4>
            <p><span className={'text-info h3'}>$125 - $150</span><br></br>Approximate Time:<br></br>3 hours</p>
          </div>
          <div className={'bg-white rounded price2 text-center p-2'}>
            <h4 className={'bg-success p-5'}>Medium</h4>
            <p><span className={'text-info h3'}>$150 - $175</span><br></br>Approximate Time:<br></br>3.5 hours</p>
          </div>
          <div className={'bg-white rounded price3 text-center p-2'}>
            <h4 className={'bg-warning p-5'}>Large</h4>
            <p><span className={'text-info h3'}>$175 - $200</span><br></br>Approximate Time:<br></br>4 hours</p>
          </div>
        </div>
      </div>
      <div className={'row d-flex justify-content-between'}>
        <div id={'price-card'} className={'mt-2 rounded text-dark col-6-sm col-lg-5 col-md-12 shadowed'}>
          <div className={'bg-white'}>
            <h4 className={'p-2 text-center rounded'}>Clear Coat Decontamination</h4>
          </div>
          <div className={'pb-2 pr-2 bg-white'}>
            <p>Step 1. Clay towel, Clay disc or Clay bar to remove embedded
              contaminants from the clear coat and windshield</p>
            <p>Step 2. Clean all Clayed surfaces with a paint prep or APA which is an
              alcohol wash and distilled to remove any particles left behind on the
              surface prior to polishing</p>
            <p>Step 3. One-step polish (Using a D/A dual action polisher) with an AIO
              all in one glaze polish seal or all in one polish finishing with a sealant
              wax or Graphene coating for up to 6 months of clear coat protection</p>
          </div>
        </div>
        <div className={'d-flex justify-content-around col-lg-7 align-items-center'}>
          <div className={'bg-white rounded price1 p-2'}>
            <h4 className={'bg-primary p-5'}>Small</h4>
            <p><span className={'text-info h3'}>$40 - $50</span><br></br>Approximate Time:<br></br>1 hour 30 minutes</p>
          </div>
          <div className={'bg-white rounded price2 text-center p-2'}>
            <h4 className={'bg-success p-5'}>Medium</h4>
            <p><span className={'text-info h3'}>$40 - $50</span>$<br></br>Approximate Time:<br></br>1 hour 45 minutes</p>
          </div>
          <div className={'bg-white rounded price3 text-center p-2'}>
            <h4 className={'bg-warning p-5'}>Large</h4>
            <p><span className={'text-info h3'}>$40 - $50</span><br></br>Approximate Time:<br></br>2 hours</p>
          </div>
        </div>
      </div>
      <div className={'row d-flex justify-content-between'}>
        <div id={'price-card'} className={'mt-5 rounded text-dark col-6-sm col-lg-5 col-md-12 shadowed'}>
          <div className={'bg-white'}>
            <h4 className={'p-2 text-center rounded'}>Car Wash</h4>
          </div>
          <ul className={'pb-2 pr-2 bg-white'}>
            <li>Complete Hand wash and dry</li>
            <li>Clean and Detail wheels &amp; Dress Tires</li>
            <li>Clean door jambs</li>
            <li>Clean exterior glass and windows</li>
          </ul>
        </div>
        <div className={'d-flex justify-content-around mb-2 col-lg-7 align-items-center'}>
          <div className={'bg-white rounded price1 text-center p-2'}>
            <h4 className={'bg-primary p-5'}>Small</h4>
            <p><span className={'text-info h3'}>$40 - $50</span><br></br>Approximate Time:<br></br>1 hour</p>
          </div>
          <div className={'bg-white rounded price2 text-center p-2'}>
            <h4 className={'bg-success p-5'}>Medium</h4>
            <p><span className={'text-info h3'}>$40 - $50</span><br></br>Approximate Time:<br></br>1.5 hours</p>
          </div>
          <div className={'bg-white rounded price3 text-center p-2'}>
            <h4 className={'bg-warning p-5'}>Large</h4>
            <p><span className={'text-info h3'}>$40 - $50</span><br></br>Approximate Time:<br></br>1 hour 45 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceCards;
