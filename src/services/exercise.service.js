import axios from '../axios';

const findExerciseByBodyArea = bodyArea => {
    axios.get( '/Exercises' )
        .then( res => console.log( res ) )
        .catch( err => console.error( err ))
};

export {
    findExerciseByBodyArea
};