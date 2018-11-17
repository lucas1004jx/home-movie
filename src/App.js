import React, { Component } from 'react';
import LandingPage from './js_components/landing_page.js';
import ContentPage from './js_components/content_page.js';
import './App.scss';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <LandingPage />
        <ContentPage/>
      </div>
      </Provider>
    );
  }
}

export default App;

/** 
 * 
<script src="https://www.gstatic.com/firebasejs/5.5.6/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBfHUx3G2PCGz_Jx0amC8YG3oBigx69g6k",
    authDomain: "home-movie.firebaseapp.com",
    databaseURL: "https://home-movie.firebaseio.com",
    projectId: "home-movie",
    storageBucket: "",
    messagingSenderId: "1062494143003"
  };
  firebase.initializeApp(config);
</script>
 * */ 