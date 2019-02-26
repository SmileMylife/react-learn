import React from "react"
import "./top-right.css"

class TopRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="top_right_container">
                <button className="forgetPwd_login_button">登录</button>
                <button className="join_zhihu_button">加入知乎</button>
            </div>
        );
    }
}

export default TopRight;