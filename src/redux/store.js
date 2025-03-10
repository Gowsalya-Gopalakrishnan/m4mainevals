import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { bookReducer } from "./reducers/bookReducer";

const rootReducer = combineReducers({
    auth:authReducer,
    book:bookReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))