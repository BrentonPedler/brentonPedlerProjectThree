import React from 'react';
import Form from './Form';
import { useState, useEffect } from 'react';
import firebase from './firebase.js';

const Data = () => {
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
        const obj = {
          property,
          ...data[property]
        }
        newState.push(obj);
      }
      setQuotes(newState)
    })
  }, [])

    return (
        <div>
            <Form quotes={quotes} />
        </div>
    )
}

export default Data
