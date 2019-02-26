import React from "react"
import "./msg-code-input.css"
import Input from "../input/input";
import GetMsgCode from "../get-msg-code/getMsgCode";

/**
 * 模板字符串使用方法，使用反引号``将模板内容包含起来，然后使用${}里边写js代码
 * 清除浮动导致的高度坍塌，直接使用overflow：hidden
 */
class MsgCodeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className={`overflowHidden ${this.props.needUnderline ? "underline" : ""}`}>
                    <div className="float_left">
                        <Input type="text" isRequired={true} placeholder="输入6位短信验证码" noPassPrompt="请输入短信验证码" width="100%"/>
                    </div>
                    <GetMsgCode classname="float_right" />
                </div>
            </div>
        );
    }
}

export default MsgCodeInput;