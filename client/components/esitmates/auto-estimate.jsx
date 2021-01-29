import React from 'react';
import emailjs from 'emailjs-com';
import anime from 'animejs/lib/anime.es.js';
import MetaTags from 'react-meta-tags';

class AutoEstimate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      make: '',
      model: '',
      year: '',
      color: '',
      time: '',
      date: '',
      bestTime: '',
      bestDate: ''

    };
    this.handleChangeInputs = this.handleChangeInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.SentMessage = this.SentMessage.bind(this);
    this.scroll = this.scroll.bind(this);
  }

  handleSubmit(e) {
    const { name, email, subject, make, model, year, color, time, date, bestTime, bestDate } = this.state;
    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      make: make,
      model: model,
      year: year,
      color: color,
      time: time,
      date: date,
      bestTime: bestTime,
      bestDate: bestDate
    };
    e.preventDefault();
    emailjs.sendForm(
      'service_o7ar5nb',
      'template_6g67bah',
      e.target, 'user_yN08fOCXM5x88VIH3gTgA',
      templateParams
    )
      .then(result => {
        console.log(result.text);
      }, error => {
        console.log(error.text);
      });
    this.resetForm();
    this.SentMessage();
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      make: '',
      model: '',
      year: '',
      color: '',
      time: '',
      date: '',
      bestTime: '',
      bestDate: ''
    });
  }

  SentMessage() {
    const form = document.getElementById('form');
    form.classList.add('hidden');
    const textWrapper = document.querySelector('.ml16');
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

  handleChangeInputs(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  scroll() {
    const anchor = document.querySelector('#message');
    anchor.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }

  componentDidMount() {
    const main = document.getElementById('main');
    main.classList.remove('position-absolute');
    main.classList.add('position-absolute');
  }

  render() {
    return (
      <>
        <MetaTags>
          <title>Schedule your auto detailing estimate in Orange County, today!</title>
          <meta name="description" content="Schedule your auto detailing estimate in Orange County, today!" />
          <meta property="og:title" content="Essential Cleaning Options: Auto Detailing Estimate" />
          <meta property="og:image" content="http://essentialcleaningoptions.com/images/auto-detailing-meta.jpg" />
        </MetaTags>
        <div className="col-12 bottom">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-font text-white text-center mt-4 mb-5 pt-5">Schedule Estimate</h1>
          </div>
        </div>
        <h1 id={'message'} className="ml16 d-none">Your Message Has Been Sent!<br></br><br></br> We will response with 24 hours</h1>
        <div id="form" className="col-lg-12 d-flex flex-column">
          <div className="row mx-2 my-4 justify-content-center">
            <div className="col-lg-6 col-md-10 col-sm-12 blur pb-5">
              <form onSubmit={this.handleSubmit} action="/estimate" id="contact-form" method="POST" role="form" className="mt-5 text-white">
                <div className="form-row">
                  <div className="form-group col-6">
                    <label className="mb-0">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                  <div className="form-group col-6">
                    <label className="mb-0">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-12">
                    <label className="mb-0">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      value={this.state.subject}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-6">
                    <label className="mb-0">Make</label>
                    <input
                      type="text"
                      className="form-control"
                      name="make"
                      value={this.state.make}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                  <div className="form-group col-6">
                    <label className="mb-0">Model</label>
                    <input
                      type="text"
                      className="form-control"
                      name="model"
                      value={this.state.model}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-6">
                    <label className="mb-0">Year</label>
                    <input
                      type="text"
                      className="form-control"
                      name="year"
                      value={this.state.year}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                  <div className="form-group col-6">
                    <label className="mb-0">Color</label>
                    <input
                      type="text"
                      className="form-control"
                      name="color"
                      value={this.state.color}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-6">
                    <label className="mb-0">Time of Service</label>
                    <input
                      type="text"
                      className="form-control"
                      name="time"
                      value={this.state.time}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                  <div className="form-group col-6">
                    <label className="mb-0">Date of Service</label>
                    <input
                      type="text"
                      className="form-control"
                      name="date"
                      value={this.state.date}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-6">
                    <label className="mb-0">Best Time to Contact You</label>
                    <input
                      type="text"
                      className="form-control"
                      name="bestTime"
                      value={this.state.bestTime}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                  <div className="form-group col-6">
                    <label className="mb-0">Best Way To Contact You</label>
                    <input
                      type="text"
                      className="form-control"
                      name="bestDate"
                      value={this.state.bestDate}
                      onChange={this.handleChangeInputs}
                      required
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <button type="submit" onClick={this.scroll} className="btn shadow bg-success text-white col-sm-3 col-md-4 col-lg-4">
                    <a href="#message"></a>SEND MESSAGE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AutoEstimate;
