import { LOAD_MESSAGE, REMOVE_MESSAGE } from "../actionTypes";
import { apiCall } from "../../services/api";
import { addError } from "./error";
 export function loadMessage(message){
    return {
        type: LOAD_MESSAGE,
        message
    }
 };

 export const remove = id => ({
    type: REMOVE_MESSAGE,
    id
  });
  
 export function fetchMessages(){
     return dispatch =>{
         return apiCall("GET", "/api/messages").then((res)=>{
             dispatch(loadMessage(res));
         }).catch((err)=>{
             addError(err);
         });
     };
 };


 export const removeMessage = (user_id, message_id) => {
    return dispatch => {
      return apiCall("delete", `/api/users/${user_id}/message/${message_id}`)
        .then(() => dispatch(remove(message_id)))
        .catch(err => dispatch(addError(err.message)))
    }
  } 
  
  export const postNewMessage = text => (dispatch, getState) => {
    let {currentUser} = getState();
    const id = currentUser.user.id;
    return apiCall("post", `/api/users/${id}/message`, {text})
      .then((res) => {
        console.log(res);
      })
      .catch(err => {dispatch(addError(err.message))})
  }