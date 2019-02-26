import React from "react"
import "./phone_input.css"
import Input from "../input/input";

/**
 * 输入手机号输入框组件
 * 组件初始化属性：width（整体长度 + px)
 */
class PhoneInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="phoneInput_container" style={{width: this.props.width}}>
                    <div className="float_left phoneInput_select_container">
                        <select>
                            <option>中国+ 86</option>
                        </select>
                    </div>
                    <div className="float_left phoneInput_input_container">
                        <Input type="text" isRequired={true} placeholder="请输入11位手机号码" noPassPrompt="请输入手机号码"
                               width="100%"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhoneInput;