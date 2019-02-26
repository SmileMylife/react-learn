import React from "react"
import "./bottom.css"
import Input from "../../input/input";

class Bottom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="find_pwd_container">
                <h2 className="text_align_left">找回密码</h2>
                <p className="text_align_left title_prompt_color top_bottom_margin">验证码将会发送至你的注册邮箱或手机</p>
                <Input type="text" isRequired={true} placeholder="手机号或邮箱" noPassPrompt="请输入手机号或邮箱" classname = "input_standard"/>
            </div>
        );
    }
}

export default Bottom;