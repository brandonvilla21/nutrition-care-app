import {
    ADD_DESCRIPTION,
    SELECT_DAY
} from './actionTypes';

export const addDescription = event => ({
    type: ADD_DESCRIPTION,
    payload: event.target.value,
});

export const selectDay = event => ({
    type: SELECT_DAY,
    payload: event.target.value.id
});
