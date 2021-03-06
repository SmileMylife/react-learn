/*
  包含多个reduce函数的模块
 */
import {ADD, ODD_INCREASE, DECREASE, CHANGE_VALUE, TIMEOUT} from './action_types';


const initState = {
    num: 0,
    selectValue: 1,
    text: "test组件文本内容",
    tree: "这是state树，调用完store.createStore之后会构造这个state树"
};

export function addNumReduce(state = initState, action) {
    switch (action.type) {
        case ADD:
            console.log("点击了添加之后：", action);
            return Object.assign({}, state, {num: state.num + state.selectValue});
        case DECREASE:
            return Object.assign({}, state, {num: state.num - state.selectValue});
        case ODD_INCREASE:
            if (state.num % 2 != 0) {
                return Object.assign({}, state, {num: state.num + state.selectValue});
            } else {
                return state;
            }
        case CHANGE_VALUE:
            return changeSelectValue(state, action);
        case TIMEOUT:
            return Object.assign({}, state, {
                num: state.num + state.selectValue
            });
        default:
            return state;
    }
}

//下拉值改变时reduce
function changeSelectValue(state, action) {
    return Object.assign({}, state, {selectValue: parseInt(action.data)});
}