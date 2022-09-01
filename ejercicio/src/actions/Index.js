import { useState } from "react";
import { CREATE_USER, DELETE_USER } from "../const";

export function createUser(info) {

    return {
        type: CREATE_USER,
        payload: info
    }
}

export function deleteUser(id) {
    return {
        type: DELETE_USER,
        payload: id
    }
}