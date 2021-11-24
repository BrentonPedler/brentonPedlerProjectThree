// Form.js

import { useState } from 'react';
import firebase from 'firebase/app';

const Form = ({ quotes }) => {

    const [value, setValue] = useState('');
    const [randomNumber, setRandomNumber] = useState(0);

    // FORM FUNCTION

    const handleSelect = (event) => {
        setValue(event.target.value);
        generateRandomNumber(randomNumber)
    }

    // RANDOM NUMBER FUNCTION

    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 7);
        setRandomNumber(randomNumber)

    }

    // LIKE FUNCTION

    const likeOperator = (quote) => {
        const dbRef = firebase.database().ref(`/${quote.property}`);
        const oldObject = {...quote}
        const newLike = oldObject.likes + 1;
        const newObject = { 
            ...oldObject, 
            likes: newLike
        }
        delete newObject.property
        dbRef.update(newObject)
    }

    // DISLIKE FUNCTION

    const dislikeOperator = (quote) => {
        const dbRef = firebase.database().ref(`/${quote.property}`);
        const oldObject = {...quote}
        const newDislike = oldObject.dislikes + 1;
        const newObject = {
            ...oldObject,
            dislikes: newDislike
        }
        delete newObject.property
        dbRef.update(newObject)
    }


    // DROPDOWN & QUOTE DISPLAY

    return (
        <div>
            
            <form>
                <label htmlFor="mood">How are you feeling today?</label>
                <select value="" onChange={handleSelect} name="mood" id="mood">
                    <option value="please select">Please Select</option>
                    <option value="happy">Happy</option>
                    <option value="angry">Angry</option>
                    <option value="sad">Sad</option>
                </select>
            </form>




            {
                quotes.filter((quote) => value === quote.mood && quote.index === randomNumber).map((quote) => {
                    console.log(quote)
                    return (
                        <div key={quote.property}>
                            <ul className="quoteDisplay">
                                <li>"{quote.lyric}"</li>
                                <li>-{quote.artist}</li>
                            </ul>

                            <ul className="reactions">
                                <li>{quote.likes}</li>
                                <li>{quote.dislikes}</li>
                            </ul>

                            <button onClick={() => likeOperator(quote)}>LOVE</button>
                            <button onClick={() => dislikeOperator(quote)}>HATE</button>
                        </div>
                    )
                })

            }

        </div>

    )
}


export default Form;