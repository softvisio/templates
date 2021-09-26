/* eslint-disable no-undef */

importScripts( "https://www.gstatic.com/firebasejs/9.1.0/firebase-app-compat.js" );
importScripts( "https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging-compat.js" );

const firebaseConfig = {
    "apiKey": "AIzaSyBSV4i4KhmDx9pNZrjUiKojK6aNxkFw9GM",
    "authDomain": "smt-lounge.firebaseapp.com",
    "databaseURL": "https://smt-lounge.firebaseio.com",
    "projectId": "smt-lounge",
    "storageBucket": "smt-lounge.appspot.com",
    "messagingSenderId": "785928863534",
    "appId": "1:785928863534:web:30ddc46afbc3b1fb2c84bf",
};

firebase.initializeApp( firebaseConfig );

const isSupported = firebase.messaging.isSupported();

if ( isSupported ) {
    firebase.messaging().onBackgroundMessage( ( message, payloaf ) => {} );

    // customize notification here
    // const notificationTitle = "Background Message Title";
    // const notificationOptions = {
    // "body": "Background Message body.",
    // "icon": "/firebase-logo.png",
    // };

    // self.registration.showNotification( notificationTitle, notificationOptions );
}
