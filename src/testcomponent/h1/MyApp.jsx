import React from "react"
import {BrowserRouter, Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import H1 from "./H1";
import H2 from "./H2";

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginFlag: false
        }
    }

    clickMe = () => {
        /*var history = createBrowserHistory({
            forceRefresh: true
        });
        history.push("/1")*/
        /*this.setState({
            loginFlag: true
        })*/
        this.props.history.push("/1");
    };

    render() {
        if (this.state.loginFlag) {
            return <Redirect to="/1"/>
        }
        return (
            <div>
                <p>这是MyApp</p>
                <button onClick={this.clickMe}>点击我进行跳转</button>
                <Route path="/breakToH1" component={H1}/>
                <Route path="/breakToH2" component={H2}/>
            </div>
        );
    }
}

export default MyApp;