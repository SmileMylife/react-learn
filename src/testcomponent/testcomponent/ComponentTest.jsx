import React from "react";

class ComponentTest extends React.Component {
    state = {
        data: [1, 2, 3]
    };

    render() {
        return (
            <div>
                {
                    this.state.data.map((item, index) => {
                        return <div>
                            {index == 1 ? <p>index的值为1</p> : ""}
                            {item}
                        </div>
                    })
                }
            </div>
        )
    }
}

export default ComponentTest;