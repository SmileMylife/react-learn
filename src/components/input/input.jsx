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
        this.initClassname = this.props.classname == undefined ? "login_phone_input" : this.props.classname;
        this.state = {
            placeholder: this.props.placeholder,
            classname: this.props.classname,  //自定义初始化样式，没有使用默认初始化样式
        }
    }

    //必填校验
    requireCheck(event) {
        const value = event.target.value;
        if (this.props.isRequired) {
            if (value == "" || value == null || value == undefined) {
                this.setState({
                    placeholder: this.props.noPassPrompt,
                    classname: this.initClassname + " checkNoPass"
                });
            }
        }
    }

    //显示占位符
    showPlaceholder() {
        this.setState({
            placeholder: this.props.placeholder,
            classname: this.initClassname
        })
    }

    //失去焦点时占位符显示

    render() {
        var classname = this.state.classname;
        return (
            <div>
                <div style={{width: this.props.width}} className={this.props.needUnderline ? "underline" : ""}>
                    <input type={this.props.type == "" ? "text" : this.props.type}
                           placeholder={this.state.placeholder}
                           onFocus={this.showPlaceholder} onBlur={this.requireCheck} className={classname == undefined ? "login_phone_input" : classname}/>
                </div>
            </div>
        );
    }
}

export default Input;