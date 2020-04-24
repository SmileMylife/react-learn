import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Icon, NavBar, Popover} from "antd-mobile";
import {FRESH_SUCCESS, FRESH_FAIL, FRESH_LOADING} from "./Constants";

class ToDoArea extends Component {

    state = {
        toDoList: [],
        freshStatus: FRESH_SUCCESS
    };

    //刷新待办区列表
    refreshToDoList = () => {
        this.setState(function () {
            return Object.assign({}, this.state, {freshStatus: FRESH_LOADING})
        });

        /*Fetch.post(
            _.extend(params, dftParams),
            function (data) {
                let threeData = []
                let sixData = []
                let threeMonTime = moment().subtract(3, "months").format("YYYY-MM-DD HH:mm:ss")
                for (let i = 0; i < data.beans.length; i++) {
                    if (data.beans[i].acptTime < threeMonTime) {
                        sixData.push(data.beans[i])
                    } else {
                        threeData.push(data.beans[i])
                    }
                }
                this.setState({
                    threeData: threeData,
                    sixData: sixData
                })
            }, function (data) {
                Toast.fail("查询失败");
                console.log(data.returnMessage);
            }
        );*/

        let timeOut = setTimeout(() => {
            this.setState(() => {
                console.log("设置万：", Object.assign({}, this.state, {freshStatus: FRESH_FAIL}));
                return Object.assign({}, this.state, {freshStatus: FRESH_FAIL});
            });
        }, 2000);
    };

    //组件挂载完毕
    componentWillMount() {
        this.refreshToDoList();

        //TODO 注释本地测试代码
        this.setState({
            toDoList: [
                {
                    "wrkfmId": "2000000759",
                    "srvReqstTypeNm": "家庭业务→服务触点→装维人员→全局流转→售后服务→布线不合理→全局流转",
                    "wrkfmShowSwftno": "20190110112027X427232430",
                    "segTlmtStsCd": "001",
                    "segTlmtStsTime": "1小时02分钟"
                },
                {
                    "wrkfmId": "2000000760",
                    "srvReqstTypeNm": "家庭业务→服务触点→装维人员→全局流转→售后服务→布线不合理→全局流转",
                    "wrkfmShowSwftno": "20190110112027X427232431",
                    "segTlmtStsCd": "004",
                    "segTlmtStsTime": "28分29秒"
                },
                {
                    "wrkfmId": "2000000761",
                    "srvReqstTypeNm": "家庭业务→服务触点→装维人员→全局流转→售后服务→布线不合理→全局流转",
                    "wrkfmShowSwftno": "20190110112027X427232432",
                    "segTlmtStsCd": "003",
                    "segTlmtStsTime": "1小时10分钟"
                }
            ]
        })
    }

    back() {
        this.props.history.push('/cpf');
    }

    render() {
        return (
            <div>
                {/*上方导航部分*/}
                <NavBar
                    mode="dark"
                    icon={<Icon style={{marginLeft: "0px"}} type="left" onClick={this.back}/>}
                    rightContent={this.state.freshStatus === 0 ? <Icon type={"check"} onClick={this.refreshToDoList}/>
                        : this.state.freshStatus === 1 ? <Icon type={"loading"}/> :
                            <Icon type={"cross"} onClick={this.refreshToDoList}/>}
                >待办区</NavBar>

                {/*列表展示部分*/}
                <div>
                    {(this.state.toDoList || []).map((item, index) =>
                        <div className="todo-box" key={index}>
                            <p className="float-left"><span
                                className="field-name">工单流水：</span>{item.wrkfmShowSwftno}</p>
                            <div className="float-right">
                                {/*<Link to={'/cpf/SrAcceptQryDtl/' + item.wrkfmId + '/' + item.provCode + '/' + item.wrkfmShowSwftno}></Link>*/}
                                <Icon type={"right"}/>
                            </div>
                            <div style={{clear: "both"}}/>
                            {/*服务请求节点展示*/}
                            <div className={"float-left"}>
                                <p className={"field-name"}>服务请求节点：</p>
                            </div>
                            <div className={"float-left"}>
                                <p>{item.srvReqstTypeNm}</p>
                            </div>
                            <p style={{clear: "both"}}>
                                <span className="field-name">本环节时限：</span>
                                {item.segTlmtStsCd === "003" || item.segTlmtStsCd === "004"
                                    ? <span
                                        style={{color: "red"}}>{item.segTlmtStsTime}</span> :
                                    <span>{item.segTlmtStsTime}</span>}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default ToDoArea;
