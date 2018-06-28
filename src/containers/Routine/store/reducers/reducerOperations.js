import { updateObject } from '../utility';

export const removeDay = ( state, action ) => {
    const { days } = state;
    const { day } = action;
    const newDays = days.filter( element => element.id !== day.id );
    
    const newState = updateObject( state, { days: [...newDays] } );
    return removeExercisesFromDay( newState, day );
};

function removeExercisesFromDay( state, day ) {
    if( day.exercises )
        delete day.exercises;
    return updateObject( state, { removedDay: day } );
}

// Problem: not modifying the state properly

// export const addExerciseToDay = ( state, action ) => {
//     const { days } = state;
//     const { day, exercise } = action;
//     const index = days.indexOf( day );
//     pushExercise( days[index], exercise );
// }

// function pushExercise( day, exercise ) {
//     return new Promise((resolve, reject) => {
//         const prop = 'exercises';
//         // If there's not such property in object,
//         // it will be created as an array
//         if ( !(prop in day) )
//             day[prop] = [];

//         // Verify if the exercise has not
//         // been added to this array before
//         if ( day[prop] && day[prop].filter(ex => ex.id === exercise.id).length > 0 ) {
//             reject({ message: 'Este ejercicio ya se encuentra agregado en este día'});
//         } else {
//             day[prop].push(exercise);
//             resolve(day);
//         }
//     })
// }
