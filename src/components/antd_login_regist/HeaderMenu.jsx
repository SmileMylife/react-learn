import {Menu, Icon} from 'antd';
import React, { Fragment } from "react";
import "../antd_login_regist/login.css";

const {SubMenu} = Menu;

class HeaderMenu extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Fragment>
                <div className="logo"/>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal"
                      style={{lineHeight: '64px'}}>
                    <Menu.Item key="mail">
                        <Icon type="mail"/>
                        明细日志
                    </Menu.Item>
                    <Menu.Item key="app" disabled>
                        <Icon type="appstore"/>
                        统计分析
                    </Menu.Item>
                    <SubMenu title={
                        <span className="submenu-title-wrapper"><Icon type="setting"/>
                        监控
                    </span>
                    }>
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                        <Icon type="edit"/>
                        配置管理
                    </Menu.Item>
                </Menu>
            </Fragment>
        );
    }
}

export default HeaderMenu;