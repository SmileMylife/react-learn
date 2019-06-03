let initState = {
    inputData: "",
    list: []
};
export function MyReduce (state = initState, action) {
    if (action.type === "add") {
        return Object.assign({}, state, {data: "我把数值改变了"});
    } else if (action.type === "submit") {
        return Object.assign({}, state, {
            list: [...state.list, action.data]
        })
    } else if (action.type === "blur") {
        return Object.assign({}, state, {
            inputData: action.data
        })
    }
    return initState;
}