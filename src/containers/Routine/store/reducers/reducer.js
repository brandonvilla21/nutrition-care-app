import {
    ADD_DESCRIPTION,
    SELECT_DAY,
    SET_DAY_FOR_NEW_EXERCISE,
    LOAD_BODY_AREAS,
    ERROR_LOAD_BODY_AREAS
} from '../actions/actionTypes';
import {
    selectDay
} from './reducerOperations';

const initialState = {
    description: '',
    dayForNewExercise: '',
    days: [
        { id: 0, name: 'Lunes', selected: false },
        { id: 1, name: 'Martes', selected: false },
        { id: 2, name: 'Miércoles', selected: false },
        { id: 3, name: 'Jueves', selected: false },
        { id: 4, name: 'Viernes', selected: false },
        { id: 5, name: 'Sábado', selected: false },
        { id: 6, name: 'Domingo', selected: false },
    ]
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ADD_DESCRIPTION:return { ...state, description: action.payload };
        case SELECT_DAY: return selectDay( state, action );
        case SET_DAY_FOR_NEW_EXERCISE: return { ...state, dayForNewExercise: action.payload }
        case LOAD_BODY_AREAS:
            console.log( action.payload );
            return state;
        case ERROR_LOAD_BODY_AREAS:
            console.log( action.payload );
            return state;
        default: return state;
    }
};

export default reducer;