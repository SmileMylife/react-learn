import React from 'react';
import "./table.css"

class Table extends React.Component {

    state = {
        currentPageNum: 1,      //当前页数
        perPageCount: 10,       //每页条数
        total: 0,
        data: [
            {
                "provCode": "00030016",
                "tenantId": "100000",
                "username": "张佩",
            },
            {
                "provCode": "00030015",
                "tenantId": "100000",
                "username": "张三",
            }
        ]
    };

    //组件将要挂载时
    componentWillMount() {

    }

    //组件挂载完毕请求后台数据
    componentDidMount() {
        console.log("组件挂载完毕！", this.props.config.url);
        this.getTableData();
    }

    //修改每页条数后在次数进行数据重新加载，该方法为发送请求的最佳位置
    componentDidUpdate(preProps, preState) {
        if ((preState.currentPageNum != this.state.currentPageNum)
            || (preState.perPageCount != this.state.perPageCount)) {
            this.getTableData();
        }
    }

    //组件将要接收新属性时
    componentWillReceiveProps() {

    }

    //点击下一页
    nextPageNum = () => {
        this.setState((prevState, props) => {
                if (prevState.currentPageNum >= (Math.floor(prevState.data.total / prevState.perPageCount) + 1)) {
                    return {
                        currentPageNum: prevState.currentPageNum
                    }
                } else {
                    return {
                        currentPageNum: prevState.currentPageNum + 1
                    }
                }
            }
        );
    };

    //点击上一页
    prePageNum = () => {
        this.setState((prevState, props) => {
            if (prevState.currentPageNum <= 1) {
                return {
                    currentPageNum: 1
                }
            } else {
                return {
                    currentPageNum: prevState.currentPageNum - 1
                }
            }
        });
    };

    //修改每页条数
    changePerPageCount = (event) => {
        if (event.target) {
            this.setState({
                perPageCount: event.target.value
            });

            //重新请求后台数据
            // this.getTableData();
        }
    };

    //跳转至指定页
    breakPageNum = (event) => {
        if (event.target) {
            this.setState({
                currentPageNum: parseInt(event.target.value)
            });
        }

        //向后台请求数据
        // this.getTableData();
    };

    //向后台请求数据
    getTableData = () => {

        if (!this.props.config.url) {
            return;
        }

        //请求后台
        let _this = this;
        var formData = new FormData();
        formData.append("start", ((this.state.currentPageNum - 1) * this.state.perPageCount).toString());
        formData.append("limit", this.state.perPageCount.toString());
        fetch(this.props.config.url, {
            body: formData,
            method: "POST",
        }).then(function (resp) {
            return resp.json();
        }).then(function (result) {
            if (result) {
                _this.setState({
                    data: result.beans,
                    total: result.bean.total
                })
            }
        });
    };

    render() {
        return (
            <div>
                <div style={{width: this.props.config.width, margin: "0 auto"}}>
                    {/*表格数据显示部分*/}
                    <table width={this.props.config.width} border="1px solid black">
                        <tbody>
                        <tr>
                            {this.props.config.item.map((cell, index) =>
                                <th key={index}>{cell.cellName}</th>
                            )}
                        </tr>

                        {this.state.data.map((row, index) =>
                            <tr key={index}>
                                {this.props.config.item.map((item, index) =>
                                    <td key={index}>
                                        {row[item.key]}
                                    </td>
                                )
                                }
                            </tr>
                        )}
                        </tbody>
                    </table>

                    {/*展示是否分页部分*/}
                    {this.props.config.isPaging ? <div style={{float: "right", width: this.props.config.width}}>
                        <p style={{float: "right", lineHeight: "30px", margin: "0px"}}>跳转至 <input type="text"
                                                                                                  onBlur={this.breakPageNum}
                                                                                                  style={{
                                                                                                      width: "25px",
                                                                                                      height: "20px",
                                                                                                      outline: "none",
                                                                                                      border: "1px solid rgb(221,221,221)",
                                                                                                      textAlign: "center"
                                                                                                  }}/> 页</p>
                        <p style={{float: "right", lineHeight: "30px", margin: "0px"}}>每页条数 <select
                            style={{outline: "none", appearance: "none"}} onChange={this.changePerPageCount}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>&nbsp; 共计 <span>{this.state.total}</span> 条 {Math.ceil((this.state.total / this.state.perPageCount))}页，当前第 <span>{this.state.currentPageNum}</span> 页，
                        </p>
                        <div style={{clear: "both", float: "right"}}>
                            <a href="javascript:void(0)" onClick={this.prePageNum}>上一页</a>&nbsp;
                            <a href="javascript:void(0)" onClick={this.nextPageNum}>下一页</a>
                        </div>
                    </div> : ""}
                </div>
            </div>
        )
    }
}

export default Table;
