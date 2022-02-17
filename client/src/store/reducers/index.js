import currentUser from "./currentUser";
import error from "./error";
import message from "./message";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    currentUser,
    error,
    message
});

export default rootReducer;