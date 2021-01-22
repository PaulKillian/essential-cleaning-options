import React from 'react';
import 'bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';

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
            <FontAwesomeIcon icon={faBars} size="3x" className="hamburger-color shadowed-text top pointer"
              onClick={() => this.handleToggleClick()}/>
          </div>
        </div>
        <div className={cssClass} onClick={this.hideMenu}>
          <ul className="navbar-nav mt-2 menu-text-size shadowed-text">
            <li className="nav-item ml-3">
              <NavLink to="/" exact className="nav-link2 text-dark text-left">Home</NavLink>
            </li>
            <li>
              <Accordion className={'bg-white mb-1 text-left text-dark col-12'}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div>Photos</div>
                </AccordionSummary>
                <AccordionDetails className={'text-dark'}>
                  <div className={'d-flex flex-column'}>
                    <NavLink to="/carpet-gallery" exact className="text-dark">Carpet</NavLink>
                    <NavLink to="/auto-detailing" exact className="text-dark">Auto Detailing</NavLink>
                  </div>
                </AccordionDetails>
              </Accordion>
            </li>
            <li>
              <Accordion className={'bg-white mb-1 text-dark col-12'}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div>Schedule Estimate</div>
                </AccordionSummary>
                <AccordionDetails className={'text-dark'}>
                  <div className={'d-flex flex-column'}>
                    <NavLink to="/carpet-estimate" exact className="text-dark">Carpet/Upholstery</NavLink>
                    <NavLink to="/auto-estimate" exact className="text-dark">Auto Detailing</NavLink>
                  </div>
                </AccordionDetails>
              </Accordion>
            </li>
            <li className="nav-item ml-3">
              <NavLink to="/" className="nav-link2 text-dark text-left">Services</NavLink>
            </li>
            <li className="nav-item ml-3">
              <NavLink to="/reviews" className="nav-link2 text-dark text-left">Reviews</NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navbar;
