import React from "react"
import {Link, Route} from 'react-router-dom';
import H3 from "./H3";

class H1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>这是h1标题</h1>
            </div>
        );
    }
}

export default H1;