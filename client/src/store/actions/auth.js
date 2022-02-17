import {apiCall, setTokenHeaders} from '../../services/api';

import {SET_CURRENT_USER} from '../actionTypes';
import { addError, removeError } from './error';
export function setCurrentUser(user){
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function logout(){
    return (dispatch) =>{
        localStorage.clear();
        setTokenHeaders(false);
        dispatch(setCurrentUser({}));
    };
}

export function authUser(type, userData){
    return dispatch =>{
        return new Promise((resolve, reject)=>{
            return apiCall("POST", `/api/auth/${type}`, userData).then(({token, ...user})=>{
                localStorage.setItem("token", token);
                dispatch(setCurrentUser(user));
                setTokenHeaders(token);
                dispatch(removeError());
                resolve();
            }).catch((err)=>{
                dispatch(addError(err));
                reject();
            });
        });
    }
};