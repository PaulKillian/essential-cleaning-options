import React from 'react';
import 'bootstrap';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

AOS.init();

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

  hideMenu() {
    this.setState(function () {
      const side = document.querySelector('.block');
      side.classList.add('menu-bg');
      return { isShown: false };
    });
  }

  render() {
    let modalStyles = 'modal-overlay m-0 p-0';
    let cssClass = 'side-menu menu-bg text-white shadowed';
    if (!this.state.isShown) {
      modalStyles += ' hide';
      cssClass = 'side-menu pt-4 ';
    } else {
      modalStyles += ' block';
      cssClass += ' show pt-4';
    }

    return (
      <>
        <div className={modalStyles} onClick={this.hideMenu}></div>
        <div className="d-flex justify-content-end sticky top">
          <h4 className="position-absolute text-white shadowed-text menu">MENU</h4>
          <FontAwesomeIcon icon={faBars} size="3x" className="hamburger-color mr-3 mt-3 shadowed-text position-absolute top sticky pointer" onClick={() => this.handleToggleClick()}/>
        </div>
        <div className={cssClass} onClick={this.hideMenu}>
          <ul className="navbar-nav mt-2 menu-text-size shadowed">
            <li className="nav-item ml-3 mb-2">
              <NavLink to="/" exact className="nav-link text-white text-left">HOME</NavLink>
            </li>
            <li className="nav-item ml-3 mb-2">
              <NavLink to="/" className="nav-link text-white text-left">SERVICES</NavLink>
            </li>
            <li className="nav-item ml-3 mb-2">
              <NavLink to="/reviews" className="nav-link text-white text-left">REVIEWS</NavLink>
            </li>
            <div className={'nav-item line ml-3 mb-2 text-left'}></div>
            <li className="nav-item ml-3 mb-2 text-left">SCHEDULE ESTIMATE:</li>
            <li className="nav-item ml-3 mb-2">
              <NavLink to="/carpet-estimate" className="nav-link text-white text-left">CARPET/UPHOLSTERY</NavLink>
            </li>
            <li className="nav-item ml-3 mb-2">
              <NavLink to="/auto-estimate" className="nav-link text-white text-left">AUTO DETAILING</NavLink>
            </li>
            <li className="nav-item ml-2 mb-2">
              <img src="images/1.png" alt="image of logo"></img>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navbar;
