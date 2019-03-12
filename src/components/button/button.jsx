import React from "react"
import "./button.css"

/**
 * button组件自定义样式
 */
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <button className={this.props.classname} onClick={this.props.clickAnimation}>
                    {this.props.buttonName}
                </button>
            </div>
        );
    }
}

export default Button;