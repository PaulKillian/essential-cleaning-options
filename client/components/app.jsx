import React, { lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';
import Navbar from './header-navbar';
import Hero from './hero';
import Cards from './cards/cards';
import Review from './reviews';
import Footer from './footer';
import Estimate from './esitmates/estimate';
import Auto from './galleries/auto-gallery';
import AutoEstimate from './esitmates/auto-estimate';
import Carpet from './galleries/carpet-gallery';
import Upholstery from './galleries/upholstery-gallery';
import Price from './cards/price-cards';

const renderLoader = () => <p>...Loading</p>;

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/carpet-estimate" component={EstimateCalendar} />
          <Route path="/auto-estimate" component={AutoEstimateCalendar} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/auto-detailing" component={Detailing} />
          <Route path="/carpet-gallery" component={CarpetGallery} />
          <Route path="/upholstery-gallery" component={UpholsteryGallery} />
          <Route path="/auto-detailing-services" component={DetailPrices} />
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
const pageStyleReview = {
  position: 'absolute',
  overflow: 'hidden'
};

function Home() {
  return (
    <motion.div id='main' className="col-12 marble paralax-main"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Suspense fallback={renderLoader()}>
        <Navbar />
        <Hero />
        <Cards />
        <Footer />
      </Suspense>
    </motion.div>
  );
}

function EstimateCalendar() {
  return (
    <motion.div id='main' className="bg-off-white w-100 carpet-estimate"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Suspense fallback={renderLoader()}>
        <Navbar />
        <Estimate />
        <Footer />
      </Suspense>
    </motion.div>
  );
}
function AutoEstimateCalendar() {
  return (
    <motion.div id='main' className="bg-off-white w-100 auto-estimate"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Suspense fallback={renderLoader()}>
        <Navbar />
        <AutoEstimate />
        <Footer />
      </Suspense>
    </motion.div>
  );
}

function Reviews() {
  return (
    <motion.div id='main' className="foot1"
      style={pageStyleReview}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Suspense fallback={renderLoader()}>
        <Navbar className="position-absolute"/>
        <Review />
        <Footer />
      </Suspense>
    </motion.div>
  );
}

function Detailing() {
  return (
    <motion.div id='main' className="div1 w-100 marble"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Suspense fallback={renderLoader()}>
        <Navbar />
        <Auto />
        <Footer />
      </Suspense>
    </motion.div>
  );
}

function CarpetGallery() {
  return (
    <motion.div id='main' className="w-100 marble h-100"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Suspense fallback={renderLoader()}>
        <Navbar />
        <Carpet />
        <Footer />
      </Suspense>
    </motion.div>
  );
}

function UpholsteryGallery() {
  return (
    <motion.div id='main' className="w-100 marble"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Suspense fallback={renderLoader()}>
        <Navbar />
        <Upholstery />
        <Footer />
      </Suspense>
    </motion.div>
  );
}

function DetailPrices() {
  return (
    <motion.div id='main' className="w-100 marble"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Suspense fallback={renderLoader()}>
        <Navbar />
        <Price />
        <Footer />
      </Suspense>
    </motion.div>
  );
}

export default App;
