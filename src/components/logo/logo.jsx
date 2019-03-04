import React from "react"
import "./logo.css"
import logo from "../../common/logo.png"

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <a href="">
                    <img src={logo} alt="" width={this.props.width} height={this.props.height} />
                </a>
            </div>
        );
    }
}

export default Logo;