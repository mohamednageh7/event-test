import { combineReducers } from 'redux';
import eventReducer from './event/reducer'

export default combineReducers({
    event:eventReducer
});