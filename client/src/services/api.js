import axios from 'axios';


export function setTokenHeaders(token){
    if(token){
        axios.defaults.headers.common["authorization"] = `bearer ${token}`;
    }else{
        delete axios.defaults.headers.common["authorization"]
    }
}
export function apiCall(method, path, data){
    return new Promise((resolve, reject)=>{
        return axios[method.toLowerCase()](path, data)
        .then((res)=>{
            return resolve(res.data);
        })
        .catch((err)=>{
            return reject(err.response.data.err);
        })
    });
};