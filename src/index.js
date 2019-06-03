import React from 'react';
import ReactDOM from 'react-dom';
import App from "./testcomponent/my_react_demo/App";
import {createStore} from "redux";
import { MyReduce } from "./testcomponent/my_react_demo/MyReduce";

import { Provider } from "react-redux";

var myStore = createStore(MyReduce);
function myRender() {
    ReactDOM.render(<Provider store={myStore}>
        <App/>
    </Provider>, document.getElementById("root"))
}
myRender();
myStore.subscribe(myRender);