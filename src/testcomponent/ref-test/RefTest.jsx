/**
 * Created by ZhangPei on 2019/6/1.
 * 使用ref时一定要注意setState是异步的，可能存在dom没重新渲染前使用ref会存在问题，所以使用setState时使用传递两个函数的方式进行更新
 * 第二个函数即为回调函数
 */
import React from "react";

class RefTest extends React.Component {
    static propTypes = {

    };

    static defaultProps = {

    };

    componentDidMount() {
        console.log("组件挂载完毕后，显示input元素", this.input);
    }

    render() {
        return (
            <div>
                {/*ref属性是获取标记了ref属性的dom的内容，相当于此时将input元素绑定到了this上*/}
                <div ref={(input) => this.input = input}>
                    <input type="text" name="username"/>
                </div>
            </div>
        )
    }
}

export default RefTest;