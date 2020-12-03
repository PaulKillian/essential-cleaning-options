import React from 'react';
import anime from 'animejs/lib/anime.es.js';

class Estimate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      rooms: '',
      stairs: '',
      stains: '',
      estimate: '',
      time: '',
      date: '',
      bestTime: '',
      bestDate: ''

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
      rooms: this.state.rooms,
      stairs: this.state.stairs,
      stains: this.state.stains,
      estimate: this.state.estimate,
      time: this.state.time,
      date: this.state.date,
      bestTime: this.state.bestTime,
      bestDate: this.state.bestDate
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
        duration: 100,
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
        <div className="col-12 scale bottom">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <p className="text-font mt-4 shadowed-text text-white">Schedule Estimate</p>
            <img className="mt-3 shadowed phone-height" src="/images/calendar3.webp" alt="image of contact icons"></img>
          </div>
        </div>
        <h1 className="ml16 d-none">Your Message Has Been Sent!</h1>
        <div id="form" className="col-12 mx-3 mt-4 d-flex flex-column">
          <div className="row mx-2 my-4 justify-content-center">
            <div className="col-6">
              <form onSubmit={this.SendMessage} action="/estimate" id="contact-form" method="POST" role="form" className="mt-5 text-white">
                <div className="form-row">
                  <div className="form-group col-6">
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
                  <div className="form-group col-6">
                    <label className="mb-0">Email<span className="star-red">*</span></label>
                    <input
                      type="text"
                      className="form-control shadowed"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-12">
                    <label className="mb-0">Subject<span className="star-red">*</span></label>
                    <input
                      type="text"
                      className="form-control shadowed"
                      name="subject"
                      value={this.state.subject}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-6">
                    <label className="mb-0">Rooms<span className="star-red">*</span></label>
                    <input
                      type="text"
                      className="form-control shadowed"
                      name="rooms"
                      value={this.state.message}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                  <div className="form-group col-6">
                    <label className="mb-0">Stairs</label>
                    <input
                        type="text"
                        className="form-control shadowed"
                        name="stairs"
                        value={this.state.message}
                        onChange={this.handleChangeInputs}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-6">
                    <label className="mb-0">Stains</label>
                    <input
                      type="text"
                      className="form-control shadowed"
                      name="stains"
                      value={this.state.message}
                      onChange={this.handleChangeInputs}
                    />
                  </div>
                  <div className="form-group col-6">
                    <label className="mb-0">Estimated Square Footage</label>
                    <input
                      type="text"
                      className="form-control shadowed"
                      name="estimate"
                      value={this.state.message}
                      onChange={this.handleChangeInputs}
                      />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-6">
                    <label className="mb-0">Time of Completion</label>
                    <input
                      type="text"
                      className="form-control shadowed"
                      name="time"
                      value={this.state.message}
                      onChange={this.handleChangeInputs}
                    />
                  </div>
                  <div className="form-group col-6">
                    <label className="mb-0">Date of Completion</label>
                    <input
                      type="text"
                      className="form-control shadowed"
                      name="date"
                      value={this.state.message}
                      onChange={this.handleChangeInputs}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-6">
                    <label className="mb-0">Best Time to Contact You</label>
                    <input
                      type="text"
                      className="form-control shadowed"
                      name="bestTime"
                      value={this.state.message}
                      onChange={this.handleChangeInputs}
                    />
                  </div>
                  <div className="form-group col-6">
                    <label className="mb-0">Best Way To Contact You</label>
                    <input
                      type="text"
                      className="form-control shadowed"
                      name="bestDate"
                      value={this.state.message}
                      onChange={this.handleChangeInputs}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn shadow bg-white w-25">SEND MESSAGE</button>
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
