import React, { Component } from "react";
import Slider from "react-slick";


function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += "arrow";
  const char = props.type === "next" ? "👉" : "👈";
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

export default function Review () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="col-lg-10 container">
        <h2> Single Item</h2>
        <Slider {...settings}
          nextArrow={< Arrow type="next" />}
          prevArrow={< Arrow type="prev" />}>
          <div>
            <h3>Ken has been a vendor for our company for several years. He is prompt, trustworthy and does a thorough and comprehensive job. He also is proactive. If he sees a problem he will point it out and help us resolve it or point us to someone who can. We have been very pleased with his service and his ongoing consistency. You can count on Ken to do what he says in a timely and efficient manner.
            <br></br><br></br>Guy Baker - Wealth Teams Solutions, Irvine CA</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
