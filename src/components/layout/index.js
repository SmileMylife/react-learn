/**
 * Created by ZhangPei on 2019/1/30.
 */
import React from "react"
import "./style.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import H1 from "../h1";
import H3 from "../h3";


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
                        <Link to = "/queryComplex">工单综合查询</Link>
                    </div>
                    <div className="midLayout">
                        <div>
                            <Route path = "/queryComplex" component = {H1} />
                            <Route path = "/showWorksheetInfo" component = {H3} />
                        </div>
                    </div>
                </div>
        );
    }
}

export default Layout;