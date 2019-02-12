/**
 * Created by ZhangPei on 2019/2/9.
 */
import React from "react"
import "./login.css"


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="login_form">
                <h1 style={{fontSize: "60px", color: "rgb(0, 119, 255)", marginBottom: "20px"}}>知乎</h1>
                <p style={{fontSize: "20px", color: "rgb(0, 119, 255)"}}>登录知乎，发现更大的世界</p>
                <div className="login_container">
                    <div className="float_container">
                        <div className="float_left user_input_left">
                            <select>
                                <option>中国+ 86</option>
                            </select>
                        </div>
                        <div className="float_right user_input_right">
                            <input type="text" placeholder="手机号或邮箱"/>
                        </div>
                    </div>
                    <div className="underline"></div>
                    <div className="pwd_input">
                        <input type="text" placeholder="密码"/>
                    </div>
                    <div className="underline"></div>
                    <div className="float_container">
                        <div className="float_left">
                            <a href="javascript:void(0)" className="identifyCode">手机验证码登录</a>
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
                    <p>没有账号?<a href="">注册</a></p>
                </div>
            </div>
        );
    }
}

export default Login;