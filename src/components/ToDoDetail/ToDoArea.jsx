import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Icon, NavBar} from "antd-mobile";

class ToDoArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            threeData: [],
            sixData: []
        };
    }

    componentWillMount() {
        /*console.log(moment().subtract(3, "months").format("YYYY-MM-DD HH:mm:ss"));
        console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
        let dftParams = {...config.DEFAULT_PARAM};
        let params = {
            acptNum: Storage.getSession('acptNum'),
            callingNum: Storage.getSession('acptNum'),
            crtTime: moment().subtract(6, "months").format("YYYY-MM-DD HH:mm:ss"),
            endTime: moment().format('YYYY-MM-DD HH:mm:ss'),
            page: '1',
            size: '200',    //暂定此页面大小，后续可更改
            // url: 'http://172.22.225.46:10014/ngwfh5service/service/',
            method: 'H5QueryComplexProblemProcess'
        };*/
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
        //需要本地测试放开这里
        this.setState({
            threeData:[
                {
                    "wrkfmId": "2000000759",
                    "srvReqstTypeNm": "家庭业务→服务触点→装维人员→全局流转→售后服务→布线不合理→全局流转",
                    "wrkfmShowSwftno": "20190110112027X427232430",
                    "segTlmtStsCd": "1小时02分钟"
                },
                {
                    "wrkfmId": "2000000760",
                    "srvReqstTypeNm": "家庭业务→服务触点→装维人员→全局流转→售后服务→布线不合理→全局流转",
                    "wrkfmShowSwftno": "20190110112027X427232431",
                    "segTlmtStsCd": "28分29秒"
                },
                {
                    "wrkfmId": "2000000761",
                    "srvReqstTypeNm": "家庭业务→服务触点→装维人员→全局流转→售后服务→布线不合理→全局流转",
                    "wrkfmShowSwftno": "20190110112027X427232432",
                    "segTlmtStsCd": "1小时10分钟"
                }
            ]
        })
    }

    back() {
        this.props.history.push('/cpf');
    }

    render() {
        /*let backElement = null;
        let acptNum = Storage.getSession('acptNum');
        if (Storage.getSession("isSplit") === config.COMMON_CONST.NO) {
            backElement = <i className="cloud cloud-back" onClick={e => this.back()}/>;
        }*/
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon style={{marginLeft: "30px"}} type="left" onClick={this.back}/>}>待办区</NavBar>
                <div>
                    {(this.state.threeData || []).map((item, index) =>
                        <div className="todo-box" key={index}>
                            <p className="todo-sheet float-left">工单流水：{item.wrkfmShowSwftno}</p>
                            <div className="float-right">
                                <a>{/*<Link
                                    to={'/cpf/SrAcceptQryDtl/' + item.wrkfmId + '/' + item.provCode + '/' + item.wrkfmShowSwftno}></Link>*/}
                                    <span className="right-arrow"/></a>
                            </div>
                            <div style={{clear: "both"}}/>
                            <p className="reply-des todo-sheet">服务请求节点：{item.srvReqstTypeNm}</p>
                            <p className="reply-des todo-sheet">本环节时限：{item.segTlmtStsCd}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

}

export default ToDoArea;
