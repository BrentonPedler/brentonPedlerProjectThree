// APP.js

import './App.css';
import Header from './Header';
import Form from './Form';
import Footer from './Footer'
import { useState, useEffect } from 'react';
import firebase from './firebase.js';


function App() {

  const [quotes, setQuotes] = useState([]);


  // DATA FROM FIREBASE

  useEffect(() => {

    // REFERENCE TO DATA

    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {

      // VARIABLE TO STORE NEW STATE

      const newState = [];
      const data = response.val();

      for (let property in data) {
        newState.push(data[property]);
      }

      setQuotes(newState)

    })
  }, [])


  return (

    <div className="App">
      <Header />
      <main className="wrapper">
        <Form quotes={quotes} />
      </main>
      <Footer />
    </div>
    
  );
}



export default App;
