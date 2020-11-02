import React from 'react';
import { Link } from 'react-router-dom';

function Carpet() {
  return (
    <>
      <div className="shadow-sm col-12 sticky-top bg-white">
        <div className="row d-flex justify-content-between">
          <img id="logo" src="images/ECOfav.png" className=""></img>
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item mt-2">
                  <Link to="/" className="text-muted">Home</Link>
                </li>
                <li className="nav-item dropdown ml-3">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">What I Do</a>
                  <div className="dropdown-menu dropdown-width" aria-labelledby="navbarDropdownMenuLink">
                    <Link to="/carpet-cleaning" className="text-muted px-2">Carpet Cleaning</Link><br></br>
                    <Link to="/" className="text-muted px-2">Area Rug Cleaning</Link><br></br>
                    <Link to="/" className="text-muted px-2">Furniture/Upholstrey Cleaning</Link><br></br>
                    <Link to="/" className="text-muted px-2">Tile/Grout Cleaning</Link><br></br>
                    <Link to="/" className="text-muted px-2">Auto Detailing</Link>
                  </div>
                </li>
                <li className="nav-item ml-3">
                  <a className="nav-link" href="#">Reviews</a>
                </li>
                <li className="nav-item ml-3">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <img className="position-absolute text" src="/images/deep-blue-carpet.png"></img>
      </div>
    </>
  );
}

export default Carpet;
