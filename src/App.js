import React, { Component } from 'react';
import LandingPage from './js_components/landing_page.js';
import ContentPage from './js_components/content_page.js';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <ContentPage/>
      </div>
    );
  }
}

export default App;
