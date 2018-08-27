import { updateObject } from '../utility';

export const removeDay = ( state, action ) => {
    const { days } = state;
    const { day } = action;
    const newDays = days.filter( element => element.id !== day.id );
    
    const newState = updateObject( state, { days: [...newDays] } );
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


function removeExercisesFromDay( state, day ) {
    if( day.exercises )
        delete day.exercises;
    return updateObject( state, { removedDay: day });
}
