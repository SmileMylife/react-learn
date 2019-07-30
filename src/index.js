import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import ReduxDemo from "./testcomponent/redux/reduxDemo";
import Model from "./testcomponent/model/Model";
import IndexApp from "./testcomponent/indexApp/IndexApp";
import {Provider} from "react-redux";
import {addNumReduce} from "./testcomponent/redux/reduces";
import {createStore} from "redux";
import ReduxApp from "./testcomponent/goOverRedux/onlyRedux/ReduxApp";
import ReduxTestReducer from "./testcomponent/goOverRedux/onlyRedux/ReduxTestReducer";
import ReactReduxTestReducer from "./testcomponent/goOverRedux/reactRedux/ReactReduxTestReducer"
import ReactReduxApp from "./testcomponent/goOverRedux/reactRedux/ReactReduxApp";
import myReducers from "./testcomponent/goOverRedux/reactRedux/reducers/combineReducers";
/*import App from "./testcomponent/my_react_demo/App";
import {createStore} from "redux";
import { MyReduce } from "./testcomponent/my_react_demo/MyReduce";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import GuidePage from "./testcomponent/guidePage/guidePage";
import MyToDoList from "./testcomponent/my_react_demo/MyToDoList";
import { Modal } from "antd";


/!*
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

console.log("科里化函数测试1：", add1(1, 2 ,3)(10)(50));*!/
const obj = {
    username: "zhangpei",
    password: "123"
};

const obj1 = {...obj};

delete obj1.username;

console.log("obj1", obj1);


console.log(obj.hasOwnProperty("username"));

ReactDOM.render(<Modal title="信息填写">
    <p>文本内容</p>
    <p>文本内容</p>
    <p>文本内容</p>

</Modal>, document.getElementById("root"));*/




// ReactDOM.render(<IndexApp/>, document.getElementById("root"));

/*var store = createStore(addNumReduce);

ReactDOM.render(<Provider store={store}>
    <ReduxDemo/>
</Provider>, document.getElementById("root"));*/
console.log(myReducers);

var store = createStore(myReducers);

//使用redux进行管理
/*function renderMe() {
    ReactDOM.render(<ReduxApp store={store} />, document.getElementById("root"));
}

renderMe();
store.subscribe(renderMe);*/

//使用react-redux进行管理

ReactDOM.render(<Provider store={store}>
    <ReactReduxApp/>
</Provider>, document.getElementById("root"));

// ReactDOM.render(<ReduxApp/>, document.getElementById("root"));

