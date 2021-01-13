import React, { lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';

export const Navbar = lazy(() => import('./header-navbar'));
const Hero = lazy(() => import('./hero'));
const Cards = lazy(() => import('./cards'));
const Review = lazy(() => import('./reviews'));
const Footer = lazy(() => import('./footer'));
const Estimate = lazy(() => import('./estimate'));
const Auto = lazy(() => import('./auto'));
const AutoEstimate = lazy(() => import('./auto-estimate'));
const Carpet = lazy(() => import('./carpet-gallery'));
const Upholstery = lazy(() => import('./upholstery-gallery'));
const Price = lazy(() => import('./price-cards'));
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
          <Route path="/prices" component={DetailPrices} />
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
    <motion.div id='main' className="col-12 border border-10 mrble paralax-main"
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
    <motion.div id='main' className="bg-off-white border-10 border w-100 foot1"
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
      </Suspense>
    </motion.div>
  );
}
function AutoEstimateCalendar() {
  return (
    <motion.div id='main' className="bg-off-white border-10 border w-100 auto-estimate"
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
      </Suspense>
    </motion.div>
  );
}

function Reviews() {
  return (
    <motion.div id='main' className="border-10 border foot1 position-relative"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Suspense fallback={renderLoader()}>
        <Navbar className="position-absolute"/>
        <Review />
      </Suspense>
    </motion.div>
  );
}

function Detailing() {
  return (
    <motion.div id='main' className="div1 border-10 border foot1"
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
      </Suspense>
    </motion.div>
  );
}

function CarpetGallery() {
  return (
    <motion.div id='main' className="border-10 border w-100 foot1"
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
      </Suspense>
    </motion.div>
  );
}

function UpholsteryGallery() {
  return (
    <motion.div id='main' className="border-10 border w-100 foot1"
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
      </Suspense>
    </motion.div>
  );
}

function DetailPrices() {
  return (
    <motion.div id='main' className="border-10 border w-100 foot1"
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
      </Suspense>
    </motion.div>
  );
}

export default App;
