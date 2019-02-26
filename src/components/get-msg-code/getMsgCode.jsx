import React from "react"
import "./getMsgCode.css"

class GetMsgCode extends React.Component {
    constructor(props) {
        super(props);
        this.getMsgCode = this.getMsgCode.bind(this);
        this.state = {
            msgContent: "获取短信验证码"
        }
    }

    render() {
        var className = this.props.classname;
        var msgContent = this.state.msgContent;
        if (className == undefined) {
            className = "";
        } else {
            className = className + " ";
        }
        return (
            msgContent == "重新获取验证码" || msgContent == "获取短信验证码" ?
                <a href="javascript:void(0)" className={className + "getIdentifyCode"} onClick={this.getMsgCode}>
                    {this.state.msgContent}
                </a> : <span className={className + "countDown"}>{msgContent}</span>

        );
    }

    //点击获取短信验证码，为什么获取不到event
    getMsgCode() {
        //消除点击之后的延迟
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
}

export default GetMsgCode;