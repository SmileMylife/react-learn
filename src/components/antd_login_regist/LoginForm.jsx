import {Form, Icon, Input, Button, Checkbox} from 'antd';
import "./login.css";
import React, {Fragment} from "react";

class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) { //如果为空则校验通过
                //请求后台
                fetch("http://localhost:8080/loginSqlProduct", {
                    body: values,
                    mode: 'no-cors',
                    //请求后台
                    method: "POST`",
                }).then(function (resp) {
                    return resp.json();
                }).then(function (result) {
                    console.log("返回json对象", result);
                }).catch(function (e) {
                    console.log("请求出错，错误信息：" + e);
                });
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        let url = process.env.PUBLIC_URL + '/img/cmos_logo.png';
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <div className={"logo login-logo"} style={{background: `url(${url})`, backgroundSize: "cover"}}/>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: '请输入用户名'}],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="用户名"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: '请输入密码'}],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住密码</Checkbox>)}
                    <a className="login-form-forgot" href="">
                        忘记密码？
                    </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    没有账号？<a href="">注册</a>
                </Form.Item>
            </Form>
        );
    }
}

export const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(NormalLoginForm);