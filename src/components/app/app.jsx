/**
 * Created by ZhangPei on 2019/2/9.
 */
import React from "react"

import Login from "../login/login.jsx";
import "./app.css"

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
        );
    }
}

export default App;