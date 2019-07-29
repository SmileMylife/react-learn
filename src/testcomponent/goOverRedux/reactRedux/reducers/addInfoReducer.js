/**
 * Created by ZhangPei on 2019/7/29.
 */
export default function addInfoReducer(state= {showInfo: ""}, action) {
    if (action.type == "ADD_INFO") {
        console.log("点击了添加按钮", action.data);
        return Object.assign({}, state, {showInfo: state.showInfo + action.data})
    }
}