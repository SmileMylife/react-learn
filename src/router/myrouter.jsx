import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ForgetPwd from "../components/forgetpwd/forgetpwd";
import App from "../app/app";

class MyRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route path="/forgetPwd" component={ForgetPwd}></Route>
                        <Route path="/" component={App}></Route>
                    </div>
                </Router>
            </div>
        )
    }
}

export default MyRouter;