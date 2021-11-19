// App.js

import './App.css';
import firebase from './firebase.js'
import { useState, useEffect } from 'react';

function App() {

  const [ quotes, setQuotes ] = useState([]);

  // DATA

  useEffect(() => {

    // REFERENCE TO DATA

    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {

      // VARIABLE TO STORE NEW STATE

      const newState = [];

      const data = response.val();

      for (let key in data) {
        newState.push(data[key]);
      }

      newState.map((newData) => {
        console.log(newData.artist);
      })


      

    })
  }, [])



  return (
    <div className="App">

      <h1>Daily Metal Motivator</h1>

      <label for="mood">How are you feeling today?</label>
      <select name="mood" id="mood">
        <option value="happy">Happy</option>
        <option value="angry">Angry</option>
        <option value="sad">Sad</option>
      </select>

      {
        // quotes.map((quote) => {
          
        // })
      }

      
    </div>
  );
}

export default App;
