import { combineReducers } from "redux";
import { AddProductRedux } from "./AddProductReducer";
import { userReducer } from "./userReducer";

export const  rootReducer =  combineReducers({
    AddProductRedux,
    userReducer
})