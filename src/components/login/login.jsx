/**
 * Created by ZhangPei on 2019/2/9.
 */
import React from "react"
import "./login.css"
import Input from "../input/input";
import PhoneInput from "../phone_input/phone_input";
import MsgCodeInput from "../msg-code-input/msg-code-input";
import logo from "../../common/logo.png"
import Button from "../button/button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ForgetPwd from "../forgetpwd/forgetpwd";

/**
 * 如何引入图片文件，使用import方式即可，或者使用require.js，使用iport方式导入后使用jsx语法解析。
 */
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.switchLoginAndRegister = this.switchLoginAndRegister.bind(this);   //切换登录和注册页面
        this.changeLoginStyle = this.changeLoginStyle.bind(this);   //更改登录方式
        this.getFormData = this.getFormData.bind(this);     //获取表单数据
        this.getMsgCode = this.getMsgCode.bind(this);   //获取短信验证码及校验
        this.state = {
            showRegister: false,    //注册和登录切换状态
            msgLogin: false,     //是否短信登录
            formData: {

            },
            msgContent: "获取短信验证码",   //获取短信验证码倒计时
            checkPhoneNumStatus: true   //默认校验通过
        }
    }

    //切换登录注册页面
    switchLoginAndRegister() {
        this.setState(
            {
                showRegister: !this.state.showRegister
            }
        )
    }

    //更改登录方式，短信和用户名密码方式
    changeLoginStyle() {
        this.setState({
            msgLogin: !this.state.msgLogin
        })
    }

    //表单内的组件变化时自动更新表单数据
    getFormData(event) {
        var name = event.target.name;
        var value = event.target.value;
        this.setState(function(preState, props) {
            console.log(preState);
            var obj = preState.formData;
            obj[name] = value;
            return {
                formData: obj
            };
        });
    }

    //点击获取短信验证码
    getMsgCode() {
        //消除点击之后的延迟
        if (!this.state.formData.phoneNumOrEmail) {     //判断手机号是否为空
            //提示某字段不能为空
            this.setState({
                checkPhoneNumStatus: false
            });
            return ;
        }
        this.setState(
            {msgContent: "60秒后可重发"}
        );
        var _this = this;
        var time = 59;
        var timer = setInterval(function () {
            time--;
            _this.setState({
                msgContent: time + "秒后可重发"
            });

            if (time == 0) {
                _this.setState({
                    msgContent: "重新获取验证码"
                });
                clearInterval(timer);
            }
        }, 1000)
    }

    render() {
        const showRegister = this.state.showRegister;
        const msgLogin = this.state.msgLogin;
        return (
            <div>
                <div className="login_form">
                    <h1 className="text_align_center"><img src={logo} alt=""/></h1>
                    <p className="explain_title text_align_center">
                        {showRegister ? <span>注册</span> : <span>登录</span>}知乎，发现更大的世界</p>
                    <div className="login_container">
                        {/*注册及登录手机号切换*/}
                        <div className="float_container">
                            {
                                (showRegister || msgLogin) ?
                                    <PhoneInput id="phoneNumOrEmail" getData={this.getFormData} checkPhoneNumStatus={this.state.checkPhoneNumStatus}  /> : <Input id="phoneNumOrEmail" getData={this.getFormData} type="text" isRequired={true} placeholder="手机号或邮箱" noPassPrompt="请输入手机号或邮箱" needUnderline={true} />
                            }
                        </div>
                        {/*注册及登录密码切换*/}
                        <div className="pwd_input">
                            {
                                (showRegister || msgLogin) ?
                                    <div>
                                        <MsgCodeInput id="msgCodeOrPwd" getData={this.getFormData} getMsgCode={this.getMsgCode} needUnderline={true} msgContent={this.state.msgContent}/>
                                    </div> :
                                    <Input id="msgCodeOrPwd" type="password" isRequired={true} placeholder="密码" noPassPrompt="请输入密码"
                                           classname="login_pwd" needUnderline={true} getData={this.getFormData}/>
                            }
                        </div>

                        <div className="float_container">
                            <div className="float_left">
                                {showRegister ? <span></span> : <a href="javascript:void(0)" className="identifyCode"
                                                                   onClick={this.changeLoginStyle}>{this.state.msgLogin ? "密码登录（手机号或邮箱)" : "手机验证码登录"}</a>}
                            </div>
                            <div className="float_right">
                                {(showRegister || msgLogin) ?
                                    <a href="javascript:void(0)" className="forgetPwd">接收语音验证码</a> :
                                    <a href="/forgetPwd" className="forgetPwd">忘记密码？</a>}
                            </div>
                        </div>

                        <Button classname="login_button" buttonName="登录"/>
                        <div className="text_align_center">
                            {showRegister ? <p className="register_protocol">注册即代表同意《知乎协议》《隐私保护指引》
                                <a>注册机构号</a></p> : <p className="more_login">二维码登录 · 邮箱帐号登录 · 社交帐号登录</p>}
                        </div>
                    </div>
                    <div className="have_no_account">
                        {showRegister ?
                            <p>已有账号?<a href="javascript:void(0)" onClick={this.switchLoginAndRegister}>登录</a></p> :
                            <p>没有账号?<a href="javascript:void(0)" onClick={this.switchLoginAndRegister}>注册</a></p>}
                    </div>
                </div>

                <div className="buttonContainer">
                    <Button classname="downloadButton" buttonName="下载知乎"/>
                </div>
            </div>
        );
    }
}

export default Login;