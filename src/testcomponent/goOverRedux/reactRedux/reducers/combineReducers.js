/**
 * Created by ZhangPei on 2019/7/29.
 */
import {combineReducers} from "redux";
import updateInputReducer from "../reducers/updateInputReducer"
import addInfoReducer from "../reducers/addInfoReducer"

const myReducer = combineReducers({addInfoReducer, updateInputReducer});
export default myReducer;