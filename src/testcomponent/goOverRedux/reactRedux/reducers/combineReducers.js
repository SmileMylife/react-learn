/**
 * Created by ZhangPei on 2019/7/29.
 */
import {combineReducers} from "redux";
import updateInputReducer from "../reducers/updateInputReducer"
import addInfoReducer from "../reducers/addInfoReducer"

export default function myReducers() {
    combineReducers({
        addInfoReducer, updateInputReducer
    });
}