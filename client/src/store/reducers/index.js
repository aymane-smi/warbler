import currentUser from "./currentUser";
import error from "./error";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    currentUser,
    error
});

export default rootReducer;