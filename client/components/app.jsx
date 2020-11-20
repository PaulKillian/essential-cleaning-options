import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';

import Navbar from './header-navbar';
import Hero from './hero';
import Cards from './cards';
import Review from './reviews';
import Footer from './footer';
import Carpet from './carpet';
import Estimate from './estimate';
import AreaRug from './area-rug';
import Furniture from './futnture';
import Grout from './grout';
import Auto from './auto';
import Contact from './contact-form';

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/carpet-cleaning" component={CarpetCleaning} />
          <Route path="/estimate" component={EstimateCalendar} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/area-rug" component={Area} />
          <Route path="/furniture-upholstrey" component={Upholstrey} />
          <Route path="/grout-tile" component={Tile} />
          <Route path="/auto-detailing" component={Detailing} />
          <Route path="/contact" component={ContactMe} />
          <Route path="/" component={Home} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: '100vw',
    scale: 1
  },
  in: {
    opacity: 1,
    y: 0.4,
    scale: 1
  },
  out: {
    opacity: 0,
    y: '-100vw',
    scale: 1
  }
};

const pageTransition = {
  type: 'tween',
  stiffness: 20,
  ease: 'anticipate',
  duration: 0.7
};

const pageStyle = {
  position: 'absolute'

};

function Home() {
  return (
    <motion.div className="bg-off-white col-12"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </motion.div>
  );
}

function CarpetCleaning() {
  return (
    <motion.div className="bg-off-white col-12"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Navbar />
      <Carpet />
    </motion.div>
  );
}

function EstimateCalendar() {
  return (
    <motion.div className="bg-off-white col-12"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Navbar />
      <Estimate />
    </motion.div>
  );
}

function Reviews() {
  return (
    <motion.div className="bg-off-white col-12"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Navbar />
      <Review />
    </motion.div>
  );
}

function Area() {
  return (
    <motion.div className="bg-off-white col-12"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Navbar />
      <AreaRug />
    </motion.div>
  );
}

function Upholstrey() {
  return (
    <motion.div className="bg-off-white col-12"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Navbar />
      <Furniture />
    </motion.div>
  );
}

function Tile() {
  return (
    <motion.div className="bg-off-white col-12"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Navbar />
      <Grout />
    </motion.div>
  );
}

function Detailing() {
  return (
    <motion.div className="bg-off-white col-12"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Navbar />
      <Auto />
    </motion.div>
  );
}

function ContactMe() {
  return (
    <motion.div className="bg-off-white col-12"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Navbar />
      <Contact />
    </motion.div>
  );
}

export default App;
