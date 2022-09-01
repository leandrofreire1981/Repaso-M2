import { CREATE_USER, DELETE_USER } from '../const'

const initialState = {
    user: []
}
export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case CREATE_USER:
            return {
                ...state, user: [...state.user, action.payload]
            }
        
        case DELETE_USER:
            console.log(state.user)
            state.user.splice(action.payload, 1)
            return {
                ...state, user: state.user
            }
            
            
    
        default:
            return state
    }
}