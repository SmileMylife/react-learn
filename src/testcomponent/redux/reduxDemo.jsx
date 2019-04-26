import React from "react"
import {ADD, DECREASE, ODD_INCREASE, CHANGE_VALUE} from './action_types';

class ReduxDemo extends React.Component {

    //属性类型检测
    static propTypes = {

    };

    //添加数字
    addNum = () => {
        console.log("点击添加数字后状态：", this.props.store.getState());
        //通过redux方式进行状态更新，传入action对
        this.props.store.dispatch({type: ADD, data: 100});
    };

    //减去数字
    decreaseNum = () => {
        this.props.store.dispatch({type: DECREASE, data: 100})
    };

    //奇数添加
    oddAdd = () => {
        this.props.store.dispatch({type: ODD_INCREASE, data: 1000});
    };

    //延时添加
    timeoutAdd = () => {
        let timeout = setTimeout(() => {
            this.setState({
                num: this.state.num + this.state.selectValue
            })
        }, 1000);
    };

    //获取下拉值
    getSelectValue = (event) => {
        if (event.target) {
            let value = event.target.value;
            this.props.store.dispatch({type: CHANGE_VALUE, data: parseInt(value)})
        }
    };

    render() {
        return (
            <div>
                <h3>当前数字是：{this.props.store.getState().num}</h3>
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

export default ReduxDemo;