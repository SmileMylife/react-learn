import React from "react"
import {Route, NavLink, Switch, Link, Redirect} from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <NavLink to="/about">展示登录部分</NavLink>
                <NavLink to="/home">展示表格</NavLink>
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                    <Redirect to="/home"/>
                </Switch>
            </div>
        )
    }
}

export default App;

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                About
            </div>
        );
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}
