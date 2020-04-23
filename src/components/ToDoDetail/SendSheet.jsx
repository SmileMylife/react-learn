import {createForm} from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';
import {WhiteSpace, NavBar, Icon, Popover, Radio, Picker, List, TextareaItem, Button} from 'antd-mobile';
import {district, provinceLite} from 'antd-mobile-demo-data';
import * as React from "react";
import {TreeSelect} from "antd";

const {TreeNode} = TreeSelect;

const COMMON_WORDS = [
    {
        label: "合格",
        value: "1"
    }, {
        label: "不合格",
        value: "2"
    }, {
        label: "无线音乐俱乐部",
        value: "3"
    }
];

class SendSheet extends React.Component {
    state = {
        data: [],
        cols: 1,
        pickerValue: [],
        asyncValue: [],
        sValue: ['2013', '春'],
        visible: false,
        colorValue: ['#00FF00'],
    };
    onClick = () => {
        setTimeout(() => {
            this.setState({
                data: provinceLite,
            });
        }, 120);
    };

    render() {
        const {getFieldProps} = this.props.form;
        return (<div>
            {/*上方导航部分*/}
            <NavBar
                mode="dark"
                icon={<Icon style={{marginLeft: "30px"}} type="left" onClick={this.back}/>}>派单</NavBar>

            {/*派转内容*/}
            <WhiteSpace size="lg"/>
            <List style={{backgroundColor: 'white'}}>

                <Picker data={COMMON_WORDS} cols={1} {...getFieldProps('district3')} >
                    <List.Item arrow="horizontal" className="list-item-custom">常用语</List.Item>
                </Picker>

                <Picker data={COMMON_WORDS} cols={1} {...getFieldProps('district2')}>
                    <List.Item arrow="horizontal" className="list-item-custom">上环节评价</List.Item>
                </Picker>

                <Picker data={COMMON_WORDS} cols={1} {...getFieldProps('district2')}>
                    <List.Item arrow="horizontal" className="list-item-custom">派达部门性质</List.Item>
                </Picker>

                <Picker data={COMMON_WORDS} cols={1} {...getFieldProps('district2')}>
                    <List.Item arrow="horizontal" className="list-item-custom">派单要求</List.Item>
                </Picker>

                {/*派转意见*/}
                <List.Item className="list-item-custom">派转意见</List.Item>
                <TextareaItem
                    {...getFieldProps('count', {
                        initialValue: '',
                    })}
                    rows={3}
                    count={4000}
                    placeholder={"请输入派转意见"}>
                </TextareaItem>

                {/*派转工作组*/}
                <List.Item className="list-item-custom">派达工作组</List.Item>
                <TreeSelect
                    showSearch
                    style={{width: '100%'}}
                    value={this.state.value}
                    dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
                    placeholder="请选择工作组"
                    allowClear
                    treeDefaultExpandAll
                    onChange={this.onChange}
                >
                    <TreeNode value="20200146001" title="云南分公司工作组">
                        <TreeNode value="20200146002" title="热线处理组">
                            <TreeNode value="20200146003" title="热线处理子工作组1"/>
                            <TreeNode value="20200146004" title="热线处理子工作组2"/>
                        </TreeNode>
                        <TreeNode value="20200146100" title="集客处理组">
                            <TreeNode value="20200146101" title="集客处理组1"/>
                            <TreeNode value="20200146102" title="集客处理组2"/>
                        </TreeNode>
                    </TreeNode>
                </TreeSelect>

                {/*派达人*/}
                <List.Item className="list-item-custom">派达人</List.Item>
                <TreeSelect
                    showSearch
                    style={{width: '100%'}}
                    value={this.state.value}
                    dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
                    placeholder="请选择派达人"
                    allowClear
                    treeDefaultExpandAll
                    onChange={this.onChange}
                >
                    <TreeNode value="20200146001" title="云南分公司工作组"/>
                    <TreeNode value="20200146003" title="热线处理子工作组1"/>
                    <TreeNode value="20200146004" title="热线处理子工作组2"/>
                    <TreeNode value="20200146100" title="集客处理组"/>
                    <TreeNode value="20200146101" title="集客处理组1"/>
                    <TreeNode value="20200146102" title="集客处理组2"/>
                </TreeSelect>
            </List>
            <WhiteSpace size={"lg"}/>
            <WhiteSpace size={"lg"}/>
            <div style={{textAlign: "center"}}>
                <Button type="default" inline style={{width: "49%", backgroundColor: "#e6e6e6"}}>取消</Button>
                <Button type="primary" inline style={{marginLeft: "5px", width: "49%"}}>提交</Button>
            </div>
        </div>);
    }
}

export const SEND_SHEET = createForm()(SendSheet);
