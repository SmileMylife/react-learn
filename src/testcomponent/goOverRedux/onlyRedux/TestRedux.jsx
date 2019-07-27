import React from "react";

class TestRedux extends React.Component {
    state = {
        showInfo: "展示信息",
        inputValue: ""
    };

    //添加信息
    addInfo = (event) => {
        this.setState(function(preState) {
            return Object.assign({}, preState, {showInfo: preState.showInfo + preState.inputValue});
        })
    };

    //将输入框的值存入组件自身state对象中
    getInputValue = (event) => {
        let value = event.target.value;
        this.setState(function(preState) {
            return Object.assign({}, preState, {
                inputValue: value
            })
        })
    };

    //将inputvalue存入store对象中
    getInputValueByRedux = (event)  => {
        let value = event.target.value;
        this.props.store.dispatch({
            type: "UPDATE_INPUT_VALUE",
            data: value
        })
    };

    addInfoToRedux = () => {
        this.props.store.dispatch({type: "ADD_INFO", data: this.props.store.getState().inputValue})
    };

    render() {
        console.log("组件自带的state", this.state);
        console.log("store对象管理的state", this.props.store.getState());
        return(
            <div>
                <h3>这是我自带的state展示出来的值，{this.state.showInfo}</h3>
                <input placeholder={"请输入需要添加的信息"} onChange={this.getInputValue}/>
                <button onClick={this.addInfo}>添加</button>
                <br />
                <br />
                <h3>这是通过redux来管理的state对象展示出来的值，{this.props.store.getState().showInfo}</h3>
                <input onChange={this.getInputValueByRedux} placeholder={"通过redux添加信息"}/>
                <button onClick={this.addInfoToRedux}>redux添加</button>
            </div>
        )
    }

}

export default TestRedux;