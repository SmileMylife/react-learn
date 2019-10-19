import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import "./index.css";
import {createStore} from "redux";
import myReducers from "./testcomponent/reactReduxDemoByGuanFang/reducers/index";
import {SqlProductForm} from "./components/antd_login_regist/SqlProduct";
import {ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import {WrappedRegistrationForm} from "./components/antd_login_regist/RegistrationForm";
import {WrappedNormalLoginForm} from "./components/antd_login_regist/LoginForm";
import Layout from "antd/es/layout/layout";
import LayOut from "./components/antd_login_regist/LayOut";
import SlideMenu from "./components/antd_login_regist/SlideMenu";
// import moment from "moment";
/*import App from "./testcomponent/my_react_demo/App";
import {createStore} from "redux";
import { MyReduce } from "./testcomponent/my_react_demo/MyReduce";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import GuidePage from "./testcomponent/guidePage/guidePage";
import MyToDoList from "./testcomponent/my_react_demo/MyToDoList";
import { Modal, Row, Col } from "antd";


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
const config = {
    item: [{key: "empNo", cellName: "员工编码"}, {key: "birthDate", cellName: "生日"}, {
        key: "firstName",
        cellName: "姓"
    }, {
        key: "lastName",
        cellName: "名"
    }, {
        key: "gender",
        cellName: "性别"
    }, {
        key: "hireDate",
        cellName: "录用日期"
    }], width: "800px", url: "/queryEmployees", isPaging: true
};

// moment.locale('zh-cn');

// ReactDOM.render(<Table config={config}/>, document.getElementById('root'));
/*ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <SqlProductForm/>
    </ConfigProvider>
    , document.getElementById("root"));*/

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <LayOut />
    </ConfigProvider>
    , document.getElementById("root"));

/*ReactDOM.render(
    <Row>
        <Col className={"test"} xs={{ span: 1, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Col
        </Col>
        <Col className={"test"} xs={{ span: 1, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Col
        </Col>
        <Col className={"test"} xs={{ span: 1, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Col
        </Col>
    </Row>,
    document.getElementById('root'),
);*/


// ReactDOM.render(<ReduxApp/>, document.getElementById("root"));

