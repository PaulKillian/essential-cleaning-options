import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import buffing from './buf.png';

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
  const classes = useStyles();
  return (
    <>
      <div className="mt-5 container">
        <div id="services" className="row card-parallax mx-1 d-flex justify-content-center mb-5">
          <div className="col-lg-6 col-md-12 bg-white card-shadow">
            <h2 className={'display-4 text-center pt-3'}>CARPET CLEANING</h2>
            <hr className={'bg-dark'}></hr>
            <p className="p-2">I provide low moisture carpet cleaning with the use of
              a rotary and or Orbital machine and provide a plant
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
            <h2 className={'display-4 text-center pt-3'}>UPHOLSTERY CLEANING</h2>
            <hr className={'bg-dark'}></hr>
            <p className="p-2">This results in less re-soiling and faster drying times.
              How does this work? Wet is attracted to dry, so the
              wet carpet and its sequestered soils are attracted to
              the drier cleaning pad and are “held” to the cleaning
              pad as the machine spins, agitates, and scrubs the
              carpet fibers.<br></br><br></br>
              The attractive thing about encapsulation is what gets
              missed by the cleaning pad is crystallized once the
              carpet is completely dried and encapsulated for future
              soil removal by the normal vacuuming process.
              My main product is Nano-Maxx which is a plant based
              registered green cleaner that has a zero residue and is
              totally safe and effective.</p>
            {/* <NavLink to="/carpet-gallery" className="nav-link  text-dark text-center pb-2">Photos</NavLink> */}
          </div>
          <img id={'second'} src="../images/coucha.webp" className="row col-lg-6 card-h bottom card-shadow col-md-12"></img>
        </div>
        <div className="row mx-1 d-flex justify-content-center mb-5">
          <div className="col-lg-6 col-md-12 bg-white card-shadow">
            <h2 className={'display-4 text-center pt-3'}>AUTO<br></br>DETAILING</h2>
            <hr className={'bg-dark'}></hr>
            <p className="p-2 text-center">Providing cleaning with a chemical free cleaner
              and sanitizing with steam for refrigerators and freezers. For ovens and stove tops
              I use a non toxic bio degradable cleaner/degreaser  followed up with steam for a
              complete sanitization. </p>
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
                  <NavLink to="/prices" className="nav-link text-white text-center pr-1">
                    <MonetizationOnIcon className={'text-white'}/> Detailing Services and Prices</NavLink>
                </Button>
              </div>
            </div>
          </div>
          <img id={'third'} src={buffing} className="row card-h bottom col-lg-6 card-shadow col-md-12"></img>
        </div>
      </div>
    </>
  );
}

export default Cards;
