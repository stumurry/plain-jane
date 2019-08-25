const firebase = require("firebase");
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyCV9k_NxmqvPzdXPVK0S3ct3H6f5HBTU4g',
    authDomain: 'fir-1-cc935.firebaseapp.com',
    projectId: 'fir-1-cc935'
});

module.exports =  {
    db: firebase.firestore()
}