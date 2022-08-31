import { CREATE_USER, GET_USER_API } from '../const'

const initialState = {
    user: [],
    detail: {}
}
export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case CREATE_USER:
            return {
                ...state, user: [...state.user, action.payload]
            }
        
        case GET_USER_API:
            return {
                ...state, detail: action.payload
            }
            
    
        default:
            return state
    }
}