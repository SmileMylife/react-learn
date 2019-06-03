import React from "react";
import {connect} from "react-redux";

class MyToDoList extends React.Component {
    /*state = {
        inputData: "",
        list: []
    };*/

    handleClick = (e) => {
        //点击提交按钮，老式方法
        /*this.setState(function (preState, preProps) {
            return Object.assign({}, preState, {
                list: [...preState.list, preState.inputData]
            })
        })*/

        //点击提交按钮，通过redux
        const submit = {
            type: "submit",
            data: this.props.inputData
        };
        this.props.dispatch(submit);
    };

    getInputData = (e) => {
        let value = e.target.value;

        //老式获取输入值方法
        /*this.setState(function(preState, preProps) {
            return Object.assign({}, preState, {
                inputData : value
            })
        })*/

        //通过redux获取输入值
        const blur = {
            type: "blur",
            data: value
        };
        this.props.dispatch(blur);
    };
    render() {
        console.log(this.props);
        return (
            <div>
                <input type="text" onBlur={this.getInputData} />
                <button type="button" onClick={this.handleClick}>提交</button>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect((state, ownProps) => {
    console.log("加载redux管理的state");
    return state;
})(MyToDoList);