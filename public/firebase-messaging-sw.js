importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-messaging.js')

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@", firebase.messaging.isSupported())

firebase.initializeApp({
    apiKey: "AIzaSyC3b-57XTDpCqZhLbpRit0idTsL_iI07yQ",
    authDomain: "contus-ee9a9.firebaseapp.com",
    projectId: "contus-ee9a9",
    storageBucket: "contus-ee9a9.appspot.com",
    messagingSenderId: "65909168761",
    appId: "1:65909168761:web:862af2e06522818db112a8",
    measurementId: "G-BJRDRCQQK3"
})
const initMessaging = firebase.messaging()