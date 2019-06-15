import React from "react"
import "./guidePage.css"

class GuidePage extends React.Component {
    constructor(props) {
        super(props);
        this.firstDealClickYes = this.firstDealClickYes.bind(this);
        this.firstDealClickNo = this.firstDealClickNo.bind(this);
        this.noRecieveReply = this.noRecieveReply.bind(this);
        this.state = {
            firstDealBtnFlag: false,
            firstDealFlag: true,
            noReply: false,
            feedBackBy10086: false
        }
    }

    firstDealClickYes() {
        this.setState({
            firstDealFlag: false,
            firstDealBtnFlag: true,
        })
    }

    firstDealClickNo() {
        this.setState({
            firstDealFlag: false,
            firstDealBtnFlag: false,
            feedBackBy10086: true
        })
    }

    noRecieveReply() {
        this.setState({
            firstDealBtnFlag: false,
            firstDealFlag: false,
            feedBackBy10086: false,
            noRecieveReply: true
        })
    }

    render() {
        return (
            <div className="pop_box_wrap">
                <div style={this.state.firstDealFlag ? {display: "block"} : {display: "none"}}>
                    <h4>您好,您将要反映的问题是否已经通过10086或其他渠道首次处理过？</h4>
                    <a className="left" onClick={this.firstDealClickYes}>是</a>
                    <a className="right" onClick={this.firstDealClickNo}>否</a>
                </div>
                <div style={this.state.firstDealBtnFlag ? {display: "block"} : {display: "none"}}>
                    <a className="left" onClick={this.noRecieveReply}>48小时内未接到回复</a>
                    <a className="right" style={{marginLeft: "30px"}} href={"http://www.baidu.com"}>已经处理，但对前期处理不满</a>
                </div>
                <div style={this.state.feedBackBy10086 ? {display: "block"} : {display: "none"}}>
                    <h4>请您优先通过10086反映，如您的合理诉求未得到妥善解决，请再来此反应监督仲裁，感谢您的支持！</h4>
                </div>
                <div style={this.state.noRecieveReply ? {display: "block"} : {display: "none"}}>
                    您的问题正在查证处理中，请耐心等待，如您的问题未得到妥善解决，请再来此反应问题？
                </div>
            </div>
        );
    }
}

export default GuidePage;