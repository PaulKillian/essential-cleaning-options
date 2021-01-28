import React from 'react';
import { NavLink } from 'react-router-dom';
import { Popover } from '@material-ui/core';

function Footer() {
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const handleClick1 = event => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClick2 = event => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <footer className="pt-2 bg-footer">
        <div className="pt-2 d-flex flex-wrap d-flex justify-content-around">
          <div className="row col-md-6 col-lg-3 d-flex justify-content-around">
            <div className={'pt-3 pb-4'}>
              <img src="/images/ken.jpg" alt="image of ken mendoza"></img>
            </div>
            <div className={'text-white col-md-12 text-center'}>
              Independently owned and operated<br></br>in South Orange County since 2014</div>
          </div>
          <div className="pt-4 col-lg-5 text-white text-center">
            <h2 className={'pb-3'}> Any questions or need additional<br></br>information contact Ken.</h2>
          </div>
          <div id="contact" className="text-white pt-3 col-lg-3 d-flex flex-column justify-content-end">
            <div>
              <a className="d-flex justify-content-center" href="tel:949-254-7482">
                <img className="mb-2 icon-size" src="/images/telephone.png" alt="image of telephone"></img>
              </a>
              <div className={'text-center pb-4'}>
                <a className={'text-white'} href="tel:949-254-7482">Call us at 949-254-7482</a>
              </div>
            </div>
            <div className="pb-2">
              <a className="d-flex justify-content-center" href='mailto:essentialcleaningoptions@gmail.com'>
                <img className="icon-size" src="/images/mail.png" alt="image of envelope"></img>
              </a>
              <div className={'text-center pb-3'}>
                <a className={'text-white '} href='mailto:essentialcleaningoptions@gmail.com'
                  title='financedepartment@business.college.edu'>essentialcleaningoptions@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div id={'p-copy'} className={'text-center py-4 text-white'}>&copy; Ken Mendoza 2021</div>
      </footer>
      <div className={'d-flex justify-content-around flex-wrap marble pt-3'}>
        <NavLink to="/" exact className="text-left nav-item"><span className={'text-dark'}>Home/Services</span></NavLink>
        <p aria-describedby={id} variant="contained" color="primary" onClick={handleClick1}>
          <span className={'nav-item nav-bottom text-dark pointer '}>Photos</span>
        </p>
        <Popover
          id={id}
          open={open1}
          anchorEl={anchorEl1}
          onClose={handleClose1}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <div className={'d-flex flex-column footer-bg p-2'}>
            <NavLink to="/carpet-gallery" exact className="nav-item"><span className={'text-dark'}>Carpet Cleaning</span></NavLink>
            <NavLink to="/upholstery-gallery" className="nav-item"><span className={'text-dark'}>Upholstery Cleaning</span></NavLink>
            <NavLink to="/auto-detailing" exact className="nav-item"><span className={'text-dark'}>Auto Detailing</span></NavLink>
          </div>
        </Popover>
        <p aria-describedby={id} variant="contained" color="primary" onClick={handleClick2}>
          <span className={'nav-item nav-bottom text-dark pointer'}>Schedule Estimate</span>
        </p>
        <Popover
          id={id}
          open={open2}
          anchorEl={anchorEl2}
          onClose={handleClose2}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <div className={'d-flex flex-column p-2'}>
            <NavLink to="/carpet-estimate" exact className="nav-item"><span className={'text-dark'}>Carpet/Upholstery</span></NavLink>
            <NavLink to="/auto-estimate" exact className="nav-item"><span className={'text-dark'}>Auto Services</span></NavLink>
          </div>
        </Popover>
        <NavLink to="/auto-detailing-services" className="nav-item text-left"><span className={'text-dark'}>Auto Services</span></NavLink>
        <NavLink to="/reviews" className="nav-item text-left"><span className={'text-dark'}>Reviews</span></NavLink>
      </div>
    </>
  );
}

export default Footer;
