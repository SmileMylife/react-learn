import React from 'react';
import ReactDOM from 'react-dom';
import {LocaleProvider, DatePicker, message} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import 'moment/locale/zh-cn';
import "./index.css";
import App from "./components/app/app";

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

ReactDOM.render(<App />, document.getElementById('root'));