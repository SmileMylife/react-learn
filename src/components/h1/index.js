/**
 * Created by ZhangPei on 2019/1/30.
 */
import React from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class H1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <p>段落标签</p>
                <Link to = "/showWorksheetInfo">h1组件中的链接</Link>
            </div>
        );
    }
}

export default H1;