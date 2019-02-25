import React from "react"
import "./input.css"

/**
 * 组件属性包括css类名、是否必填、占位符名称及校验失败是占位符名称、input框类型
 *
 * 学习心得：1.react组件是针对单一组件而言，在设计的时候不必考虑到外部的一些因素，反而使耦合度过高
 *         2.在组件初始化的时候，元素绑定的事件里的js是会执行一次的，所以不能直接在事件中直接写事件处理代码，而是封装成函数，如this.show不能写成this.show()
 */
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.requireCheck = this.requireCheck.bind(this);
        this.showPlaceholder = this.showPlaceholder.bind(this);
        this.state = {
            placeholder: this.props.placeholder,
            classname: ""
        }
    }

    //必填校验
    requireCheck(event) {
        const value = event.target.value;
        if (this.props.isRequired) {
            if (value == "" || value == null || value == undefined) {
                this.setState({
                    placeholder: this.props.noPassPrompt,
                    classname: "checkNoPass"
                });
            }
        }
    }

    //显示占位符
    showPlaceholder() {
        this.setState({
            placeholder: this.props.placeholder,
            classname: ""
        })
    }

    //失去焦点时占位符显示

    render() {
        return (
            <div>
                <input type={this.props.type == "" ? "text" : this.props.type}
                       placeholder={this.state.placeholder}
                       onFocus={this.showPlaceholder} onBlur={this.requireCheck} className={this.state.classname}/>
            </div>
        );
    }
}

export default Input;