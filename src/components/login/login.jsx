/**
 * Created by ZhangPei on 2019/2/9.
 */
import React from "react"
import "./login.css"
import Input from "../input/input";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.switchLoginAndRegister = this.switchLoginAndRegister.bind(this);   //切换登录和注册页面
        this.requireCheck = this.requireCheck.bind(this);   //必填校验
        this.showPlaceholder = this.showPlaceholder.bind(this); //显示提示语
        this.state = {
            showRegister: false,    //注册和登录切换状态
            requireCheck: true,     //校验状态及提示消息
        }
    }

    //切换登录注册页面
    switchLoginAndRegister() {
        const flag = this.state.showRegister;
        this.setState(
            {
                showRegister: !flag
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
    
    showPlaceholder() {
        this.setState({requireCheck: true})
    }

    render() {
        return (
            <div className="login_form">
                <h1>知乎</h1>
                <p className="explain_title">
                    {this.state.showRegister ? <span>注册</span> : <span>登录</span>}知乎，发现更大的世界</p>
                <div className="login_container">
                    {/*注册及登录手机号切换*/}
                    <div className="float_container">
                        {
                            this.state.showRegister ?
                                <div>
                                    <div className="float_left user_input_left">
                                        <select>
                                            <option>中国+ 86</option>
                                        </select>
                                    </div>
                                    <div className="float_right user_input_right">
                                        <Input type="text" isRequired={true} placeholder="用户名" noPassPrompt="请输入用户名"/>
                                    </div>
                                </div>
                            :
                            <div className="login_input">
                                <input type="text" onBlur={this.requireCheck} onFocus={this.showPlaceholder} placeholder={this.state.requireCheck ? "手机号或邮箱" : "请输入手机号或邮箱"} className={!this.state.requireCheck ? "checkNoPass" : ""}/>
                            </div>
                        }
                    </div>
                    <div className="underline"></div>
                    {/*注册及登录密码切换*/}
                    <div className="pwd_input">
                        {
                            this.state.showRegister ?
                                <div><input type="text" onBlur={this.requireCheck} onFocus={this.showPlaceholder} placeholder={this.state.requireCheck ? "输入六位短信验证码" : "请输入验证码"} className={!this.state.requireCheck ? "checkNoPass register_identify_code" : "register_identify_code"} /> <a href="javascript:void(0)"
                                                                                     className="getIdentifyCode">获取短信验证码</a>
                                </div> : <input type="password" onBlur={this.requireCheck} placeholder={this.state.requireCheck ? "密码" : "请输入密码"} className={!this.state.requireCheck ? "checkNoPass login_pwd" : "login_pwd"} />
                        }

                    </div>
                    <div className="underline"></div>
                    <div className="float_container">
                        <div className="float_left">
                            {this.state.showRegister ? <span></span> : <a href="javascript:void(0)" className="identifyCode">手机验证码登录</a>}
                        </div>
                        <div className="float_right">
                            <a href="" className="forgerPwd">忘记密码？</a>
                        </div>
                    </div>
                    <div className="login_button">
                        <button>登录</button>
                    </div>
                    <div>
                        {this.state.showRegister ? <p className="register_protocol">注册即代表同意《知乎协议》《隐私保护指引》
                            <a>注册机构号</a></p> : <p className="more_login">二维码登录 · 邮箱帐号登录 · 社交帐号登录</p>}
                    </div>
                </div>
                <div className="have_no_account">
                    {this.state.showRegister ?
                        <p>已有账号?<a href="javascript:void(0)" onClick={this.switchLoginAndRegister}>登录</a></p> :
                        <p>没有账号?<a href="javascript:void(0)" onClick={this.switchLoginAndRegister}>注册</a></p>}
                </div>
            </div>
        );
    }
}

export default Login;