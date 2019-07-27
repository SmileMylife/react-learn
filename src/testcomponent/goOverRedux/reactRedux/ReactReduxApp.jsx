import React from "react";
import TestReactRedux from "./TestReactRedux";
import {connect} from "react-redux";

class ReactReduxApp extends React.Component {

    //组件初始化state
    state = {};

    render() {
        console.log("ReactReduxApp组件被store管理的state", this.props);
        return (
            <div>
                <TestReactRedux/>
            </div>
        )
    }
}

var mapStateToPropsByStoreState = (state, ownProps) => {
    console.log("ReactReduxApp组件的state", state);
    console.log("ReactReduxApp组件的自身属性", ownProps);
    return Object.assign({}, state, {
        "newProps": "ReactReduxApp组件新增属性"
    });
};

export default connect(mapStateToPropsByStoreState)(ReactReduxApp);