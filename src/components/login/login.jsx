/**
 * Created by ZhangPei on 2019/2/9.
 */
import React from "react"
import "./login.css"


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.switchLoginAndRegister = this.switchLoginAndRegister.bind(this);   //切换登录和注册页面
        this.state = {
            showRegister: false,
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
                                        <input type="text" placeholder="手机号或邮箱"/>
                                    </div>
                                </div>
                            :
                            <div className="login_input">
                                <input type="text" placeholder="手机号或邮箱"/>
                            </div>
                        }
                    </div>
                    <div className="underline"></div>
                    {/*注册及登录密码切换*/}
                    <div className="pwd_input">
                        {
                            this.state.showRegister ?
                                <div><input type="text" placeholder="输入6位短信验证码" className="register_identify_code" /> <a href="javascript:void(0)"
                                                                                     className="getIdentifyCode">获取短信验证码</a>
                                </div> : <input type="password" placeholder="密码" className="login_pwd"/>
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
                    <div className="more_login">
                        <p>二维码登录 · 邮箱帐号登录 · 社交帐号登录</p>
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