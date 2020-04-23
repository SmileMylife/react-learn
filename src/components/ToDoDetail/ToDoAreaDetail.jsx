import React, {Component} from 'react';
import {SegmentedControl, WingBlank, WhiteSpace, NavBar, Icon, Popover, Steps, Card} from 'antd-mobile';
import {Upload, Button} from "antd";
import "./ToDoAreaDetail.css";

const Step = Steps.Step;
const Item = Popover.Item;

//步骤进度svg
const customIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" className="am-icon am-icon-md">
        <g fillRule="evenodd" stroke="transparent" strokeWidth="4">
            <path d="M21 0C9.402 0 0 9.402 0 21c0 11.6 9.402 21 21 21s21-9.4 21-21C42 9.402 32.598 0 21 0z"/>
            <path fill=""
                  d="M29 18.73c0-.55-.447-1-1-1H23.36l4.428-5.05c.407-.46.407-1.208 0-1.668-.407-.46-1.068-.46-1.476 0l-5.21 5.89-5.21-5.89c-.406-.46-1.067-.46-1.475 0-.406.46-.406 1.207 0 1.667l4.43 5.05H14.23c-.55 0-.998.45-.998 1 0 .554.448.97 1 .97h5.9v3.942h-5.9c-.552 0-1 .448-1 1s.448.985 1 .985h5.9v4.896c0 .552.448 1 1 1 .55 0 .968-.284.968-.836v-5.06H28c.553 0 1-.433 1-.985s-.447-1-1-1h-5.9v-3.94H28c.553 0 1-.418 1-.97z"/>
        </g>
    </svg>
);

//节点名称配置
const NODE_CONF = {
    "start": "开始",
    "review": "首处理",
    "handle": "协办",
    "feedback": "反馈",
    "finish": "结束"
};


//详情模块数据展示配置
const config = [
    {
        "moduleKey": "custBaseInfo",
        "moduleName": "客户基本信息",
        "keys": [{"key": "acptNum", "name": "受理号码"}, {"key": "custName", "name": "客户姓名"}, {
            "key": "custStar",
            "name": "客户星级"
        }, {
            "key": "contactPhone",
            "name": "联系电话"
        }, {
            "key": "acptCity",
            "name": "受理地市"
        }, {
            "key": "acptDept",
            "name": "受理部门"
        }, {
            "key": "netArea",
            "name": "入网区域"
        }, {
            "key": "isGradeComplain",
            "name": "是否升级投诉"
        }, {
            "key": "isRepeatComplain",
            "name": "是否重复投诉"
        }, {
            "key": "segTlmtStsCd",
            "name": "本环节时限"
        }]
    }, {
        "moduleKey": "acptBizInfo",
        "moduleName": "受理业务要素",
        "keys": []
    }, {
        "moduleKey": "acptInfo",
        "moduleName": "受理信息",
        "keys": [{"key": "bizCntt", "name": "受理内容"}, {"key": "attaches", "name": "附件"}]
    }, {
        "moduleKey": "urgeOrAddInfo",
        "moduleName": "催单/追加信息",
        "keys": [{"key": "urgeInfos", "name": "催单信息"}, {"key": "addInfos", "name": "追加信息"}]
    }
];

class ToDoAreaDetail extends Component {
    state = {
        visible: true,
        selected: '',
        detailBtnSwitch: true,  //true为简略模式，false详细模式
        datas: []
    };

    componentWillMount() {
        //需要本地测试放开这里，数据格式需要确认
        this.setState({
            datas: {
                "wrkfmShowSwftno": "2020012213152512X1232",
                "srvReqstTypeNm": "服务请求->节点个锤子->程序真难写",
                "custBaseInfo": {
                    "acptNum": "18291165916",
                    "custName": "张佩",
                    "custStar": "三星",
                    "contactPhone": "18291165916",
                    "acptCity": "山西",
                    "acptDept": "服务请求部门",
                    "netArea": "陕西省西安市",
                    "isGradeComplain": "是",
                    "isRepeatComplain": "是",
                    "segTlmtStsCd": "1小时38分钟"
                },
                "acptBizInfo": [
                    //数据格式待定，定义为beans 里边封装map形式
                    {
                        "key": "netAddr",
                        "keyNm": "宽带地址",
                        "value": "山西省大同市"
                    }, {
                        "key": "netWidth",
                        "keyNm": "带宽",
                        "value": "100M"
                    }, {
                        "key": "bizLevel",
                        "keyNm": "业务保障等级",
                        "value": "特高"
                    }
                ],
                "acptInfo": {
                    "bizCntt": "这是受理内容区域，填写什么好呢？我也不知道！",
                    "attaches": [{"attachId": "23213231", "attachNm": "工单附件下载.txt"}, {
                        "attachId": "23213231",
                        "attachNm": "工单附件下载1.txt"
                    }]
                },
                "urgeOrAddInfo": {
                    "urgeInfos": "这是催单信息这是催单信息这是催单信息这是催单信息这是催单信息这是催单信息这是催单信息这是催单信息这是催单信息这是催单信息这是催单信息",
                    "addInfos": "这是追加信息这是追加信息这是追加信息这是追加信息这是追加信息这是追加信息这是追加信息这是追加信息这是追加信息这是追加信息这是追加信息这是追加信息"
                },
                "simpleDetails": {   //简易处理详情，只展示处理意见
                    "start": "这是开始的处理意见，这是开始的处理意见，这是开始的处理意见，这是开始的处理意见，这是开始的处理意见，这是开始的处理意见，这是开始的处理意见，",
                    "review": "这是首处理的处理意见，这是首处理的处理意见，这是首处理的处理意见，这是首处理的处理意见，这是首处理的处理意见，这是首处理的处理意见，这是首处理的处理意见，",
                    "handle": "这是协办的处理意见，这是协办的处理意见，这是协办的处理意见，这是协办的处理意见，这是协办的处理意见，这是协办的处理意见，这是协办的处理意见，",
                    "feedback": "这是反馈的处理意见，这是反馈的处理意见，这是反馈的处理意见，这是反馈的处理意见，这是反馈的处理意见，这是反馈的处理意见，这是反馈的处理意见，",
                    // "finish": "这是结束的处理意见，这是结束的处理意见，这是结束的处理意见，这是结束的处理意见，这是结束的处理意见，这是结束的处理意见，这是结束的处理意见，"
                }
            }
        })
    }

    //控制派单和返单选择
    onSelect = (opt) => {
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };

    //处理派单和返单显示隐藏
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };

    //处理详情页面按钮切换
    detailBtnChange = (value) => {
        if (value === "简略信息") {
            this.setState({
                detailBtnSwitch: true
            })
        } else {
            this.setState({
                detailBtnSwitch: false
            })
        }
    };

    //返回
    back = () => {
        this.props.history.push('/cpf');
    };

    render() {
        let datas = this.state.datas;
        return (
            <div>
                {/*上方导航部分*/}
                <NavBar
                    mode="dark"
                    icon={<Icon style={{marginLeft: "30px"}} type="left" onClick={this.back}/>}
                    rightContent={<Popover mask
                                           overlayClassName="fortest"
                                           overlayStyle={{color: 'currentColor'}}
                                           visible={this.state.visible}
                                           overlay={[
                                               (<Item key="4" value="send" data-seed="logId">派单</Item>),
                                               (<Item key="5" value="reply" style={{whiteSpace: 'nowrap'}}>返单</Item>)
                                           ]}
                                           align={{
                                               overflow: {adjustY: 0, adjustX: 0},
                                               offset: [-30, 0],
                                           }}
                                           onSelect={this.onSelect}
                    >
                        <div style={{
                            height: '100%',
                            padding: '0 30px',
                            marginRight: '-15px',
                            display: 'flex',
                            alignItems: 'center',
                        }}>处理</div>
                    </Popover>}
                >工单详情</NavBar>
                {/*以下为详情信息展示*/}
                <div>
                    <div className="detail-top">
                        <div className="detail-top-wrapper">
                            <WhiteSpace size="lg"/>
                            <p>工单流水：<span style={{color: "#0177ff"}}>{datas.wrkfmShowSwftno}</span></p>
                            <WhiteSpace size="md"/>
                            <p>服务请求节点：{datas.srvReqstTypeNm}</p>
                            <WhiteSpace size="lg"/>
                        </div>
                    </div>
                    <div>
                        {config.map((item, index) => {
                            //受理业务要素区域展示
                            if ("acptBizInfo" === item.moduleKey) {     //受理业务内容信息，根据接口返回字段，返回什么展示什么
                                return (
                                    <div className="detail-info-wrapper">
                                        <p className="todo-detail-title">{item.moduleName}</p>
                                        <div className="content-info">
                                            <ul>
                                                {datas[item.moduleKey].map((ele, number) => {
                                                    return (
                                                        <li><span style={{fontWeight: "bold"}}>{ele.keyNm}</span>：{ele.value}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            } else if ("acptInfo" === item.moduleKey) {     //受理内容区域针对附件特殊封装
                                return (
                                    <div className="detail-info-wrapper">
                                        <p className="todo-detail-title">{item.moduleName}</p>
                                        <div className="content-info">
                                            <ul>
                                                {item.keys.map((elem, num) => {
                                                    if ("attaches" === elem.key) {
                                                        return (<li>
                                                            <p className="float-left" style={{fontWeight: "bold"}}>附件：</p>
                                                            <ol className="float-left">
                                                                {datas[item.moduleKey][elem.key].map((attachInfo, attachInd) => {
                                                                    return (
                                                                        <li><a className="attach-info">{attachInfo.attachNm}</a></li>
                                                                    )
                                                                })}
                                                                <li style={{marginTop: "10px"}}>
                                                                    <Upload onChange={this.onChange}><Button size="small">上传文件</Button>
                                                                        <span style={{marginLeft: "10px", color: "red"}}>支持图片、Word、Excel、PPT、PDF、等文件格式，文件大小不超过20M</span>
                                                                    </Upload>
                                                                </li>
                                                            </ol>
                                                            <div style={{clear: "both"}}/>
                                                        </li>)
                                                    } else {
                                                        return (
                                                            <li><span style={{fontWeight: "bold"}}>{elem.name}</span>：{datas[item.moduleKey][elem.key]}</li>
                                                        )
                                                    }
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            } else {    //正常详情展示模块
                                return (
                                    <div className="detail-info-wrapper">
                                        <p className="todo-detail-title">{item.moduleName}</p>
                                        <div className="content-info">
                                            <ul>
                                                {item.keys.map((elem, num) => {
                                                    if (!datas[item.moduleKey][elem.key]) {
                                                        return "";
                                                    } else if (item.moduleKey === "custBaseInfo" && (elem.key === "contactPhone" || elem.key === "acptNum")) {
                                                        return (<li>
                                                            <span style={{fontWeight: "bold"}}>{elem.name}</span>：<a
                                                            className="attach-info">{datas[item.moduleKey][elem.key]}</a>
                                                        </li>)
                                                    }
                                                    return (
                                                        //控制所有字段如果为空则不展示，凡是为空的字段统一不展示
                                                        <li>{<span style={{fontWeight: "bold"}}>{elem.name}</span>}：{datas[item.moduleKey][elem.key]}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                        {/*此区域为处理详情展示区域*/}
                        <div style={{width: "90%", margin: "0 auto"}}>
                            {/*处理详情展示*/}
                            <WingBlank size="lg" className="sc-example">
                                <p className="todo-detail-title">处理详情</p>
                                <SegmentedControl values={['简略信息', '详细信息']} onValueChange={this.detailBtnChange}/>
                            </WingBlank>
                            {/*简易版处理详情展示*/}
                            {
                                this.state.detailBtnSwitch ?
                                    <div>
                                        <WhiteSpace size="lg"/>
                                        <Steps current={Object.keys(datas.simpleDetails).length}>
                                            {
                                                Object.keys(datas.simpleDetails).map((item, index) => {
                                                    return (
                                                        <Step title={NODE_CONF[item]} icon={customIcon()}
                                                              description={<span style={{
                                                                  fontSize: "14px",
                                                                  color: "#222222"
                                                              }}>{`处理意见： ${datas.simpleDetails[item]}`}</span>}/>
                                                    )
                                                })
                                            }
                                        </Steps>
                                    </div> :
                                    //详细信息模式展示
                                    <div>
                                        <WingBlank size="lg">
                                            <WhiteSpace size="lg"/>
                                            <Card>
                                                <Card.Header title="首处理"/>
                                                <Card.Body>
                                                    <div>
                                                        <p style={{width: "12.5%", fontWeight: "bold"}} className="field-left">处理意见：</p>
                                                        <p style={{width: "87.5%"}} className="field-right">
                                                            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Body>
                                                    <div className="detail-show">
                                                        <ol>
                                                            <li>
                                                                <div className="field-left">
                                                                    <span>示例字段：</span>
                                                                </div>
                                                                <div className="field-right">
                                                                    <span>示例字段值</span>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </Card.Body>
                                                <Card.Body>
                                                    <div className="detail-show">
                                                        <ol>
                                                            <li>
                                                                <div className="field-left">
                                                                    <span>示例字段：</span>
                                                                </div>
                                                                <div className="field-right">
                                                                    <span>示例字段值</span>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            <WhiteSpace size="lg"/>
                                        </WingBlank>

                                        <WingBlank size="lg">
                                            <WhiteSpace size="lg"/>
                                            <Card>
                                                <Card.Header title="开始"/>
                                                <Card.Body>
                                                    <div>
                                                        <p style={{width: "13%", fontWeight: "bold"}} className="field-left">处理意见：</p>
                                                        <p style={{width: "87%"}} className="field-right">
                                                            测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                                <Card.Body>
                                                    <div className="detail-show">
                                                        <ol>
                                                            <li>
                                                                <div className="field-left">
                                                                    <span>示例字段：</span>
                                                                </div>
                                                                <div className="field-right">
                                                                    <span>示例字段值</span>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </Card.Body>
                                                <Card.Body>
                                                    <div className="detail-show">
                                                        <ol>
                                                            <li>
                                                                <div className="field-left">
                                                                    <span>示例字段：</span>
                                                                </div>
                                                                <div className="field-right">
                                                                    <span>示例字段值</span>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            <WhiteSpace size="lg"/>
                                        </WingBlank>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoAreaDetail;
