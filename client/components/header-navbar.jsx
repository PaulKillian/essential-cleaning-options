import React from 'react';
import 'bootstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: []
    };
  }

  render() {
    return (
      <>
        <div className="shadow-sm col">
          <div className="row d-flex justify-content-between">
            <img id="logo" src="images/ECOfav.png" className=""></img>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item dropdown ml-3">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">What I Do</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="#">Carpet Cleaning</a>
                      <a className="dropdown-item" href="#">Area Rug Cleaning</a>
                      <a className="dropdown-item" href="#">Furniture/Upholstrey Cleaning</a>
                      <a className="dropdown-item" href="#">Tile/Grout Cleaning</a>
                      <a className="dropdown-item" href="#">Auto Detailing</a>
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
      </>
    );
  }
}

export default Header;
