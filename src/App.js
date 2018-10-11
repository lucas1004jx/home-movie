import React, { Component } from 'react';
import LandingPage from './js_components/landing_page.js';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage></LandingPage>
      </div>
    );
  }
}

export default App;
