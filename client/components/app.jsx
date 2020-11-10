import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';

import Header from './header-navbar';
import Hero from './hero';
import Cards from './cards';
import Review from './reviews';
import Footer from './footer';
import Carpet from './carpet';
import Estimate from './estimate';
import AreaRug from './area-rug';
import Furniture from './futnture';
import Grout from './grout';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/carpet-cleaning" component={CarpetCleaning} />
          <Route path="/estimate" component={EstimateCalendar} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/area-rug" component={Area} />
          <Route path="/furniture-upholstrey" component={Upholstrey} />
          <Route path="/grout-tile" component={Tile} />
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
    scale: 10
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
    <motion.div className="bg-off-white"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Hero />
      <Cards />
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

function EstimateCalendar() {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Estimate />
    </motion.div>
  );
}

function Reviews() {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Review />
    </motion.div>
  );
}

function Area() {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <AreaRug />
    </motion.div>
  );
}

function Upholstrey() {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Furniture />
    </motion.div>
  );
}

function Tile() {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Grout />
    </motion.div>
  );
}

export default App;
