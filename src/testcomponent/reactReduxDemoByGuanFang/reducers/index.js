/**
 * Created by ZhangPei on 2019/7/30.
 */
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    todos,
    visibilityFilter
})