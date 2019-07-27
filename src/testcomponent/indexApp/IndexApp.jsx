import React from "react"
import Model from "../model/Model";
import H1 from "../h1/H1";
import {Modal} from "antd/lib/index";

class IndexApp extends React.Component {
    constructor(props) {
        super(props);
        this.showReply = this.showReply.bind(this);
        this.state = {
            flag: true
        }
    }

    showReply() {
        Modal.confirm({
            okText: '48小时内未接到回复',
            cancelText: '已经处理，但对前期处理不满',
            cancelButtonProps: {
                block: true,
            },
            okButtonProps: {
                block: true,
                style: {
                    marginTop: "10px",
                    marginLeft: "0px"
                }
            },
            /*onOk: function() {
                notRecieveReply();
            },*/
            onCancel: () => {
                console.log("重新设置了state");
                this.setState({
                    flag: false
                })
            }
        });
    }

    componentDidMount() {
        window.opener=null;
        window.open('','_self');
        window.close();
    }

    render() {
        return (
            <div>
                {this.state.flag ? <Model showReply={this.showReply}/> : <H1/>}
            </div>
        );
    }
}

export default IndexApp;