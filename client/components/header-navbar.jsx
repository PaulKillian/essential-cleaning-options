import React from 'react';
import 'bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import HomeIcon from '@material-ui/icons/Home';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { green } from '@material-ui/core/colors';
import RateReviewIcon from '@material-ui/icons/RateReview';
import WorkIcon from '@material-ui/icons/Work';
import { shadows } from '@material-ui/system';
import Box from '@material-ui/core/Box';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShown: false };
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleToggleClick(event) {
    this.setState(function (state) {
      if (!this.state.isShown) {
        const slide = document.querySelector('.navbar-nav');
        slide.classList.add('animate');
        return { isShown: true };
      } else {
        return { isShown: false };
      }
    });
  }

  hideMenu(event) {
    event.target.className === 'modal-overlay m-0 p-0 block' &&
      this.setState(function () {
        const side = document.querySelector('.block');
        side.classList.add('menu-bg');
        return { isShown: false };
      });
  }

  render() {
    let modalStyles = 'modal-overlay m-0 p-0';
    let cssClass = 'side-menu menu-bg text-dark';

    if (!this.state.isShown) {
      modalStyles += ' hide';
      cssClass = 'side-menu menu-bg pt-4 ';
    } else {
      modalStyles += ' block';
      cssClass += ' show pt-4';
    }

    return (
      <>
        <div className={modalStyles} onClick={this.hideMenu}></div>
        <div className={ 'd-flex justify-content-end top col-sm-12 col-md-12 col-lg-12 position-absolute pr-3 mt-3' }>
          <div className={ 'row d-flex justify-content-end col-sm-2 col-md-2 col-lg-2' }>
            <FontAwesomeIcon icon={faBars} size="3x" className="hamburger-color  top pointer"
              onClick={() => this.handleToggleClick()}/>
          </div>
        </div>
        <div className={cssClass} onClick={this.hideMenu}>
          <ul className="navbar-nav menu-text-size">
            <li>
              <div className={'menu-logo d-flex col-5 text-shadow'}>
                <div className={'text-primary'}>E</div>
                <div className={'text-success '}>C</div>
                <div className={'text-white '}>O</div>
              </div>
            </li>
            <li className="nav-item ml-3">
              <NavLink to="/" exact className="text-dark text-left"><HomeIcon style={{ color: green[500] }}/> Home
              </NavLink>
              <hr className={'style'}></hr>
            </li>
            <li className={'bax-shad'}>
              <Accordion className={'text-left ml-2 accordion-bg col-12'}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div><PhotoCamera style={{ color: green[500] }} /> Photos</div>
                </AccordionSummary>
                <AccordionDetails className={'text-dark'}>
                  <div className={'d-flex flex-column'}>
                    <NavLink to="/carpet-gallery" exact className="text-dark">Carpet</NavLink>
                    <NavLink to="/auto-detailing" exact className="text-dark">Auto Detailing</NavLink>
                  </div>
                </AccordionDetails>
              </Accordion>
              <hr className={'style'}></hr>
            </li>
            <li>
              <Accordion className={'ml-2 accordion-bg col-12'}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div><DateRangeIcon style={{ color: green[500] }} /> Schedule Estimate</div>
                </AccordionSummary>
                <AccordionDetails className={'text-dark'}>
                  <div className={'d-flex flex-column'}>
                    <NavLink to="/carpet-estimate" exact className="text-dark">Carpet/Upholstery</NavLink>
                    <NavLink to="/auto-estimate" exact className="text-dark">Auto Detailing</NavLink>
                  </div>
                </AccordionDetails>
              </Accordion>
              <hr id={'second-to-last-hr'} className={'style'}></hr>
            </li>
            <li className="nav-item ml-3">
              <NavLink to="/" className="text-dark text-left"><WorkIcon style={{ color: green[500] }}/> Services</NavLink>
              <hr id={'last-hr'} className={'style'}></hr>
            </li>
            <li className="nav-item ml-3">
              <NavLink to="/reviews" className="text-dark text-left"><RateReviewIcon style={{ color: green[500] }} /> Reviews</NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navbar;
