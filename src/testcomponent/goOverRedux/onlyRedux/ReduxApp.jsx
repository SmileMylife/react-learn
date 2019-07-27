import React from "react";
import TestRedux from "./TestRedux";

class ReduxApp extends React.Component {

    //组件初始化state
    state = {

    };

    render() {
        return (
            <div>
                <TestRedux store={this.props.store} />
            </div>
        )
    }
}

export default ReduxApp;