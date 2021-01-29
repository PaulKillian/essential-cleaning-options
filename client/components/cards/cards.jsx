import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      backgroundColor: '#216B9E',
      '&:hover': {
        backgroundColor: green[700]
      }
    }
  }
}));

function Cards() {
  useEffect(() => {
    document.title = 'Essential Cleaning Options: Carpet Cleaning, Upholstery Cleaning, Auto detailing services and prices in Orange County, California';
  });
  const classes = useStyles();
  return (
    <>
      <div className="mt-5 container">
        <div id="services" className="row card-parallax mx-1 d-flex justify-content-center mb-5">
          <div className="col-lg-6 col-md-12 bg-white card-shadow">
            <h2 className={'display-4 text-center pt-3 bg-footer'}>CARPET CLEANING</h2>
            <hr className={'style'}></hr>
            <p className="p-2">I provide low moisture carpet cleaning with the use of
              a rotary and or orbital machine and provide a plant
              based low moisture encapsulating green cleaner for all
              types of carpets.<br></br><br></br>The carpets are pre
              sprayed with the encapsulation cleaner, with detailed
              attention to moisture control and then agitated with a
              either a soft brush or carpet fiber pad followed by a
              cotton or microfiber pad for dirt and soil removal from
              the carpet fibers.</p>
            <div className={'d-flex justify-content-center pb-2'}>
              <div className={classes.root}>
                <Button onClick={scroll} variant="contained">
                  <NavLink to="/carpet-gallery" className="nav-link text-white text-center pr-1">
                    <PhotoCamera className={'text-white'}/> Photos</NavLink>
                </Button>
              </div>
            </div>
          </div>
          <img src="../images/carpet6.webp" className="row card-h bottom card-shadow col-lg-6 col-md-12"></img>
        </div>
        <div className="row mx-1 d-flex justify-content-center mb-5">
          <div className="col-lg-6 col-md-12 bg-white card-shadow">
            <h2 className={'display-4 text-center pt-3 bg-footer'}>UPHOLSTERY CLEANING</h2>
            <hr className={'style'}></hr>
            <p className="p-2">Furniture is completely vacuumed and pre sprayed with a low moisture neutral
              PH cleaner/deodorizer and a hand held orbital machine driven with a microfiber extraction pad
              for stain/soil removal ad followed by steam for a sanitizing. Note: It is highly recommended that
              your furniture tag is inspected for proper cleaning method prior to any type of cleaning procedures.</p>
            <div className={'d-flex justify-content-center'}>
              <div className={classes.root}>
                <Button onClick={scroll} variant="contained">
                  <NavLink to="/upholstery-gallery" className="nav-link text-white text-center pr-1">
                    <PhotoCamera className={'text-white'}/> Photos
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
          <img id={'second'} src="../images/coucha.webp" className="row col-lg-6 card-h bottom card-shadow col-md-12"></img>
        </div>
        <div className="row mx-1 d-flex justify-content-center mb-5">
          <div className="col-lg-6 col-md-12 bg-white card-shadow">
            <h2 className={'display-4 text-center pt-3 bg-footer'}>AUTO DETAILING</h2>
            <hr className={'style'}></hr>
            <p className="p-2"></p>
            <div className={'d-flex justify-content-center'}>
              <div className={classes.root}>
                <Button variant="contained">
                  <NavLink to="/auto-detailing" className="nav-link text-white text-center pr-1">
                    <PhotoCamera className={'text-white'}/> Photos</NavLink>
                </Button>
              </div>
            </div>
            <div className={'d-flex row justify-content-center pb-2'}>
              <div className={classes.root}>
                <Button variant="contained">
                  <NavLink to="/auto-detailing-services" className="nav-link text-white text-center pr-1">
                    <MonetizationOnIcon className={'text-white'}/> Detailing Services and Prices</NavLink>
                </Button>
              </div>
            </div>
          </div>
          <img id={'third'} src="../images/buff.jpg" className="row card-h bottom col-lg-6 card-shadow col-md-12"></img>
        </div>
      </div>
    </>
  );
}

export default Cards;
