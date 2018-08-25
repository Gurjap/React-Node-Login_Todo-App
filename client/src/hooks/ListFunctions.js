import axios from 'axios';

const SERVER_PATH = "http://localhost:5000";

export const getList = () => {
    return axios
        .get(SERVER_PATH + "/api/tasks", {
            headers: {"Content-Type": "application/json"}
        })
        .then(res => {
            return res.data;
        });
};
export const addToList = term => {
    return axios
        .post(SERVER_PATH + "/api/task",
            {title: term},
            {
                headers: {"Content-Type": "application/json"}
            })
        .then(res => {
            console.log(res);
        });
};
export const deleteItem=term=>{
    return axios
        .delete(SERVER_PATH+`/api/task/${term}`,{
            headers:{"Content-Type":"application/json"}
        })
        .then(res=>{
            console.log(res);
        })
        .catch((error)=>{
            console.log(error);
        })
};
export const updateItem = (term,id) => {
    return axios
        .put(SERVER_PATH + `/api/task/${id}`,
            {title: term},
            {
                headers: {"Content-Type": "application/json"}
            })
        .then(res => {
            console.log(res);
        });
};

export const sign_up= (user)=>{
    return axios
        .post(SERVER_PATH + "/api/signup",user, {
            headers: {"Content-Type": "application/json"}
        })
        .then(res => {
            return res.data;
        });
};



