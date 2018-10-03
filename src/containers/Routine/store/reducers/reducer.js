import {
    ADD_DESCRIPTION,
    SELECT_DAY,
    SET_DAY_FOR_NEW_EXERCISE,
    LOAD_BODY_AREAS,
    ERROR_LOAD_BODY_AREAS,
    CHANGE_INPUT_VALUE,
    LOAD_EXERCISES,
    ERROR_LOADING_EXERCISES,
    ADD_EXERCISES
} from '../actions/actionTypes';
import {
    selectDay,
    addExercisesToStore
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
    ],
    bodyAreas: [],
    exercises: [],
    routine: {
        'Lunes': {
            exercises: [
                // { How objects should look like
                //     exercise: { ...exerciseObj },
                //     series: 10,
                //     reps: 30,
                //     description: 'lorem ipsum'
                // },
                // ...
            ]
        },
        'Martes': {
            exercises: []
        },
        'Miércoles': {
            exercises: []
        },
        'Jueves': {
            exercises: []
        },
        'Viernes': {
            exercises: []
        },
        'Sábado': {
            exercises: []
        },
        'Domingo': {
            exercises: []
        },
        // Routine Day Object
        // {
        //     day: 'Lunes',
        //     exercises: [
        //         
        //     ]
        // }
        // ...
    },
    error: '',
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ADD_DESCRIPTION:
            return { ...state, description: action.payload };
        case SELECT_DAY:
            return selectDay( state, action );
        case SET_DAY_FOR_NEW_EXERCISE:
            return { ...state, dayForNewExercise: action.payload };
        case LOAD_BODY_AREAS:
            return { ...state, bodyAreas: action.payload };
        case ERROR_LOAD_BODY_AREAS:
            return { ...state, error: action.payload };
        case CHANGE_INPUT_VALUE:
            return { ...state, [action.payload.name]: action.payload.value };
        case LOAD_EXERCISES:
            return { ...state, exercises: action.payload };
        case ERROR_LOADING_EXERCISES:
            return { ...state , error: action.payload };
        case ADD_EXERCISES:
            return addExercisesToStore( state, action );
        default:
            return state;
    }
};

export default reducer;