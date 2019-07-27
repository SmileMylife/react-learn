import React from "react";
import { Modal, Button, Popconfirm } from 'antd';

class Model extends React.Component {
    state = { visible: false };

    isFirstDeal = () => {
        Modal.confirm({
            title: '您好,您将要反映的问题是否已经通过10086或其他渠道首次处理过？',
            okText: '是',
            cancelText: '否',
            onCancel: function() {
                this.isFirstDealNo();
            },
            onOk: ()=> {
                // showReply();
                this.props.showReply();
            }
        });
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
            onOk: function() {
                this.notRecieveReply();
            },
            onCancel: function() {
                this.setState({

                })
            }
        });
    }

    isFirstDealNo = () => {
        Modal.info({
            title: "请您优先通过10086反映，如您的合理诉求未得到妥善解决，请再来此反应监督仲裁，感谢您的支持！",
            okText: "我知道了"
        });
    };

    notRecieveReply =() => {
        Modal.info({
            title: "您的问题正在查证处理中，请耐心等待，如您的问题未得到妥善解决，请再来此反应问题？",
            okText: "我知道了"
        });
    };


    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
            </div>
        );
    }

    componentDidMount() {
        this.isFirstDeal();
    }

}

export default Model;