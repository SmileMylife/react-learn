import React from "react"
import "./top.css"
import TopLeft from "../top-left/top-left";
import TopCenter from "../top-center/top-center";
import TopRight from "../top-right/top-right";

/**
 * 如何实现真正的border 1px，在设置border属性时将值设置为0，实际展示出来的就是1
 */
class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="top_container">
                <TopLeft/>
                <TopCenter/>
                <TopRight/>
            </div>
        );
    }
}

export default Top;