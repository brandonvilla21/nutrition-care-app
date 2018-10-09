import { updateObject } from '../utility';

export const removeDay = ( state, action ) => {
    const { days } = state;
    const { day } = action;
    const newDays = days.filter( element => element.id !== day.id );
    
    const newState = updateObject( state, { days: [...newDays] });
    return removeExercisesFromDay( newState, day );
};

export const selectDay = ( state, action ) => {
    const { days } = state;
    const { payload: dayId } = action;
    const updatedDays = days.map( day => {
        return day.id !== dayId
        ? day
        : { ...day, selected: true };
    });
    return { ...state, days: updatedDays };
};

export const addExercisesToStore = ( state, action ) => {
    const { routine, dayForNewExercise } = state;
    // Get the day object from routine object
    const routineDay = routine[dayForNewExercise];
    // Map new exercises to be added into the next list
    const mapNextExercises = action.payload.map( e => ({ ...e, series: '', reps: '', description: '' }) );
    // Create the nextRoutineDay with the new exercises
    const nextRoutineDay = {
        ...routineDay,
        exercises: [
            ...routineDay.exercises ,
            ...mapNextExercises
        ]
    };
    const nextRoutine = {
        ...state.routine,
        [dayForNewExercise]: nextRoutineDay
    };

    return { ...state, routine: nextRoutine };
};

export const updateExercise = ( state, action ) => {
    const { day, exercise: nextExercise } = action.payload;
    const { routine } = state;
    // Get the routine day that contains the exercise to be updated
    const dayOfRoutine = routine[day];
    // Get the list of all exercises of the selected day
    const listOfExercises = dayOfRoutine.exercises;
    const indexOfExerciseUpdated = listOfExercises.findIndex( exercise => exercise.id === nextExercise.id );
    const nextListOfExercises = [
        ...listOfExercises.slice( 0, indexOfExerciseUpdated ),
        nextExercise,
        ...listOfExercises.slice( indexOfExerciseUpdated + 1 ),
    ];
    console.log('next list', nextListOfExercises)
    const dayOfRoutineUpdated = {
        ...dayOfRoutine,
        exercises: nextListOfExercises 
    };

    const routineUpdated = {
        ...routine,
        [day]: dayOfRoutineUpdated
    };
    console.log('next routine', routineUpdated)
    return { ...state, routine: routineUpdated };

}

export const addExercisesToStore2 = ( state, action ) => {
    // Verify if the RoutineDay already exists in the routine list
    const routineDay = dayExistsInRoutine( state.routine, state.dayForNewExercise );
    // That routineDay exists so it will only be added the new exercises to it
    if ( routineDay ) {
        const nextRoutineDay = {
            ...routineDay, // Rest of props irrelevant for this operation
            exercises: [
                ...routineDay.exercises, // Prev exercises
                ...action.payload // New exercises
            ]
        };
        const nextRoutine = updateRoutineDay( state.routine, nextRoutineDay );
        return { ...state, routine: nextRoutine };
    } else { // Create a new object for the new day in routine
        // New object (RoutineDay) to store in routine list
        const newRoutineDay = {
            day: state.dayForNewExercise,
            exercises: [
                ...action.payload
            ]
        };
        // Add new object to routine list
        const routine = [ ...state.routine, newRoutineDay ];
        return { ...state, routine };
    }
};


/**
 * If the seeked day exists, it will return the day object
 * If not, it will return udndefined
 * @param {array} routine the entire routine array
 * @param {string} day string to look for in the array
 */
function dayExistsInRoutine( routine, day ) {
    if ( routine.length > 0 ) {
        return routine.find( e => e.day === day );
    }
    return undefined;
}

/**
 * This will update the RoutineDay passed as second argument in the routine list
 * @param {array} routine routine list
 * @param {object} nextRoutineDay Routine Day object (object type from routine list)
 */
function updateRoutineDay( routine, nextRoutineDay ) {
    // Find the id by the day name
    const index = routine.findIndex( e => e.day === nextRoutineDay.day );
    // Next routine list
    return [
        ...routine.slice( 0, index ),
        nextRoutineDay,
        ...routine.slice( index + 1 )
    ];
}

function removeExercisesFromDay( state, day ) {
    if( day.exercises )
        delete day.exercises;
    return updateObject( state, { removedDay: day });
}
