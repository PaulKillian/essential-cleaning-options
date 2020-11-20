import React from 'react';
import 'bootstrap';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';

AOS.init();

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShown: false };
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
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
      return { isShown: false };
    });
  }

  render() {
    let modalStyles = 'modal-overlay m-0 p-0';
    let cssClass = 'side-menu menu-bg text-white shadowed';
    if (!this.state.isShown) {
      modalStyles += ' hide';
      cssClass = 'side-menu pt-4 menu-bg';
    } else {
      modalStyles += ' block';
      cssClass += ' show pt-4';
    }

    return (
      <>
        <div className={modalStyles} onClick={this.hideMenu}></div>
        <div className="d-flex justify-content-end sticky">
          <i className="fa fa-bars fa-3x text-primary position-absolute pr-5 pt-3 top sticky" onClick={() => this.handleToggleClick()}></i>
        </div>
        <div className={cssClass} onClick={this.hideMenu}>
          <ul className="navbar-nav mt-2">
            <li className="nav-item ml-5 mb-2">
              <NavLink to="/" exact className="nav-link text-white text-left">Home</NavLink>
            </li>
            <li className="nav-item ml-5 mb-2">
              <NavLink to="/carpet-cleaning" className="nav-link text-white text-left">Carpet Cleaning</NavLink>
            </li>
            <li className="nav-item ml-5 mb-2">
              <NavLink to="/area-rug" className="nav-link text-white text-left">Area Rug Cleaning</NavLink>
            </li>
            <li className="nav-item ml-5 mb-2">
              <NavLink to="/furniture-upholstrey" className="nav-link text-white text-left">Furniture/Upholstrey Cleaning</NavLink>
            </li>
            <li className="nav-item ml-5 mb-2">
              <NavLink to="/grout-tile" className="nav-link text-white text-left">Tile/Grout Cleaning</NavLink>
            </li>
            <li className="nav-item ml-5 mb-2">
              <NavLink to="/auto-detailing" className="nav-link text-white text-left">Auto Detailng</NavLink>
            </li>
            <li className="nav-item ml-5 mb-2">
              <NavLink to="/reviews" className="nav-link text-white text-left">Reviews</NavLink>
            </li>
            <li className="nav-item ml-5 mb-2">
              <NavLink to="/contact" className="nav-link text-white text-left">Contact Us</NavLink>
            </li>
            <li className="nav-item ml-5 mb-2">
              <NavLink to="/estimate" className="nav-link text-white text-left">Schedule Estimate</NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navbar;
