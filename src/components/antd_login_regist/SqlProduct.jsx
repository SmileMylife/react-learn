import {Form, Select, AutoComplete, Input, InputNumber, Button, DatePicker, Typography} from 'antd';
import "./login.css";
import { Fragment } from "react";
import React from "react";

const {Option} = Select;
const AutoCompleteOption = AutoComplete.Option;
const {TextArea} = Input;
const {Title} = Typography;

function validatePrimeNumber(number) {
    if (number === 11) {
        return {
            validateStatus: 'success',
            errorMsg: null,
        };
    }
    return {
        validateStatus: 'error',
        errorMsg: 'The prime between 8 and 12 is 11!',
    };
}

class SqlProduct extends React.Component {
    state = {
        number: {
            value: 11,
        },
    };

    handleNumberChange = value => {
        this.setState({
            number: {
                ...validatePrimeNumber(value),
                value,
            },
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        //sql语句布局
        const sqlItemLayout = {
            labelCol: {
                span: 2,
                offset: 11
            },
            wrapperCol: {
                span: 20,
                offset: 2
            }
        };

        //提交按钮布局
        const subBtnLayout = {
            wrapperCol: {
                span: 4,
                offset: 10
            }
        };

        const formItemLayout = {
            labelCol: {span: 2, offset: 8},
            wrapperCol: {span: 4, offset: 1},
        };

        const {number} = this.state;

        //手机号码前缀
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{width: 70}}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );


        return (
            <Fragment>
                <Title level={3} style={{textAlign: "center"}}>SQL脚本生成工具</Title>
                <Form {...formItemLayout} onSubmit={this.handleSubmit} className="login-form" layout={"horizontal"}>
                    <Form.Item label="操作类型">
                        {getFieldDecorator('gender', {
                            rules: [{required: true, message: '请选择操作类型！'}],
                        })(
                            <Select placeholder="请选择操作类型" onChange={this.handleSelectChange}>
                                <Option value="0">请选择</Option>
                                <Option value="1">update</Option>
                                <Option value="2">insert</Option>
                                <Option value="3">delete</Option>
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item label="是否回滚脚本">
                        {getFieldDecorator('isRollback', {
                            rules: [{required: true, message: '请选择是否为回滚脚本！'}],
                        })(
                            <Select placeholder="请选择是否为回滚脚本" onChange={this.handleSelectChange}>
                                <Option value="0">否</Option>
                                <Option value="1">是</Option>
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item label="是否备份脚本">
                        {getFieldDecorator('isBackup', {
                            rules: [{required: true, message: '请选择是否为备份脚本！'}],
                        })(
                            <Select placeholder="请选择是否为备份脚本" onChange={this.handleSelectChange}>
                                <Option value="0">否</Option>
                                <Option value="1">是</Option>
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item label="省份名称">
                        {getFieldDecorator('provNm', {
                            rules: [{required: true, message: '请选择省份名称！'}],
                        })(
                            <Select placeholder="请选择省份名称" onChange={this.handleSelectChange}>
                                <Option value="0">否</Option>
                                <Option value="1">是</Option>
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item label="姓名拼音">
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: '请选择姓名拼音！'}],
                        })(<Input/>)}                </Form.Item>

                    <Form.Item label="任务编号">
                        {getFieldDecorator('jira', {
                            rules: [{required: true, message: '请选择姓名拼音！'}],
                        })(<Input/>)}
                    </Form.Item>

                    <Form.Item label="任务版本时间">
                        {getFieldDecorator('date', {
                            rules: [{type: 'object', required: true, message: '请选择版本上线时间!'}],
                        })(<DatePicker />)}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="操作数量" validateStatus={number.validateStatus}>
                        {getFieldDecorator("opCount", {})(<InputNumber min={8} max={12} value={number.value}
                                                                onChange={this.handleNumberChange}/>)}
                    </Form.Item>

                    <Form.Item label="中文姓名">
                        {getFieldDecorator('connUsername', {
                            rules: [{required: true, message: '请选择姓名拼音！'}],
                        })(<Input/>)}
                    </Form.Item>

                    <Form.Item label="电话号码">
                        {getFieldDecorator('connPhone', {
                            rules: [{required: true, message: '请输入电话号码！'}],
                        })(<Input addonBefore={prefixSelector} style={{width: '100%'}}/>)}
                    </Form.Item>

                    <Form.Item {...sqlItemLayout} label="sql语句" style={{textAlign: "center"}}>
                        {getFieldDecorator('sql', {
                            rules: [{required: true, message: '请输入sql语句！'}],
                        })(<TextArea rows={6}/>)}
                    </Form.Item>

                    <Form.Item {...subBtnLayout}>
                        <Button type="primary" className={"login-form-button"}>
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </Fragment>
        )
    };
}

export const SqlProductForm = Form.create({name: 'sql_product'})(SqlProduct);