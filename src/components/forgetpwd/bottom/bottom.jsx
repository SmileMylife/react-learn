import React from "react"
import "./bottom.css"
import Input from "../../input/input";
import Button from "../../button/button";
import PhoneInput from "../../phone_input/phone_input";

class Bottom extends React.Component {
    constructor(props) {
        super(props);
        this.changeLoginStyle = this.changeLoginStyle.bind(this);
        this.state = {
            changeModifyStyle: true
        }
    }

    changeLoginStyle() {
        const status = this.state.changeModifyStyle;
        this.setState({
            changeModifyStyle: !status
        })
    }

    render() {
        return (
            <div className="find_pwd_container">
                <h2 className="text_align_left ">找回密码</h2>
                <p className="text_align_left title_prompt_color forgetPwd_prompt_info">验证码将会发送至你的注册邮箱或手机</p>
                {this.state.changeModifyStyle ? <Input type="text" isRequired={true} placeholder="手机号或邮箱" noPassPrompt="请输入手机号或邮箱" needUnderline={true} />
                    : <PhoneInput width="100%"/>}
                <Button classname="login_button" buttonName="下一步"/>
                <div className="float_container">
                    <div className="float_left">
                        <a href="javascript:void(0)" className="identifyCode"
                           onClick={this.changeLoginStyle}>{this.state.changeModifyStyle ? "海外手机号找回" : "邮箱找回"}</a>
                    </div>
                    <div className="float_right">
                        <a href="javascript:void(0)" className="forgetPwd">手机或邮箱不可用了</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bottom;