/**
 * Created by ZhangPei on 2019/2/9.
 */
import React from "react"
import "./login.css"
import Input from "../input/input";
import PhoneInput from "../phone_input/phone_input";
import MsgCodeInput from "../msg-code-input/msg-code-input";
import Button from "../button/button";

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
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.showPlaceholder = this.showPlaceholder.bind(this);
        this.loginOrRegisterCheck = this.loginOrRegisterCheck.bind(this);
        this.state = {
            showRegister: false,    //注册和登录切换状态
            msgLogin: false,     //是否短信登录
            formData: {},       //封装表单数据
            msgContent: "获取短信验证码",   //获取短信验证码倒计时内容，初始值为获取短信验证码
            phoneNumOrEmailCheckResult: {
                status: true,
                noPassMsg: "请输入手机号或邮箱",
                passMsg: "手机号或邮箱",
                defaultNoPassMsg: "请输入手机号或邮箱"
            },
            phoneNumOrEmailValue: "",

            pwdCheckResult: {
                status: true,
                noPassMsg: "请输入密码",
                passMsg: "密码",
                defaultNoPassMsg: "请输入密码"
            },

            msgCheckResult: {
                status: true,
                noPassMsg: "请输入短信验证码",
                passMsg: "输入六位短信验证码",
                defaultNoPassMsg: "请输入短信验证码"
            },
            msgCodeOrPwdValue: ""
        }
    }

    //切换登录注册页面
    switchLoginAndRegister() {
        var phoneState = this.state.phoneNumOrEmailCheckResult;
        var pwdState = this.state.pwdCheckResult;
        var msgState = this.state.msgCheckResult;

        phoneState.status = true;
        pwdState.status = true;
        msgState.status = true;


        this.setState(
            {
                showRegister: !this.state.showRegister,
                phoneNumOrEmailValue: "",
                msgCodeOrPwdValue: "",
                phoneNumOrEmailCheckResult: phoneState,
                pwdCheckResult: pwdState,
                msgCheckResult: msgState
            }
        )
    }

    //更改登录方式，短信和用户名密码方式
    changeLoginStyle() {
        var phoneState = this.state.phoneNumOrEmailCheckResult;
        var pwdState = this.state.pwdCheckResult;
        var msgState = this.state.msgCheckResult;

        phoneState.status = true;
        pwdState.status = true;
        msgState.status = true;

        this.setState({
            msgLogin: !this.state.msgLogin,
            phoneNumOrEmailValue: "",
            msgCodeOrPwdValue: "",
            phoneNumOrEmailCheckResult: phoneState,
            pwdCheckResult: pwdState,
            msgCheckResult: msgState
        })
    }

    //显示占位符
    showPlaceholder() {
        this.setState({
            checkResult: {
                status: true,
                noPassMsg: ""
            }
        })
    }

    //表单内的组件变化时自动更新表单数据
    getFormData(event) {
        var name = event.target.name;
        var value = event.target.value;
        this.setState(function (preState, props) {
            /*console.log(preState);
            var obj = preState.formData;
            obj[name] = value;
            return {
                formData: obj
            };*/
            if (name == "phoneNumOrEmail") {
                return {
                    phoneNumOrEmailValue: value
                }
            }
            if (name == "msgCodeOrPwd") {
                return {
                    msgCodeOrPwdValue: value
                }
            }
        });
    }

    //点击获取短信验证码
    getMsgCode() {
        //消除点击之后的延迟
        var checkPhone = /^1[34578]\d{9}$/;
        var phoneNum = this.state.phoneNumOrEmailValue;
        var preState = this.state.phoneNumOrEmailCheckResult;

        if (!phoneNum) {     //判断手机号是否为空
            //提示某字段不能为空
            preState.status = false;
            this.setState({
                phoneNumOrEmailCheckResult: preState
            });
            return;
        } else if (!checkPhone.test(phoneNum)) {
            preState.status = false;
            preState.noPassMsg = "手机号码不合法";
            this.setState({
                phoneNumOrEmailCheckResult: preState,
                phoneNumOrEmailValue: ""
            });
            return;
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

    //登录或注册校验
    loginOrRegisterCheck(style) {
        /*var formData = this.state.formData;
        var phoneNumOrEmail = formData.phoneNumOrEmail;     //用户名或邮箱
        var msgCodeOrPwd = formData.msgCodeOrPwd;       //短信验证码或密码*/

        var phoneNumOrEmail = this.state.phoneNumOrEmailValue;
        var msgCodeOrPwd = this.state.msgCodeOrPwdValue;

        //校验正则
        var checkPhone = /^1[34578]\d{9}$/;
        var checkEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;

        if (!phoneNumOrEmail) {
            console.log(phoneNumOrEmail);
            this.setState({
                phoneNumOrEmailCheckResult: {
                    status: false,
                    noPassMsg: "手机号码不能为空",
                    passMsg: "手机号或邮箱",
                    defaultNoPassMsg: "手机号码不能为空"
                }
            });
            return;
        }

        if (!checkPhone.test(phoneNumOrEmail) && !checkEmail.test(phoneNumOrEmail)) {
            this.setState({
                phoneNumOrEmailValue: "",
                phoneNumOrEmailCheckResult: {
                    status: false,
                    noPassMsg: "手机号或邮箱不合法",
                    passMsg: "手机号或邮箱",
                    defaultNoPassMsg: "输入手机号或邮箱"
                }
            });
            return;
        }

        if ("login" == style) {
            if (!msgCodeOrPwd) {
                this.setState({
                    pwdCheckResult: {
                        status: false,
                        noPassMsg: "密码不能为空",
                        passMsg: "密码",
                        defaultNoPassMsg: "请输入密码"
                    }
                });
                return;
            }
        } else if ("register" == style) {
            if (!msgCodeOrPwd) {
                this.setState({
                    msgCheckResult: {
                        status: false,
                        noPassMsg: "短信验证码不能为空",
                        passMsg: "输入六位短信验证码",
                        defaultNoPassMsg: "短信验证码不能为空"
                    }
                });
                return;
            }
            if (msgCodeOrPwd.length !== 6) {
                this.setState({
                    msgCodeOrPwdValue: "",
                    msgCheckResult: {
                        status: false,
                        noPassMsg: "短信验证码必须6位",
                        passMsg: "输入六位短信验证码",
                        defaultNoPassMsg: "短信验证码不能为空"
                    }
                });
                return;
            }
        }

        return true;
    }

    //登录
    login() {
        this.loginOrRegisterCheck("login");
        var formData = new FormData();
        formData.append("username", "zhanpgei");
        formData.append("password", "123");
        var url = "http://127.0.0.1:8080/login";
        fetch(url, {
            body: formData, // must match 'Content-Type' header
            method: 'POST',
        })
    }

    //注册
    register() {
        this.loginOrRegisterCheck("register");
        var formData = this.state.formData;
        var url = "http://127.0.0.1:8080/register";
        fetch(url, {
            body: JSON.stringify(formData), // must match 'Content-Type' header
            method: 'POST',
        })
    }

    //获取短信验证码
    getMsgMoe() {
        var url = "http://127.0.0.1:8080/getMsgCode";
        fetch(url,)
    }

    render() {
        const showRegister = this.state.showRegister;
        const msgLogin = this.state.msgLogin;
        return (
            <div>
                <div className="login_form">
                    <h1 className="text_align_center"><img src="../img/logo.png" alt=""/></h1>
                    <p className="explain_title text_align_center">
                        {showRegister ? <span>注册</span> : <span>登录</span>}知乎，发现更大的世界</p>
                    <div className="login_container">
                        {/*注册及登录手机号切换*/}
                        <div className="float_container">
                            {
                                (showRegister || msgLogin) ?
                                    <PhoneInput id="phoneNumOrEmail" getData={this.getFormData}
                                                value={this.state.phoneNumOrEmailValue} showPlaceholder={this.showPlaceholder}
                                                checkResult={this.state.phoneNumOrEmailCheckResult}/> :
                                    <Input id="phoneNumOrEmail" getData={this.getFormData} type="text" isRequired={true}
                                           placeholder="手机号或邮箱" checkResult={this.state.phoneNumOrEmailCheckResult}
                                           showPlaceholder={this.showPlaceholder}
                                           value={this.state.phoneNumOrEmailValue}
                                           needUnderline={true}/>
                            }
                        </div>
                        {/*注册及登录密码切换*/}
                        <div className="pwd_input">
                            {
                                (showRegister || msgLogin) ?
                                    <div>
                                        <MsgCodeInput id="msgCodeOrPwd" getData={this.getFormData}
                                                      getMsgCode={this.getMsgCode} needUnderline={true}
                                                      msgContent={this.state.msgContent}
                                                      value={this.state.msgCodeOrPwdValue}
                                                      showPlaceholder={this.showPlaceholder}
                                                      checkResult={this.state.msgCheckResult}/>
                                    </div> :
                                    <Input id="msgCodeOrPwd" type="password" isRequired={true} classname="login_pwd"
                                           needUnderline={true} getData={this.getFormData}
                                           value={this.state.msgCodeOrPwdValue}
                                           showPlaceholder={this.showPlaceholder}
                                           checkResult={this.state.pwdCheckResult}/>
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

                        <div>
                            {showRegister ?
                                <Button classname="login_button" buttonName="注册" clickAnimation={this.register}/> :
                                <Button classname="login_button" buttonName="登录" clickAnimation={this.login}/>}
                        </div>

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