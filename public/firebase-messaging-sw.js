importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-messaging.js')

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@", firebase.messaging.isSupported())

firebase.initializeApp({
    apiKey: "YOUR ACCOUNT DETAILS",
    authDomain: "YOUR ACCOUNT DETAILS",
    projectId: "YOUR ACCOUNT DETAILS",
    storageBucket: "YOUR ACCOUNT DETAILS",
    messagingSenderId: "YOUR ACCOUNT DETAILS",
    appId: "YOUR ACCOUNT DETAILS",
    measurementId: "YOUR ACCOUNT DETAILS"
})
const initMessaging = firebase.messaging()