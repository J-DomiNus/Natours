import React, { Component } from 'react';

import Navigation from './Navigation'
import Header from './Header'
import About from './About'
import Features from './Features'
import Tours from './Tours'
import Stories from './Stories'
import Booking from './Booking'
import Footer from './Footer'
import Popup from './PopUp'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <main>
          <About />
          <Features />
          <Tours />
          <Stories />
          <Booking />
        </main>
        <Footer />
        <Popup />
      </div>
    );
  }
}

export default App;
