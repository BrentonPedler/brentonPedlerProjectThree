// Form.js

import { useState, useEffect } from 'react';
import firebase from './firebase.js';
import './App.css';

const Form = () => {
    const [quotes, setQuotes] = useState([]);
    const [value, setValue] = useState('');
    const [randomNumber, setRandomNumber] = useState(0);

    // FORM FUNCTIONS

    const handleSelect = (props) => {
        setValue(props.target.value);
        generateRandomNumber(randomNumber)
    }

    // RANDOM NUMBER FUNCTION

    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 7);
        setRandomNumber(randomNumber)

    }

    // DATA

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

            console.log(newState);

        })
    }, [])

    return (
        <div>

        <form>
            <label for="mood">How are you feeling today?</label>
            <select value="" onChange={handleSelect} name="mood" id="mood">
                <option value="">Please Select</option>
                <option value="happy">Happy</option>
                <option value="angry">Angry</option>
                <option value="sad">Sad</option>
            </select>
        </form>




    {
        quotes.filter((quote) => value === quote.mood && quote.index === randomNumber).map((quote) => (
            <ul className="quoteDisplay">
                <li>"{quote.lyric}"</li>
                <li>-{quote.artist}</li>
            </ul>
        ))
    }
    </div>

    )
}


export default Form;