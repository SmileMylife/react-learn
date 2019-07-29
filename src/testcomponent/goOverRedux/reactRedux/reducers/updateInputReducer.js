/**
 * Created by ZhangPei on 2019/7/29.
 */
export default function updateInputReducer(state={inputValue: ""}, action) {
    if (action.type === "UPDATE_INPUT_VALUE") {
        console.log("更新输入框数据了");
        return Object.assign({}, state, {inputValue: action.data})
    }
    return state;
}