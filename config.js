import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyAv_mAYPJn95-kNHFTDNPD1fcV6PWAM0O8",
    authDomain: "newsletter-66606.firebaseapp.com",
    databaseURL: "https://newsletter-66606.firebaseio.com",
    projectId: "newsletter-66606",
    storageBucket: "newsletter-66606.appspot.com",
    messagingSenderId: "237570186911",
    appId: "1:237570186911:web:5b0cb25b976e78e23e0caa"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()