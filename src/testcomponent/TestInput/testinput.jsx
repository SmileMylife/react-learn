import React from "react"

class TestInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value ? this.props.value : "这是子组件默认文本"
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value}/>
            </div>
        );
    }
}

export default TestInput;