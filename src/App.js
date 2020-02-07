import React from 'react';
import Menu from './components/Menu';
import './App.css';
import firebase from 'firebase/app';
import "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}

firebase.initializeApp(firebaseConfig);



function App() {
  return (
    <div className="App">
     <Menu />
     {console.log(process.env.REACT_APP_FIREBASE_API_KEY)}
     {console.log(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN)}
     {console.log(process.env.REACT_APP_FIREBASE_DATABASE_URL)}
     {console.log(process.env.REACT_APP_FIREBASE_PROJECT_ID)}
     {console.log(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET)}
     {console.log(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID)}
     {console.log(process.env.REACT_APP_FIREBASE_APP_ID)}
     {console.log(process.env.REACT_APP_FIREBASE_MEASUREMENT_ID)}
    </div>
  );
}

export default App;