import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './header-navbar';
import Hero from './hero';
import Cards from './cards';
import Reviews from './reviews';
import Footer from './footer';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/reviews">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Cards />
      <Reviews />
      <Footer />
    </>
  );
}

function About() {
  return (
    <>
      <Header />
      <div>
        <h2>About</h2>
      </div>
    </>
  );
}

function Dashboard() {
  return (
    <>
      <Header />
      <div>
        <h2>Dashboard</h2>
      </div>
    </>
  );
}
