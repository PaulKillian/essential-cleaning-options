import React from 'react';
import anime from 'animejs/lib/anime.es.js';

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
    this.SentMessage = this.SentMessage.bind(this);
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
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };
    fetch('api/estimate', {
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
      email: '',
      subject: '',
      message: ''
    });
    this.SentMessage();
  }

  SentMessage() {
    var form = document.getElementById('form');
    form.classList.add('hidden');
    var textWrapper = document.querySelector('.ml16');
    textWrapper.classList.remove('d-none');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({ loop: true })
      .add({
        targets: '.ml16 .letter',
        translateY: [-100, 0],
        easing: 'easeOutExpo',
        duration: 1400,
        delay: (el, i) => 30 * i
      }).add({
        targets: '.ml16',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      });
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <p className="position-absolute text-font mt-4 text-white">SCHEDULE ESTIMATE</p>
          <img className="w-100 carpet-h position-relative" src="/images/schedule.jpg"></img>
        </div>
        <h1 className="ml16 d-none">Your Message Has Been Sent!</h1>
        <div id="form" className="col-12 mx-3 mt-4 d-flex flex-column">
          <div className="row mx-2 my-4 justify-content-center">
            <div className="col-6">
              <form onSubmit={ this.SendMessage } action="/estimate" id="contact-form" method="POST" role="form" className="mt-5">
                <div className="form-row">
                  <div className="form-group col">
                    <label className="text-muted mb-0">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChangeInputs}
                      required
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
                      required
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
                      required
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
                      required
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn shadow bg-button text-muted w-25">SEND MESSAGE</button>
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
