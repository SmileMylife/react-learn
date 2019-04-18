/**
 * Created by ZhangPei on 2019/1/30.
 */
import React from "react"
import "./style.css"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
                <div className="layoutContainer">
                    <div className="leftLayout">左侧信息栏</div>
                    <div className="topLayout"></div>
                    <div className="tabLayout">
                        <Link to = "/queryComplex">展示h1</Link>
                        <Link to = "showWorksheetInfo">展示h3</Link>
                    </div>
                    <div className="midLayout">
                        <div>
                            <Switch>
                                <Route path = "/queryComplex" component = {H1} />
                                <Route path = "/showWorksheetInfo" component = {H3} />
                            </Switch>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Layout;

class H1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <h1>h1标签</h1>
        );
    }
}

class H3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <h3>h3标签</h3>
        );
    }
}