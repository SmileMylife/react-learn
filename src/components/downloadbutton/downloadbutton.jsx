import React from "react"
import "./downloadbutton.css"

class Downloadbutton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="downloadButton">
                <button>
                    下载知乎 App
                </button>
            </div>
        );
    }
}

export default Downloadbutton;