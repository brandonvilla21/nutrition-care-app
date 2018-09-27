import {
    ADD_DESCRIPTION,
    SELECT_DAY,
    SET_DAY_FOR_NEW_EXERCISE,
    LOAD_BODY_AREAS,
    ERROR_LOAD_BODY_AREAS
} from './actionTypes';
import { getBodyAreas } from '../../../BodyArea/body-area.service';

export const addDescription = event => ({
    type: ADD_DESCRIPTION,
    payload: event.target.value,
});

export const selectDay = event => ({
    type: SELECT_DAY,
    payload: event.target.value.id
});

export const setDayForNewExercise = day => ({
    type: SET_DAY_FOR_NEW_EXERCISE,
    payload: day
});

export const fetchBodyAreas = () => dispatch =>
    getBodyAreas()
        .then( payload =>
            dispatch({ type: LOAD_BODY_AREAS, payload }) )
        .catch( err =>
            dispatch({ type: ERROR_LOAD_BODY_AREAS, payload: err }) );