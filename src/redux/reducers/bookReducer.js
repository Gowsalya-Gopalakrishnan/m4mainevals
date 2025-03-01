import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from "../actions/booksActions";

const initialState={books:[],loadind:false,error:null}

export const bookReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_BOOKS_REQUEST:
            return {...state,loading:true}
        case FETCH_BOOKS_SUCCESS:
            return {...state,books:[...state,action.payload],loading:false}
        default:
            return state;
    }
}