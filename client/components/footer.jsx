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
        <footer className="pt-3 m-4">
          <div className="row foot1 shadowed flex justify-content-around">
            <div className="mt-4 pt-5 ml-3 mb-3 col-2">
              <img src="/images/ken.jpg" alt="image of ken mendoza"></img>
            </div>
            <div className="pl-3 pt-5">
              <div className="col-12">
                <img className="mb-2 ml-4 mt-1 icon-size" src="/images/telephone.png" alt="image of telephone"></img>
                <div>555-234-2938</div>
              </div>
              <div className="pt-3 pb-2 col-12">
                <img className="ml-4 icon-size" src="/images/mail.png" alt="image of envelope"></img>
                <div>essentialcleaningoptions@gmail.com</div>
              </div>
            </div>
            {/* <div className="d-flex mt-5 pt-5 justify-content-end">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gDUOQQSSbl0"
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                picture-in-picture" allowFullScreen>
              </iframe>
            </div> */}
            <form onSubmit={this.SendMessage} action="/estimate" id="contact-form" method="POST" role="form" className="mt-5 text-white">
              <div className="pb-3 pl-3">Don't Need An Estimate?</div>
              <div className="form-group col-8">
                <label className="mb-0">Name<span className="star-red">*</span></label>
                <input
                  type="text"
                  className="form-control shadowed"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChangeInputs}
                  required
                />
              </div>
              <div className="form-group col-8 pb-4">
                <label className="mb-0">Phone<span className="star-red">*</span></label>
                <input
                  type="text"
                  className="form-control shadowed"
                  name="phone"
                  value={this.state.email}
                  onChange={this.handleChangeInputs}
                  required
                />
              </div>
            </form>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
