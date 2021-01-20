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
        <footer className="pt-3 bg-footer shadowed">
          <h2 className="text-white text-center">For Additional Information Contact Ken</h2>
          <div className="row flex justify-content-around align-items-center">
            <div className={'pt-2'}>
              <img src="/images/ken.jpg" alt="image of ken mendoza"></img>
            </div>
            <p className={'text-white col-md-6 text-center'}>
              Independently owned and operated in South Orange County since 2014</p>
            <div id="contact" className="text-white d-flex flex-column jutify-content-center">
              <div>
                <div className="d-flex justify-content-center">
                  <img className="mb-2 icon-size" src="/images/telephone.png" alt="image of telephone"></img>
                </div>
                <div>949-254-7482</div>
              </div>
              <div className="pb-2">
                <div className="d-flex justify-content-center">
                  <img className="icon-size" src="/images/mail.png" alt="image of envelope"></img>
                </div>
                <div>eco@gmail.com</div>
              </div>
            </div>
          </div>
          <h2 className="pb-3 text-white text-center">Interesting in pricing? Call for a free quote</h2>
        </footer>
      </>
    );
  }
}

export default Footer;
