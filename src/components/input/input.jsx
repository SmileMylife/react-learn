import React from "react"
import "./input.css"

/**
 * 组件属性包括css类名、是否必填、占位符名称及校验失败是占位符名称、input框类型、是否需要下划线
 * classname、isRequired、placeholder、checkNoPass、type、needUnderline
 * 学习心得：1.react组件是针对单一组件而言，在设计的时候不必考虑到外部的一些因素，反而使耦合度过高
 *         2.在组件初始化的时候，元素绑定的事件里的js是会执行一次的，所以不能直接在事件中直接写事件处理代码，而是封装成函数，如this.show不能写成this.show()
 *         3.一定不要让组件的样式和外部耦合，因此要在组件外部包一层div
 */
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.requireCheck = this.requireCheck.bind(this);
        this.showPlaceholder = this.showPlaceholder.bind(this);
        this.state = {
            checkResult: this.props.checkResult == undefined ? true : this.props.checkResult,    //此运算符如果前者为true后者也为true则返回后者，如果有任意false则返回前者
            classname: this.props.classname,  //自定义初始化样式，没有使用默认初始化样式
        };
    }

    //必填校验
    requireCheck(event) {
        if (this.props.isRequired) {
            if (!value) {
                var checkResult = this.state.checkResult;
                checkResult.status = false;
                this.setState({
                    checkResult: checkResult
                })
            }
            console.log(this.state);
        }
    }

    //显示占位符
    showPlaceholder() {
        var checkResult = this.state.checkResult;
        checkResult.noPassMsg = this.props.checkResult.defaultNoPassMsg;
        checkResult.status = true;
        this.setState({
            checkResult: checkResult
        })
    }

    //用于其他组件控制该组件的显示，出现的bug是因为此处传入的是属性，部分input可能没有属性，所以可能为undefined。
    componentWillReceiveProps(nextProps) {
        if (nextProps.checkResult != undefined) {
            this.setState({
                checkResult: nextProps.checkResult
            });
        }
    }

    render() {
        var classname = this.state.classname ? this.state.classname : "login_phone_input";
        var checkClass = this.state.checkResult.status ? "" : "checkNoPass";

        return (
            <div>
                <div style={{width: this.props.width}} className={this.props.needUnderline ? "underline" : null}>
                    <input name={this.props.id} type={this.props.type ? this.props.type : "text"}
                           value={this.props.value ? this.props.value : ""}
                           placeholder={this.state.checkResult.status ? this.state.checkResult.passMsg : this.state.checkResult.noPassMsg}
                           onFocus={this.showPlaceholder} onBlur={this.requireCheck}
                           className={`${classname} ${checkClass}`} onChange={this.props.getData} />
                </div>
            </div>
        );
    }
}

export default Input;