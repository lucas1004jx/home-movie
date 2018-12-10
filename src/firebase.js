import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBfHUx3G2PCGz_Jx0amC8YG3oBigx69g6k",
    authDomain: "home-movie.firebaseapp.com",
    databaseURL: "https://home-movie.firebaseio.com",
    projectId: "home-movie",
    storageBucket: "home-movie.appspot.com",
    messagingSenderId: "1062494143003"
  };
  

  firebase.initializeApp(config);
  const databaseRef=firebase.database().ref();
  export const movieRef=databaseRef.child('movies');
