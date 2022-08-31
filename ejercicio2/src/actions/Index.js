import { useState } from "react";
import { CREATE_USER, GET_USER_API } from "../const";

export function createUser(info) {

    return {
        type: CREATE_USER,
        payload: info
    }
}

export function getUserApi() {

return function(dispatch) {fetch('https://randomuser.me/api/')
                .then(res => res.json())
                .then(res => dispatch({
                    type: GET_USER_API,
                    payload: res
                }))        
            }
}