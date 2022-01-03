import React from 'react';
import firebase from 'firebase/app';

const Reactions = ({quote}) => {

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


    return (
        <>
            <button onClick={() => likeOperator(quote)}>LOVE</button>
            <button onClick={() => dislikeOperator(quote)}>HATE</button>   
        </>
    )
}

export default Reactions
