import React from "react"
import "./top-center.css"

/**
 * 如何解决input框不能垂直居中的问题，直接设置行内元素的父元素的line-height值即可。
 */
class TopCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotMsg: "实时热点",
            changeInput: true,
            style: {}
        }
    }

    //使用input边长或变短（初始长度，每秒变化长度，停止长度）

    changeInput(initWidth, perPx, stopPx) {
        var border, backColor;
        //减
        if (perPx < 0) {
            border = "1px solid rgb(235, 235, 235)";
            backColor = "rgb(246, 246, 246)";
        } else {    //加
            border = "1px solid rgb(114, 125, 149)";
            backColor = "rgb(114, 125, 149)"
        }

        var _this = this;
        var timer = setInterval(function() {
            initWidth += perPx;

            if (perPx < 0) {
                if (initWidth < stopPx) {
                    clearInterval(timer);
                }
            } else {
                if (initWidth > stopPx) {
                    clearInterval(timer);
                }
            }
            _this.setState({
                style: {
                    width: initWidth + "px",
                    border: border,
                    backColor: backColor
                }
            })
        }, 1);
        //输入框自动变长
    }

    render() {
        return (
            <div className="top_center_container">
                <div className="search_container">
                    <input onFocus={this.changeInput.bind(this, 330, 2, 400)} onBlur={this.changeInput.bind(this, 400, -2, 330)} style={this.state.style} type="text" placeholder={this.state.hotMsg} className="beforeInput" />
                    <svg className="search" fill="currentColor" viewBox="0 0 24 24" width="20" height="20"><path d="M17.068 15.58a8.377 8.377 0 0 0 1.774-5.159 8.421 8.421 0 1 0-8.42 8.421 8.38 8.38 0 0 0 5.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 0 1-6.316-6.316 6.323 6.323 0 0 1 6.316-6.316 6.323 6.323 0 0 1 6.316 6.316 6.323 6.323 0 0 1-6.316 6.316z" fillRule={"evenodd"}></path></svg>
                </div>
            </div>
        );
    }
}

export default TopCenter;