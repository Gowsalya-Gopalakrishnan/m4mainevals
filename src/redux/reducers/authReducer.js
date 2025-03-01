import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../actions/authActions";


const initialState = {user:JSON.parse(localStorage.getItem("user"))||null}
export const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case LOGIN_USER:
        case REGISTER_USER:
            localStorage.setItem("user",JSON.stringify(action.payload))
            return {...state,user:action.payload}
        case LOGOUT_USER:
            localStorage.removeItem("user")
            return{...state,user:null}
        default:
            return state;
    }
}