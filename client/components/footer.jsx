import React from 'react';
import AOS from 'aos';

AOS.init();

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: ''
    };
    this.handleChangeInputs = this.handleChangeInputs.bind(this);
    this.SendMessage = this.SendMessage.bind(this);
  }

  handleChangeInputs(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  SendMessage(event) {
    event.preventDefault();
    const formData = {
      name: this.state.name,
      phone: this.state.phone
    };
    fetch('api/direct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .catch(err => console.error(err));
    this.setState({
      name: '',
      phone: ''
    });
  }

  render() {
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
                <div className="d-flex justify-content-center">
                  <img className="mb-2 icon-size" src="/images/telephone.png" alt="image of telephone"></img>
                </div>
                <div className={'text-center pb-4'}>
                  <a className={'text-white'} href="tel:949-254-7482">Call us at 949-254-7482</a>
                </div>
              </div>
              <div className="pb-2">
                <div className="d-flex justify-content-center">
                  <img className="icon-size" src="/images/mail.png" alt="image of envelope"></img>
                </div>
                <div className={'text-center pb-3'}>
                  <a className={'text-white '} href='mailto:essentialcleaningoptions@gmail.com'
                    title='financedepartment@business.college.edu'>essentialcleaningoptions@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div id={'p-copy'} className={'text-center pb-5 text-white'}>&copy; Ken Mendoza 2021</div>
        </footer>
      </>
    );
  }
}

export default Footer;
