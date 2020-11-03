import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';

import Header from './header-navbar';
import Hero from './hero';
import Cards from './cards';
import Reviews from './reviews';
import Footer from './footer';
import Carpet from './carpet';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/carpet-cleaning" component={CarpetCleaning} />
          <Route path="/" component={Home} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: '100vw',
    scale: 0.5
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
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Hero />
      <Cards />
      <Reviews />
      <Footer />
    </motion.div>
  );
}

function CarpetCleaning() {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Carpet />
    </motion.div>
  );
}

export default App;
