import React from 'react';
import ReactDOM from 'react-dom';
import App from "./testcomponent/my_react_demo/App";
import {createStore} from "redux";
import { MyReduce } from "./testcomponent/my_react_demo/MyReduce";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import GuidePage from "./testcomponent/guidePage/guidePage";

/*
var myStore = createStore(MyReduce);

function myRender() {
    ReactDOM.render(<Provider store={myStore}>
        <App/>
    </Provider>, document.getElementById("root"))
}
myRender();
myStore.subscribe(myRender);

const add = a => b => {
    return a + b;
};

const add1 = (a, b, c) => d => e => {
    return a + b + c + d + e;
}

console.log("科里化函数：", add(1)(2));

console.log("科里化函数测试1：", add1(1, 2 ,3)(10)(50));*/
const obj = {
    username: "zhangpei",
    password: "123"
};

console.log(obj.hasOwnProperty("username"));

ReactDOM.render(<GuidePage/>, document.getElementById("root"));
