/* eslint-disable no-undef */

importScripts( "https://www.gstatic.com/firebasejs/9.1.0/firebase-app-compat.js" );
importScripts( "https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging-compat.js" );

const firebaseConfig = {
    "apiKey": "AIzaSyD58KfIhz_tCi_kM1Glah8XCgyELJDk8F0",
    "authDomain": "devel-939ed.firebaseapp.com",
    "projectId": "devel-939ed",
    "storageBucket": "devel-939ed.appspot.com",
    "messagingSenderId": "283172584233",
    "appId": "1:283172584233:web:3af375dc1c2afc6e4cd538",
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
