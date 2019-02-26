import React from "react"
import "./forgetpwd.css"
import Top from "./top/top";
import Bottom from "./bottom/bottom";

class ForgetPwd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Top/>
                <Bottom/>
            </div>
        );
    }
}

export default ForgetPwd;