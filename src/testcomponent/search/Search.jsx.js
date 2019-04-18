/**
 * Created by ZhangPei on 2019/4/17.
 */
import React from 'react';
import ReactDom from 'react-dom';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h5>请输入关键词进行搜索</h5>
                <input type="text" />
                <button onClick={this.search}>搜索</button>
            </div>
        );
    }
}