import React from "react"
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// import {decrease, changeValue, oddIncrease, add, timeout} from './action_types';
import * as actionCreators from "./action_types";
import {bindActionCreators} from "redux";

class ReduxDemo extends React.Component {

    //属性类型检测
    static propTypes = {
        componentName: PropTypes.string.isRequired
    };

    static defaultProps = {
        componentName: "默认名字"
    };

    //添加数字
    addNum = () => {
        console.log("点击添加数字后状态：", this.props);
        //通过redux方式进行状态更新，传入action对
        // this.props.jia(this.props.selectValue);      //这种方式是对于connect（）函数第二个参数是自定义对象
        this.props.add(this.props.selectValue);         //这种方式是对于connect（）函数第二个参数是函数，使用bindActionCreators返回的
        // this.props.dispatch({type: "add", data: this.props.selectValue})  //这种情况是在connect没有传入第二个参数的情况下用的。
    };

    //减去数字
    decreaseNum = () => {
        this.props.jian(this.props.selectValue);
    };

    //奇数添加
    oddAdd = () => {
        this.props.jijia(this.props.selectValue);
    };

    //延时添加
    timeoutAdd = () => {
        let timeout = setTimeout(() => {
            this.props.timeout(this.props.selectValue);
        }, 1000);
    };

    //获取下拉值
    getSelectValue = (event) => {
        if (event.target) {
            let value = event.target.value;
            this.props.change(value);
        }
    };

    render() {
        return (
            <div>
                <h3>当前数字是：{this.props.num}</h3>
                <select onChange={this.getSelectValue} defaultValue="1" required={true}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.addNum}>添加</button>
                <button onClick={this.decreaseNum}>减掉</button>
                <button onClick={this.oddAdd}>奇数添加</button>
                <button onClick={this.timeoutAdd}>延时添加</button>
            </div>
        );
    }
}

//验证第一个参数传参，如果只传递第一个参数，则会将state树中的所有内容当做props传递给组件，
// 而该回调函数中的第二个参数ownProps只代表了该组件自有的属性值（不包括state的），
// connect方法的第二个参数不传递意味着会将store的dispatch方法当做属性给组件传递，而组件则需要使用this.props.dispatch(actiontype)方法来调用reduce
/*export default connect((state) => {
    return Object.assign({}, state, {
        newState: "我新增了一个状态"
    })
})(ReduxDemo);*/

// export default connect({newState: "这是我新的状态"})(ReduxDemo);        //这种写法不对，第一个参数必须为回调函数


//验证第二个参数传参是对象，如果第一个参数不传值，state并不会作为props传递给组件，只会将自定义的dispatchCreator方法作为props传递给组件。
/*export default connect(null, {jia: add, jian: decrease, jijia: oddIncrease, change: changeValue, timeout: timeout})(ReduxDemo);*/



//第二个参数如果传递的是一个函数，那么这个函数接收dispatch作为参数，即为dispatch()方法。
export default connect(state => state, (data) => {  //综下，data其实应该叫dispatch更好。
    console.log("data的值为：", data);      //实际为dispatch方法
    console.log(bindActionCreators(actionCreators, data));       //这个函数接收action创建函数，和dispatch函数
    return bindActionCreators(actionCreators, data);        //这种相当于返回了上述验证第二个参数案例的格式{add: fn(add), ..}
    /*return {      //如果返回的是这个对象，则type和data将会被作为组件的props属性。
        type: "add",
        data: data
    }*/
})(ReduxDemo);





//正常情况
/*
export default connect((state, ownProps) => {
    return Object.assign({}, state, {
        newState: "我新增了一个状态"
    })
}, (dispatch, ownProps) => {
    console.log("这是dispath内容：" + dispatch);
    console.log("这是组件自身属性", ownProps);
})(ReduxDemo);*/
