import React, { lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';

const Navbar = lazy(() => import('./header-navbar'));
const Hero = lazy(() => import('./hero'));
const Cards = lazy(() => import('./cards'));
const Review = lazy(() => import('./reviews'));
const Footer = lazy(() => import('./footer'));
const Estimate = lazy(() => import('./estimate'));
const Auto = lazy(() => import('./auto'));
const Contact = lazy(() => import('./contact-form'));
const Carpet = lazy(() => import('./carpet-gallery'));
const Upholstrey = lazy(() => import('./upholstrey-gallery'));

const renderLoader = () => <p>...Loading</p>;

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/estimate" component={EstimateCalendar} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/auto-detailing" component={Detailing} />
          <Route path="/contact" component={ContactMe} />
          <Route path="/carpet-gallery" component={CarpetGallery} />
          <Route path="/upholstrey-gallery" component={UpholstreyGallery} />
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
    <motion.div className="col-12 border border-10 mrble paralax-main"
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
    <motion.div className="bg-off-white border-10 border w-100 foot1"
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

function Testimonials() {
  return (
    <motion.div className="border-10 border foot1"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Suspense fallback={renderLoader()}>
        <Navbar />
        <Review />
      </Suspense>
    </motion.div>
  );
}

function Detailing() {
  return (
    <motion.div className="div1 border-10 border foot1"
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

function ContactMe() {
  return (
    <motion.div className="border-10 border w-100 foot1"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Suspense fallback={renderLoader()}>
        <Navbar />
        <Contact />
      </Suspense>
    </motion.div>
  );
}

function CarpetGallery() {
  return (
    <motion.div className="border-10 border w-100 foot1"
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

function UpholstreyGallery() {
  return (
    <motion.div className="border-10 border w-100 foot1"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Suspense fallback={renderLoader()}>
        <Navbar />
        <Upholstrey />
      </Suspense>
    </motion.div>
  );
}

export default App;
