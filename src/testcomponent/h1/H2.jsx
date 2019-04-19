import React from "react"
import {withRouter} from 'react-router-dom';

class H2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>这是h2标题</h1>
            </div>
        );
    }
}

export default H2;