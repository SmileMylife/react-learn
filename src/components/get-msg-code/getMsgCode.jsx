import React from "react"
import "./getMsgCode.css"

class GetMsgCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        var className = this.props.classname;
        var msgContent = this.props.msgContent;
        if (className == undefined) {
            className = "";
        } else {
            className = className + " ";
        }
        return (
            msgContent == "重新获取验证码" || msgContent == "获取短信验证码" ?
                <a href="javascript:void(0)" className={className + "getIdentifyCode"} onClick={this.props.getMsgCode}>
                    {this.props.msgContent}
                </a> : <span className={className + "countDown"}>{msgContent}</span>

        );
    }
}

export default GetMsgCode;