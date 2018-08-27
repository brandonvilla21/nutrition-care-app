import { combineReducers } from 'redux';
import routineReducer from '../containers/Routine/store/reducers/reducer';

export default combineReducers({
    routine: routineReducer
});
