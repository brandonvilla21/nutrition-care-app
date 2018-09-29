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
} from './actionTypes';
import { getBodyAreas, getBodyAreasWithExercies } from '../../../BodyArea/body-area.service';

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

export const handleInputChange = event => ({
    type: CHANGE_INPUT_VALUE,
    payload: { name: event.target.name, value: event.target.value }
});

export const addExercises = exercises => ({
    type: ADD_EXERCISES,
    payload: exercises
});

export const fetchBodyAreas = () => dispatch =>
    getBodyAreas()
        .then( payload =>
            dispatch({ type: LOAD_BODY_AREAS, payload }) )
        .catch( err =>
            dispatch({ type: ERROR_LOAD_BODY_AREAS, payload: err }) );

export const fetchExerciesFromBodyArea = bodyAreaId => dispatch =>
    getBodyAreasWithExercies( bodyAreaId )
        .then( res =>
            dispatch({ type: LOAD_EXERCISES, payload: res.data.exercises }) )
        .catch( err =>
            dispatch({ type: ERROR_LOADING_EXERCISES, payload: err }) );
