import firebase from 'firebase'

const config = {
    apiKey: "YOUR ACCOUNT DETAILS",
    authDomain: "YOUR ACCOUNT DETAILS",
    projectId: "YOUR ACCOUNT DETAILS",
    storageBucket: "YOUR ACCOUNT DETAILS",
    messagingSenderId: "YOUR ACCOUNT DETAILS",
    appId: "YOUR ACCOUNT DETAILS",
    measurementId: "YOUR ACCOUNT DETAILS"
  };

  firebase.initializeApp(config);

  export default firebase