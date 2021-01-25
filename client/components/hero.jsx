import React from 'react';
import 'lazysizes';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DetailsIcon from '@material-ui/icons/Details';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(20),
      color: 'black !important',
    },
  },
}));

function scroll() {
  const anchor = document.querySelector('#services');
  anchor.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}

function Hero(props) {
  const classes = useStyles();
  const x = window.matchMedia('(max-width: 768px)');
  if (x.matches) {
    return (
      <>
        <div className={'paralax d-flex justify-content-around flex-column align-items-center col-12'}>
          <div className={'d-flex flex-column'}>
            <div>
              <div className={'display-2 text-white text-shadow'}>ESSENTIAL</div>
              <div className={'display-3 text-white'}>CLEANING OPTIONS</div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={'paralax d-flex justify-content-end flex-column align-items-center col-12'}>
          <div className={'d-flex flex-column'}>
            <div className={'display-2 text-white'}>ESSENTIAL</div>
            <div className={'display-3 text-white'}>CLEANING OPTIONS</div>
          </div>
          <div className={classes.root}>
            <Button className={'text-dark'} onClick={scroll} variant="contained">Services
              <DetailsIcon />
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
