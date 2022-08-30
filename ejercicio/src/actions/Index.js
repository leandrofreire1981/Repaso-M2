import { useState } from "react";
import { CREATE_USER } from "../const";

export function createUser(info) {

    return {
        type: CREATE_USER,
        payload: info
    }
}

export function getUserDetail(id) {

    
}