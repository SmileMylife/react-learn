import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect, Route, Link, NavLink, BrowserRouter, HashRouter, Switch} from 'react-router-dom'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import 'moment/locale/zh-cn';

import "./index.css";
import MyApp from "./testcomponent/h1/MyApp";
import App from "./components/app/app";
import Login from "./components/login/login";
import H3 from "./testcomponent/h1/H3";
import TopApp from "./testcomponent/h1/TopApp";
import H1 from "./testcomponent/h1/H1";
import H2 from "./testcomponent/h1/H2";
import ForgetPwd from "./components/forgetpwd/forgetpwd";
import {createStore} from 'redux';
import ReduxDemo from "./testcomponent/redux/reduxDemo";
import {addNumReduce} from './testcomponent/redux/reduces';
import {Provider} from 'react-redux';
import Test from "./testcomponent/redux/Test";


/*class App extends React.Component {
    state = {
        date: null,
    };

    handleChange = (date) => {
        message.info(`您选择的日期是: ${date.format('YYYY-MM-DD')}`);
        this.setState({ date });
    };
    render() {
        const { date } = this.state;
        return (
            <LocaleProvider locale={zhCN}>
                <div style={{ width: 400, margin: '100px auto' }}>
                    <DatePicker onChange={this.handleChange} />
                    <div style={{ marginTop: 20 }}>
                        当前日期：{date ? date.format('YYYY-MM-DD') : '未选择'}
                    </div>
                </div>
            </LocaleProvider>
        );
    }
}*/

/*const config = {
    item: [{key: "provCode", cellName: "省份编码"}, {key: "tenantId", cellName: "租户编码"}, {
        key: "username",
        cellName: "姓名"
    }], width: "800px", url: "http://localhost:8080/queryEmployees", isPaging: true
};*/

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

/*ReactDOM.render(<Table config={config}/>, document.getElementById('root'));*/

/*
ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route path="/index" component={App}/>
        <Route path="/loginSuccess" component={Layout}/>
    </Switch>
</BrowserRouter>, document.getElementById('root'));*/

/*ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route path="/" component={App}/>
        <Route path="/loginSuccess" component={Layout}/>
    </Switch>
</BrowserRouter>, document.getElementById('root'));*/

/*ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/forgetPwd" component={ForgetPwd}></Route>
    </Switch>
</BrowserRouter>, document.getElementById("root"));*/


var myStore = createStore(addNumReduce);

function renderMe() {
    ReactDOM.render(<Provider store={myStore}>
        <ReduxDemo addProps = "这是我自带属性"/>
    </Provider>, document.getElementById("root"));
}

renderMe();
myStore.subscribe(renderMe);

console.log("获取当前state：", myStore.getState());
