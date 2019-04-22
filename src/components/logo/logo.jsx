import React from "react"
import "./logo.css"

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <img src={"../img/logo.png`"} alt="" width={this.props.width} height={this.props.height}/>
            </div>
        );
    }
}

export default Logo;