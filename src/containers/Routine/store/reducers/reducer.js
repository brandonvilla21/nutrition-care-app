import {
    ADD_DESCRIPTION,
    SELECT_DAY,
} from '../actions/actionTypes';
import {
    selectDay
} from './reducerOperations';

const initialState = {
    description: '',
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
        case ADD_DESCRIPTION: return { ...state, description: action.payload };
        case SELECT_DAY: return selectDay( state, action );
        default: return state;
    }
};

export default reducer;