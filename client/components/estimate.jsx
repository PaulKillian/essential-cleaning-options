import React from 'react';

class Estimate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.handleChangeInputs = this.handleChangeInputs.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  handleChangeInputs(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  updateProfile(event) {
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <p className="position-absolute text-font mt-5 pt-5 text-white">SCHEDULE ESTIMATE</p>
          <img className="w-100 carpet-h position-relative" src="/images/schedule.jpg"></img>
        </div>
        <div className="col-12 mx-3 mt-4 d-flex flex-column">
          <div className="row mx-2 my-4 justify-content-center">
            <div className="col-6">
              <form action="/estimate" id="contact-form" method="POST" role="form" className="mt-5">
                <div className="form-row">
                  <div className="form-group col">
                    <label className="text-muted mb-0">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Name"
                      value={this.state.name}
                      onChange={this.handleChangeInputs}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-12">
                    <label className="text-muted mb-0">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChangeInputs}
                    />
                  </div>
                  <div className="form-group col-12">
                    <label className="text-muted mb-0">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      value={this.state.subject}
                      onChange={this.handleChangeInputs}
                    />
                  </div>
                  <div className="form-group col-12">
                    <label className="text-muted mb-0">Your Message</label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChangeInputs}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn shadow bg-button text-muted w-25"
                    onClick={this.updateProfile}>SEND MESSAGE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Estimate;
