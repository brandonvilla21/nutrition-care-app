import {
    ADD_DESCRIPTION,
    SELECTED_DAYS,
    REMOVE_DAY,
    CLEAR_REMOVED_DAY,
    // ADD_EXERCISE_TO_DAY,
    // CHANGE_FIELD,
    // SUBMIT_ROUTINE,
    // CLOSE,
    // GO_ROUTINES,
} from '../actions/actionTypes';
import {
    removeDay,
} from './reducerOperations';

const initialState = {
    description: '',
    days: [],
    removedDay: null,
    open: false,
    modalMessage: '',
    action: null,
    modal: false
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ADD_DESCRIPTION: return { ...state, description: action.description };
        case SELECTED_DAYS: return { ...state, days: [...action.days] };
        case REMOVE_DAY: return removeDay(state, action);
        case CLEAR_REMOVED_DAY: return { ...state, removeDay: null };
        // case ADD_EXERCISE_TO_DAY: return addExerciseToDay( state, action );
        default: return state;
    }
}

export default reducer;