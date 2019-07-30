import React from "react";
import { connect } from "react-redux";

class TestReactRedux extends React.Component {
    state = {
        showInfo: "展示信息",
        inputValue: ""
    };

    //将inputvalue存入store对象中
    getInputValueByRedux = (event)  => {
        let value = event.target.value;
        this.props.updateInputVal(value);
    };

    addInfoToRedux = () => {
        console.log("点击了添加按钮后的props", this.props);
        this.props.addInfo(this.props.updateInputReducer.inputValue);
    };

    render() {
        console.log("TestReactRedux组件自带的state", this.state);
        console.log("TestReactRedux组件被store对象管理的state", this.props);
        return(
            <div>
                <h3>这是通过redux来管理的state对象展示出来的值，{this.props.addInfoReducer.showInfo}</h3>
                <input onChange={this.getInputValueByRedux} placeholder={"通过redux添加信息"}/>
                <button onClick={this.addInfoToRedux}>redux添加</button>
            </div>
        )
    }

}

//该函数每次在store对象更改的时候都会重新调用，下面这种写法，每次更新完毕之后inputValue的值都会被重置为空，所以这种写法不对。
var mapStateToProps = (state, ownProps) => {
    console.log("TestReactRedux组件的state", state);
    console.log("TestReactRedux组件的自身属性", ownProps);
    return Object.assign({}, state, {
        newState: "TestReactRedux组件新增属性",
        showInfo: "初始化参数值",
        inputValue: ""
    });
};


//该对象属性对应的方法名其实都是actionCreator函数
var mapDispatchToProps = {
    addInfo: addInfo,
    updateInputVal: updateInputVal
};

function addInfo(data) {
    console.log("点击添加按钮的数据", data);
    return {
        type: "ADD_INFO",
        data: data
    }
}

function updateInputVal(data) {
    console.log("更新输入框的数据", data);
    return {
        type: "UPDATE_INPUT_VALUE",
        data: data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestReactRedux);