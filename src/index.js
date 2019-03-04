import React from 'react';
import ReactDom from 'react-dom'
// import "./index.css"
import ForgetPwd from "./components/forgetpwd/forgetpwd";
import App from "./app/app";
import PhoneInput from "./components/phone_input/phone_input";
import Input from "./components/input/input";
import MsgCodeInput from "./components/msg-code-input/msg-code-input";
import Button from "./components/button/button";
import MyRouter from "./router/myrouter";
import TestApp from "./testcomponent/testapp/testapp";


/*const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={Index}></Route>
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />

        </div>
    </Router>
);*/

/*const App = () => (
    <Router>
        <div>
            <Header />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>
);

const Home = () => <h2>Home</h2>;
const Test = (props) => {
    console.log(props.match);
    return (
        <p>测试标签</p>
    )
}
const About = () => <h2>About</h2>;
const Topic = (props) => <h3>Requested Param: {props.match.params.id}</h3>;
const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>

        <ul>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul>

        <Route path={`${match.path}/:id`} component={Topic} />
        <Route
            exact
            path={match.path}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
);
const Header = () => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/topics">Topics</Link>
        </li>
    </ul>
);*/

ReactDom.render(<App/>, document.getElementById("root"));
