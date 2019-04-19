import React from "react"
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import H3 from "./H3";
import MyApp from "./MyApp";

class TopApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={MyApp}/>
                    <Route path="/h3" component={H3}/>
                </Switch>
            </div>
        );
    }
}

export default TopApp;