import React, { Component } from 'react';
import '../index.css';
import Header from './Header'
import About from './About'
import Features from './Features'
import Tours from './Tours'
import Stories from './Stories'
import Booking from './Booking'
import Footer from './Footer'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <main>
          <About />
          <Features />
          <Tours />
          <Stories />
          <Booking />
          <Footer />
        </main>
        
      </div>
    );
  }
}

export default App;
