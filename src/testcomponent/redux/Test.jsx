import React from "react"
import {connect} from "react-redux";
import PropTypes from "prop-types"

class Test extends React.Component {

    static propTypes = {
        text: PropTypes.string.isRequired
    };

    static defaultProps = {
        text: "啦啦"
    };

    render() {
        return (
            <div>
                <h1>测试redux</h1>
                <p>{this.props.text}</p>
                <p>{this.props.myTest}</p>
            </div>
        );
    }

    //组件将要挂载时
    componentWillMount() {

    }

    //组件挂载完毕
    componentDidMount() {
        console.log("组件挂载完毕时的属性：", this.props);
    }
}

export default connect((state, ownProps) => {
    console.log("test组件state状态：", state);
    console.log("test组件ownProps自身属性：", ownProps);
    return Object.assign({}, state, {
        text: "段落文本"
    })
})(Test);