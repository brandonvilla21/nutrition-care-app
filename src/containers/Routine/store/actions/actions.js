import {
    ADD_DESCRIPTION,
    SELECTED_DAYS,
    REMOVE_DAY,
    CLEAR_REMOVED_DAY,
    ADD_EXERCISE_TO_DAY,
    CHANGE_FIELD,
    SUBMIT_ROUTINE,
    CLOSE,
    GO_ROUTINES,
} from './actionTypes';

export const addDescription = description => {
    return {
        type: ADD_DESCRIPTION,
        description,
    };
};

export const selectedDays = days => {
    return {
        type: SELECTED_DAYS,
        days,
    };
};

export const removeDay = day => {
    return {
        type: REMOVE_DAY,
        day,
    };
};

export const clearRemovedDay = () => {
    return {
        type: CLEAR_REMOVED_DAY,
    };
};

export const addExerciseToDay = ( day, exercise ) => {
    return {
        type: ADD_EXERCISE_TO_DAY,
        day,
        exercise,
    };
};

export const changeField = ( event, day, exercise ) => {
    return {
        type: CHANGE_FIELD,
        event,
        day,
        exercise,
    };
};

export const submitRoutine = () => {
    return {
        type: SUBMIT_ROUTINE,
    };
};

export const close = () => ({ type: CLOSE });

export const goRoutines = () => ({ type: GO_ROUTINES });