import React from 'react';

function Services(props) {
  return (
    <div className="frame-3 border-class-1">
      <div className="rectangle-6"></div>
      <div className="rectangle-8"></div>
      <div className="upholstrey-cleaning font-class-1 border-class-1">Upholstrey Cleaning</div>
      <div className="carpet-cleaning font-class-1 border-class-1">Carpet Cleaning</div>
      <img className="rectangle-9" src={props.rectangle9} />
      <img className="rectangle-11" src={props.rectangle11} />
      <h1 className="services font-class-2 border-class-1">Services</h1>
      <div className="rectangle-7"></div>
      <div className="auto-detailing font-class-1 border-class-1">Auto Detailing</div>
      <img className="rectangle-10" src={props.rectangle10} />
    </div>
  );
}

export default Services;
