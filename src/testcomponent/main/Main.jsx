import React from 'react';
import ReactDom from 'react-dom';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h4>状态显示栏</h4>
                <div>
                    <p>姓名</p>
                    <p>年龄</p>
                    <p>学位</p>
                </div>
            </div>
        );
    }

}