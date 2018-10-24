import axios from '../../axios';
import sendLoopbackParams from '../../shared/sendLoopbackParams';

export const submitRoutine = state => {
    const customerId = localStorage.getItem( 'NC_userId' );
    const { routine: routineState } = state;
    const { description, routine: routineDays } = routineState;

    // Create routine object in order to match with the specified in API
    const routine = { customerId, description };
    
    // Create routineDetails object in order to match with the specified in API
    const routineDetails = Object.keys( routineDays ).reduce( ( result, key ) => {
        const setResults = routineDays[key].exercises.map( exercise => ({
            'series':exercise.series,
            'reps':exercise.reps,
            'description':exercise.description,
            'day': key,
            'exerciseId':exercise.id,
        }) );
        return setResults.length > 0 ? [...result, ...setResults] : [...result];
    }, [] );

    return axios.post( '/Routines/fullRoutine', { routine: routine, routineDetails: routineDetails });
};

export const fetchRoutines = () => {
    return axios.get( '/Routines' );
};

export const getRoutineById = id => {
    const params = {
        include: [
            { 
                relation: 'exerciseRoutineDetails' ,
                scope: {
                    include: {
                        relation: 'exercise',
                        scope: {
                            fields: ['name', 'imageName']
                        }
                    }
                }
            },
        ]
    };

    return axios.get( `/Routines/${id}`, sendLoopbackParams( params ) );
};
