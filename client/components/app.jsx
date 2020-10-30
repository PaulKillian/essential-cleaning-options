import React from 'react';
import Header from './header-navbar';
import Hero from './hero';
import Cards from './cards';
import Footer from './footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'header'
    };
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    return (
      <>
        <Header />
        <Hero />
        <Cards/>
        <Footer />
      </>
    );
  }
}
