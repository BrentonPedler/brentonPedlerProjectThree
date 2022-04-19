// Form.js
import { useState } from 'react';
import Reactions from './Reactions';

const Form = ({ quotes }) => {
    const [value, setValue] = useState('');
    const [randomNumber, setRandomNumber] = useState(0);

    // FORM FUNCTION
    const handleSelect = (event) => {
        setValue(event.target.value);
        generateRandomNumber(randomNumber);
    }

    // RANDOM NUMBER FUNCTION
    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 7);
        setRandomNumber(randomNumber);
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
                quotes.map((quote) => {
                    if (value === quote.mood && quote.index === randomNumber)
                        return (
                            <div key={quote.property}>
                                <ul className="quoteDisplay">
                                    <li>"{quote.lyric}"</li>
                                    <li>-{quote.artist}</li>
                                    <li><a href={quote.link} target="_blank">Listen to Track</a></li>
                                </ul>
                                <ul className="reactions">
                                    <li>{quote.likes}</li>
                                    <li>{quote.dislikes}</li>
                                </ul>
                                <Reactions quote={quote} />
                            </div>
                        )
                })
            }
        </div>
    )
}

export default Form;