import React from "react"
import "./top-left.css"
import Logo from "../../logo/logo";

class TopLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ["知乎", "首页", "发现", "话题"]
        }
    }

    render() {
        return (
            <div className="top_left_container">
                <ul>
                    {this.state.data.map((item, index) => {
                        if (index == 0) {
                            return (<li key={index}><a href="" className="logo"><Logo wdith="65" height="30"/></a></li>)
                        }
                        return (<li key={index}><a className="top_title" href="javascript:void(0)">{item}</a></li>);
                    })}
                </ul>
            </div>
        );
    }
}

export default TopLeft;