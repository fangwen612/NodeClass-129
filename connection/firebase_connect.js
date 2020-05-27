var firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyATfDy5ng7lk59Pv87kBr7GYIYt9G2KVAM",
    authDomain: "nodeclass-129.firebaseapp.com",
    databaseURL: "https://nodeclass-129.firebaseio.com",
    projectId: "nodeclass-129",
    storageBucket: "nodeclass-129.appspot.com",
    messagingSenderId: "585443816455",
    appId: "1:585443816455:web:887cf7f68d5b816533e6a2",
    measurementId: "G-WVEDFT6NLS"
};
// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// // firebase.analytics();


module.exports = firebase;
