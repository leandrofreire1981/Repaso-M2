import { CREATE_USER } from '../const'

const initialState = {
    user: []
}
export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case CREATE_USER:
            return {
                ...state, user: [...state.user, action.payload]
            }
            
            
    
        default:
            return state
    }
}