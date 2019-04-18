/**
 * Created by ZhangPei on 2019/2/9.
 */
import React from "react"

import Login from "../components/login/login.jsx";
import "./app.css"
import Button from "../components/button/button";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Login/>
            </div>
        );l
    }
}

export default App;