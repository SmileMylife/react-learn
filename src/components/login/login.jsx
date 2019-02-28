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

/**
 * 如何引入图片文件，使用import方式即可，或者使用require.js，使用iport方式导入后使用jsx语法解析。
 */
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.switchLoginAndRegister = this.switchLoginAndRegister.bind(this);   //切换登录和注册页面
        this.requireCheck = this.requireCheck.bind(this);   //必填校验
        this.changeLoginStyle = this.changeLoginStyle.bind(this);   //更改登录方式
        this.state = {
            showRegister: false,    //注册和登录切换状态
            requireCheck: true,     //校验状态及提示消息
            msgLogin: false,     //是否短信登录
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

    //必填校验
    requireCheck(event) {
        console.log(event);
        const value = event.target.value;
        if (value == "" || value == null || value == undefined) {
            this.setState({
                requireCheck: false
            });
        }
    }

    //更改登录方式，短信和用户名密码方式
    changeLoginStyle() {
        this.setState({
            msgLogin: !this.state.msgLogin
        })
    }

    render() {
        const showRegister = this.state.showRegister;
        const msgLogin = this.state.msgLogin;
        return (
            <div>
                <div className="login_form">
                    <h1><img src={logo} alt=""/></h1>
                    <p className="explain_title">
                        {showRegister ? <span>注册</span> : <span>登录</span>}知乎，发现更大的世界</p>
                    <div className="login_container">
                        {/*注册及登录手机号切换*/}
                        <div className="float_container">
                            {
                                (showRegister || msgLogin) ?
                                    <PhoneInput/> : <Input type="text" isRequired={true} placeholder="手机号或邮箱" noPassPrompt="请输入手机号或邮箱" needUnderline={true} />
                            }
                        </div>
                        {/*注册及登录密码切换*/}
                        <div className="pwd_input">
                            {
                                (showRegister || msgLogin) ?
                                    <div>
                                        <MsgCodeInput needUnderline={true}/>
                                    </div> :
                                    <Input type="text" isRequired={true} placeholder="密码" noPassPrompt="请输入密码"
                                           classname="login_pwd" needUnderline={true}/>
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
                                    <a href="./forgetPwd/forgetPwd.html" className="forgetPwd">忘记密码？</a>}
                            </div>
                        </div>

                        <div className="login_button">
                            <button>登录</button>
                        </div>
                        <div>
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