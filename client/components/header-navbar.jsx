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
      cssClass += ' showMenu';
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
          <ul className="navbar-nav ">
            <li className={'bg-footer shadowed col-12'}>
              <div className={'menu-logo ml-3 d-flex text-shadow '}>
                <div className={'text-primary'}>E</div>
                <div className={'text-success '}>C</div>
                <div className={'text-white '}>O</div>
              </div>
            </li >
            <NavLink to="/" exact className="text-dark text-left nav-item mt-3 ml-3"><HomeIcon style={{ color: green[500] }}/> Home/Services
              <li>
                <hr className={'style'}></hr>
              </li>
            </NavLink>
            <li className={'bax-shad'}>
              <Accordion className={'text-left ml-2 nav-item accordion-bg col-12'}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div><PhotoCamera style={{ color: green[500] }} /> Photos</div>
                </AccordionSummary>
                <AccordionDetails className={'text-dark'}>
                  <div className={'d-flex flex-column'}>
                    <NavLink to="/carpet-gallery" exact className="text-dark nav-item">Carpet Cleaning</NavLink>
                    <NavLink to="/auto-detailing" exact className="text-dark nav-item">Auto Detailing</NavLink>
                  </div>
                </AccordionDetails>
              </Accordion>
              <hr className={'style'}></hr>
            </li>
            <li>
              <Accordion className={'ml-2 accordion-bg nav-item col-12'}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div><DateRangeIcon style={{ color: green[500] }} /> Schedule Estimate</div>
                </AccordionSummary>
                <AccordionDetails className={'text-dark'}>
                  <div className={'d-flex flex-column'}>
                    <NavLink to="/carpet-estimate" exact className="text-dark nav-item">Carpet/Upholstery</NavLink>
                    <NavLink to="/auto-estimate" exact className="text-dark nav-item">Auto Services</NavLink>
                  </div>
                </AccordionDetails>
              </Accordion>
              <hr id={'second-to-last-hr'} className={'style'}></hr>
            </li>
            <NavLink to="/auto-detailing-services" className="text-dark ml-3 nav-item text-left"><WorkIcon style={{ color: green[500] }}/> Auto Services
              <li className="nav-item ml-3">
                <hr id={'last-hr'} className={'style'}></hr>
              </li>
            </NavLink>
            <NavLink to="/reviews" className="text-dark nav-item ml-3 text-left"><RateReviewIcon style={{ color: green[500] }} /> Reviews
              <li className="nav-item ml-3"></li>
            </NavLink>
            <li>
              <hr className={'style'}></hr>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navbar;
