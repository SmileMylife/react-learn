import React from "react"
import TestInput from "../TestInput/testinput";

class TestApp extends React.Component {
    constructor(props) {
        super(props);
        this.clickMe = this.clickMe.bind(this);
        this.state = {
            value: "父组件默认文本"
        }
    }

    clickMe() {
        this.setState({
            value: "点击之后的文本"
        })
    }

    render() {
        return (
            <div>
                <TestInput value={this.state.value}/>
                <TestInput />
                <button onClick={this.clickMe}>点击我</button>
            </div>
        );
    }


}

export default TestApp;