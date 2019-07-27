//总reduce方法，参数一是state树，参数二是action动作
const innitState = {

};

export default function AllReduce(state = innitState, action) {
    if (action.type == "ADD_INFO") {
        console.log("点击了添加按钮", action.data);
        return Object.assign({}, state, {showInfo: state.showInfo + action.data})
    } else if (action.type == "UPDATE_INPUT_VALUE") {
        console.log("更新输入框数据了");
        return Object.assign({}, state, {inputValue: action.data})
    }

    return state;
}