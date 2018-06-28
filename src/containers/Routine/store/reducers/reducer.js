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
} from '../actions/actionTypes';
import { updateObject } from '../utility';

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
        case ADD_DESCRIPTION: return { ...state, ...action.description };
        // case SELECTED_DAYS: 
        default: return state;
    }
}

export default reducer;