import React from 'react';
import ReactDOM from 'react-dom';
import {LocaleProvider, DatePicker, message} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import "antd/dist/antd.css";
import "./index.css";
import {Button} from "antd";
import Table from "./components/table/Table";

moment.locale('zh-cn');

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
    item: [{key: "emp_no", cellName: "员工编码"}, {key: "birth_date", cellName: "生日"}, {
        key: "first_name",
        cellName: "姓"
    }], width: "800px", url: "/queryEmployees", isPaging: true
};

ReactDOM.render(<Table config={config}/>, document.getElementById('root'));