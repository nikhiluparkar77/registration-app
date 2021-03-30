import {combineReducers} from "redux";
import PostReducer from "./AllReaducer/PostReducer";
export default combineReducers({
    userPost:PostReducer
})