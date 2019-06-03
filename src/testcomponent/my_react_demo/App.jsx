import React from "react";
import MyToDoList from "./MyToDoList";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <MyToDoList list = "这是我自己的list"/>
            </div>
        )
    }
}